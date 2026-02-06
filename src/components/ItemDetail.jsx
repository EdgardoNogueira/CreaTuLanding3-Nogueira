import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div className="row g-4">
      <div className="col-12 col-lg-6">
        <img src={item.image} className="img-fluid rounded" alt={item.name} />
      </div>
      <div className="col-12 col-lg-6">
        <h2 className="mb-3">{item.name}</h2>
        <p className="text-muted">{item.description}</p>
        <p className="fs-4 fw-bold">${item.price.toLocaleString('es-AR')}</p>
        <p className="badge text-bg-secondary text-uppercase">{item.category}</p>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;
