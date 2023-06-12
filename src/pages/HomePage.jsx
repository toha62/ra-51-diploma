import TopSale from "../components/TopSale";
import Catalog from "../components/Catalog";

function HomePage() {
  return (
    <>
      <TopSale /> 
      <Catalog isSearch={false} />
    </>    
  );  
}

export default HomePage;