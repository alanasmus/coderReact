import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar__brand" href="./public/index.html">Libreria Luar</a>
            <div class="collapse navbar-collapse navbar__link__list" id="navbarNavAltMarkup">
              <div class="navbar__link__list__a">
                <a class="navbar__link__list__a__link" aria-current="page" href="#">Escolar</a>
                <a class="navbar__link__list__a__link" href="#">Comercial</a>
                <a class="navbar__link__list__a__link" href="#">Artistica</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;