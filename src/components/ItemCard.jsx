import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text text-muted">{item.description}</p>
        <p className="fw-bold mt-auto">${item.price.toLocaleString('es-AR')}</p>
        <Link className="btn btn-primary mt-3" to={`/item/${item.id}`}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
