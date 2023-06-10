import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../store/catalogSlice';
import CatalogNavigator from './CatalogNavigator';
import CatalogItem from './CatalogItem';
import Loader from './Loader';

function Catalog() {
  const {categoriesList, isLoading} = useSelector(state => state.catalog);
  const dispatch = useDispatch();   

  useEffect(() => {      
    dispatch(fetchCategories('categories'));    
  }, []);

  // if (!topSalesList.length) {
  //   return null;
  // }
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CatalogNavigator categoriesList={categoriesList} />
      {isLoading === 'loading' ?
        <Loader />
      :
        <div className="row">   
          {/* {categoriesList.map(item => (
            <CatalogItem key={item.id} {...item} />
          ))}    */}
        </div>
      }           
    </section>
  );
}

export default Catalog;