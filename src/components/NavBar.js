import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="App-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/"><p className="navbar__brand">Libreria Luar</p></Link>
          <div className="collapse navbar-collapse navbar__link__list" id="navbarNavAltMarkup">
            <div className="navbar__link__list__a">
              <Link to="/category/1" className="navbar__link__list__a__link"><p>Escolar</p></Link>
              <Link to="/category/2" className="navbar__link__list__a__link"><p>Comercial</p></Link>
              <Link to="/category/3" className="navbar__link__list__a__link"><p>Artistica</p></Link>
            </div>
          </div>
          <CartWidget />
        </div>
      </nav>
    </header >
  );
}

export default NavBar;