import CatalogNavigatorItem from "./CatalogNavigatorItem";

function CatalogNavigator({ categoriesList }) {

  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" href="#">Всё</a>
      </li>
      {categoriesList.map(item => (
        <CatalogNavigatorItem key={item.id} {...item} />
      ))}      
    </ul>
  );
}

export default CatalogNavigator;