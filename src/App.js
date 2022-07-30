import './styles/App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartContext } from './components/CartContext';

const App = () => {
  return (
    <CartContext.Provider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
