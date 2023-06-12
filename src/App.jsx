import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import Item from './pages/Item';
import Page404 from './pages/Page404';
import Header from "./components/Header";
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/catalog.html' element={<CatalogPage />} />
              <Route path='/catalog/:id.html' element={<Item />} />
              <Route path='/about.html' element={<About />} />
              <Route path='/contacts.html' element={<Contacts />} />
              <Route path='/cart.html' element={<Cart />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </div>
        </div>
      </main>      
      <Footer />
    </BrowserRouter>
  );
}

export default App
