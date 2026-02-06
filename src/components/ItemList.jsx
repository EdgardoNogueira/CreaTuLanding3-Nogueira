import ItemCard from './ItemCard';

const ItemList = ({ items }) => {
  if (!items.length) {
    return (
      <div className="alert alert-warning text-center" role="alert">
        No encontramos productos para esta categoría.
      </div>
    );
  }

  return (
    <div className="row g-4">
      {items.map((item) => (
        <div className="col-12 col-md-6 col-lg-4" key={item.id}>
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
