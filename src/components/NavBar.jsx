import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
           Mi E-Commerce
        </a>
        
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
              <a className="nav-link active" href="#">Home</a>
            </li>
            
            {/* Dropdown Productos */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Productos
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Todos los Productos</a></li>
                <li><a className="dropdown-item" href="#">Ofertas</a></li>
                <li><a className="dropdown-item" href="#">Novedades</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Lo Más Vendido</a></li>
              </ul>
            </li>
            
            {/* Dropdown Categorías */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Electrónica</a></li>
                <li><a className="dropdown-item" href="#">Ropa y Accesorios</a></li>
                <li><a className="dropdown-item" href="#">Hogar y Jardín</a></li>
                <li><a className="dropdown-item" href="#">Deportes</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Ver Todas</a></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
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
