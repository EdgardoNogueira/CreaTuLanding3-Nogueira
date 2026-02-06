import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { categories, getProducts } from '../data/products';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId).then((response) => {
      setItems(response);
      setLoading(false);
    });
  }, [categoryId]);

  const activeCategory = categories.find((category) => category.id === categoryId);

  return (
    <section className="container my-5">
      <div className="mb-4 text-center">
        <h2 className="display-5">{greeting}</h2>
        <p className="lead mt-2">
          {activeCategory
            ? `Estás viendo la categoría: ${activeCategory.label}`
            : 'Explorá nuestro catálogo completo.'}
        </p>
      </div>
      {loading ? (
        <p className="text-center">Cargando productos...</p>
      ) : (
        <ItemList items={items} />
      )}
    </section>
  );
};

export default ItemListContainer;
