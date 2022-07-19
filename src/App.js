import './styles/App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
