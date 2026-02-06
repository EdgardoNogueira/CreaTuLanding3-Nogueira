import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import { categories } from '../data/products';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          Comercio Nogueira
        </Link>
        
        {/* CartWidget  */}
        <div className="d-lg-none">
          <CartWidget />
        </div>
        
        {/* Botón */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Link */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            
            {/* Dropdown Productos */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/">
                    Todos los productos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/electronica">
                    Electrónica destacada
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/hogar">
                    Hogar y jardín
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/category/deportes">
                    Lo más vendido
                  </Link>
                </li>
              </ul>
            </li>
            
            {/* Dropdown Categorías */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </span>
              <ul className="dropdown-menu">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link className="dropdown-item" to={`/category/${category.id}`}>
                      {category.label}
                    </Link>
                  </li>
                ))}
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Ver todas
                  </Link>
                </li>
              </ul>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Contacto
              </NavLink>
            </li>
          </ul>
          
          {/* Cart */}
          <div className="d-none d-lg-block">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
