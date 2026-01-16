const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="alert alert-info text-center" role="alert">
            <h2 className="display-4">{greeting}</h2>
            <p className="lead mt-3">Aquí se mostrará el catálogo de productos próximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
