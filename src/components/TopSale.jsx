import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { loadTopSales } from '../store/topSalesSlice';
import { fetchTopSales } from '../store/topSalesSlice';
import CatalogItem from './CatalogItem';

function TopSale() {
  const topSalesList = useSelector(state => state.topSales.list);
  const dispatch = useDispatch();   

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch(`${import.meta.env.VITE_SHOP_API_URL}/top-sales`);
    //   const data = await response.json();
  
    //   console.log(data);
    //   dispatch(loadTopSales(data));
    // }

    // fetchData();    
    dispatch(fetchTopSales());    
  }, []);

  if (!topSalesList.length) {
    return null;
  }
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2> 
      <div className="row">   
        {topSalesList.map(item => (
          <CatalogItem key={item.id} {...item} />
        ))}   
      </div>     
    </section>
  );
}

export default TopSale;