import './styles/App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CartContextProvider  from './components/CartContext';

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
