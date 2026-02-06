import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../data/products';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId).then((response) => {
      setItem(response);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) {
    return <p className="text-center my-5">Cargando detalle...</p>;
  }

  if (!item) {
    return (
      <div className="text-center my-5">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="btn btn-outline-primary mt-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <section className="container my-5">
      <ItemDetail item={item} />
    </section>
  );
};

export default ItemDetailContainer;
