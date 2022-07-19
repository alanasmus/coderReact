import './styles/App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
