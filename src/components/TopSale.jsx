import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopSales } from '../store/topSalesSlice';
import CatalogItem from './CatalogItem';
import Loader from './Loader';

function TopSale() {
  const {list: topSalesList, isLoading} = useSelector(state => state.topSales);
  const dispatch = useDispatch();   

  useEffect(() => {      
    dispatch(fetchTopSales());    
  }, []);

  // if (!topSalesList.length) {
  //   return null;
  // }
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {isLoading === 'loading' ?
        <Loader />
      :
        <div className="row">   
          {topSalesList.map(item => (
            <CatalogItem key={item.id} {...item} />
          ))}   
        </div>
      }           
    </section>
  );
}

export default TopSale;