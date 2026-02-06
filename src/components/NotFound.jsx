import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container my-5 text-center">
      <h2>Ups, no encontramos la página</h2>
      <p className="text-muted">Revisá el enlace o volvé al inicio.</p>
      <Link className="btn btn-primary mt-3" to="/">
        Ir al catálogo
      </Link>
    </div>
  );
};

export default NotFound;
