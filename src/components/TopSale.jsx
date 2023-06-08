import sandalsMyer from '../img/sandals_myer.jpg';

function TopSale() {
  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
      <div className="col-4">
        <div className="card catalog-item-card">
          <img src={sandalsMyer} className="card-img-top img-fluid" alt="Босоножки &apos;MYER&apos;" />
          <div className="card-body">
            <p className="card-text">Босоножки &apos;MYER&apos;</p>
            <p className="card-text">34 000 руб.</p>
            <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default TopSale;