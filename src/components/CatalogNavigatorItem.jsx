function CatalogNavigatorItem({ title, id, activeNavigator, handleClickNavigator }) {
 
  return (
    <li className="nav-item">
      <a
        className={activeNavigator === id ? "nav-link active" : "nav-link"}
        href=""
        id={id}
        onClick={(evt) => {
          evt.preventDefault();
          handleClickNavigator(+evt.target.id);
        }}
      >
        {title}
      </a>
    </li>
  );
}

export default CatalogNavigatorItem;