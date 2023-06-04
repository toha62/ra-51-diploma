import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Catalog from './pages/catalog';
import About from './pages/abaout';
import Contacts from './pages/contacts';
import Cart from './pages/cart';
import Item from './pages/item';
import Page404 from './pages/Page404';
import Header from "./components/Header";

function App() {
  return (
    
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='*' element={<HomePage />} />
        <Route path='/catalog.html' element={<Catalog />} />
        <Route path='/catalog/:id.html' element={<Item />} />
        <Route path='/about.html' element={<About />} />
        <Route path='/contacts.html' element={<Contacts />} />
        <Route path='/cart.html' element={<Cart />} />
        <Route path='/page404.html' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
