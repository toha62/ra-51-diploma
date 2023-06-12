function CatalogButtonLoadMore({ handleClickLoadMore }) {
  return (
    <div className="text-center">
      <button
        className="btn btn-outline-primary"
        onClick={handleClickLoadMore}
      >
        Загрузить ещё
      </button>
    </div>
  );
}

export default CatalogButtonLoadMore;
