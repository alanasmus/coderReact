import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Products from './containers/products';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <Products />
    </div>
  );
}

export default App;
