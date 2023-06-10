import { useDispatch, useSelector } from 'react-redux';
import { setActiveNavigator } from '../store/catalogSlice';

function CatalogNavigatorItem({ title, id }) {
  const { activeNavigator } = useSelector(state => state.catalog);
  const dispatch = useDispatch();

  const handleClick = (evt) =>  {
    evt.preventDefault();
    dispatch(setActiveNavigator(+evt.target.id))
  };

  return (
    <li className="nav-item">
      <a
        className={activeNavigator === id ? "nav-link active" : "nav-link"}
        href=""
        id={id}
        onClick={handleClick}
      >
        {title}
      </a>
    </li>
  );
}

export default CatalogNavigatorItem;