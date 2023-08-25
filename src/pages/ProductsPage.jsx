import Error from 'components/Error/Error';
import CreateProductForm from 'components/Forms/CreateProductForm/CreateProductForm';
import Loader from 'components/Loader/Loader';
import ProductsList from 'components/Products/ProductsList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredProducts,
  selectProducts,
} from 'store/products/selectors';
import { setFilter } from 'store/products/slice';
import {
  createProductThunks,
  getAllProductsThunks,
} from 'store/products/thunks';

const ProductsPage = () => {
  const { isLoading, error } = useSelector(selectProducts);
  const filteredProducts = useSelector(selectFilteredProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunks());
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setFilter(e.target[0].value));
  };

  const createProduct = body => {
    dispatch(createProductThunks(body));
  };

  return (
    <>
      <CreateProductForm createProduct={createProduct} />
      <form className="d-flex" onSubmit={handleSubmit}>
        <input className="form-control me-2" type="text" placeholder="Filter" />
        <button className="btn btn-outline-success" type="submit">
          Filter
        </button>
      </form>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {filteredProducts && <ProductsList products={filteredProducts} />}
    </>
  );
};

export default ProductsPage;
