import { useDispatch, useSelector } from 'react-redux';
import { setActiveNavigator } from '../store/catalogSlice';
import CatalogNavigatorItem from "./CatalogNavigatorItem";

function CatalogNavigator({ categoriesList }) {
  const { activeNavigator } = useSelector(state => state.catalog);
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(setActiveNavigator(false));
  }

  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <a className={activeNavigator ? "nav-link" : "nav-link active"} href="" onClick={handleClick}>Всё</a>
      </li>
      {categoriesList.map(item => (
        <CatalogNavigatorItem key={item.id} {...item} />
      ))}      
    </ul>
  );
}

export default CatalogNavigator;