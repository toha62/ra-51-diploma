import { useDispatch, useSelector } from 'react-redux';
import { setActiveNavigator } from '../store/catalogSlice';
import CatalogNavigatorItem from "./CatalogNavigatorItem";

function CatalogNavigator() {
  const { activeNavigator, categoriesList } = useSelector(state => state.catalog);
  const dispatch = useDispatch();

  const handleClickNavigator = (navigatorId) => {    
    dispatch(setActiveNavigator(navigatorId));
  }

  return (    
      <ul className="catalog-categories nav justify-content-center">      
        <li className="nav-item">        
          <a
            className={activeNavigator === "All" ? "nav-link active" : "nav-link"}
            href=""
            onClick={(evt) => {
              evt.preventDefault();
              handleClickNavigator("All");
            }}
          > Всё </a>
        </li>
        {categoriesList.map(item => (
          <CatalogNavigatorItem
            key={item.id}
            handleClickNavigator={handleClickNavigator}
            activeNavigator={activeNavigator}
            {...item} />
        ))}      
      </ul>    
  );
}

export default CatalogNavigator;