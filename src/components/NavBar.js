import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header className="App-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar__brand" href="./public/index.html">Libreria Luar</a>
            <div className="collapse navbar-collapse navbar__link__list" id="navbarNavAltMarkup">
              <div className="navbar__link__list__a">
                <a className="navbar__link__list__a__link" aria-current="page" href="#">Escolar</a>
                <a className="navbar__link__list__a__link" href="#">Comercial</a>
                <a className="navbar__link__list__a__link" href="#">Artistica</a>
              </div>
              <CartWidget/>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;