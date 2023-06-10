import { useDispatch, useSelector } from 'react-redux';
import { setActiveNavigator } from '../store/catalogSlice';
import CatalogNavigatorItem from "./CatalogNavigatorItem";

function CatalogNavigator() {
  const { activeNavigator, categoriesList, isLoading } = useSelector(state => state.catalog);
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(setActiveNavigator("All"));
  }

  return (
    isLoading === 'idle' ? (
      <ul className="catalog-categories nav justify-content-center">      
        <li className="nav-item">        
          <a
            className={activeNavigator === "All" ? "nav-link active" : "nav-link"}
            href=""
            onClick={handleClick}
          >
            Всё
          </a>
        </li>
        {categoriesList.map(item => (
          <CatalogNavigatorItem key={item.id} {...item} />
        ))}      
      </ul>
    ) : (
      null
    )       
  );
}

export default CatalogNavigator;