import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchItems, setActiveNavigator } from '../store/catalogSlice';
import CatalogNavigator from './CatalogNavigator';
import CatalogSearch from './CatalogSearch';
import CatalogItem from './CatalogItem';
import CatalogButtonLoadMore from './CatalogButtonLoadMore';
import Loader from './Loader';

function Catalog({ isSearch }) {
  const {itemsList, isLoading, activeNavigator, offset, isButtonAvailable} = useSelector(state => state.catalog);
  const dispatch = useDispatch();   

  useEffect(() => {    
    dispatch(fetchCategories('categories')); 
    if (!itemsList.length) {
      dispatch(fetchItems('items'));
    }           
  }, []);

  const handleClickNavigator = (navigatorId) => {    
    dispatch(setActiveNavigator(navigatorId));    
    dispatch(fetchItems(`items?categoryId=${navigatorId !== 'All' ? navigatorId : ''}`));
  }

  const handleClickLoadMore = () => {    
    dispatch(fetchItems(`items?categoryId=${activeNavigator !== 'All' ? activeNavigator : ''}&offset=${offset}`));
  }

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {isSearch ? <CatalogSearch /> : null}
      <CatalogNavigator handleClickNavigator={handleClickNavigator} />       
      <div className="row">   
        {itemsList.map(item => (
          <CatalogItem key={item.id} {...item} />
        ))}   
      </div>
      {isLoading === 'loading' ? (
        <Loader />
      ) : isButtonAvailable ? (
        <CatalogButtonLoadMore handleClickLoadMore={handleClickLoadMore} />
      ) : (
        null
      )}                      
    </section>
  );
}

export default Catalog;