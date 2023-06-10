import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchItems } from '../store/catalogSlice';
import CatalogNavigator from './CatalogNavigator';
import CatalogItem from './CatalogItem';
import Loader from './Loader';

function Catalog() {
  const {itemsList, isLoading} = useSelector(state => state.catalog);
  const dispatch = useDispatch();   

  useEffect(() => {      
    dispatch(fetchCategories('categories'));    
    dispatch(fetchItems('items'));    
  }, []);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CatalogNavigator />
      {isLoading === 'loading' ?
        <Loader />
      :
        <div className="row">   
          {itemsList.map(item => (
            <CatalogItem key={item.id} {...item} />
          ))}   
        </div>
      }           
    </section>
  );
}

export default Catalog;