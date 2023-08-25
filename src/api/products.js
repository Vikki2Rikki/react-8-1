import { instanceForProducts } from './api';

export const getAllProducts = async () => {
  const { data } = await instanceForProducts();
  return data;
};

export const getProductsDetails = async id => {
  const { data } = instanceForProducts(`/${id}`);
  return data;
};

export const createProduct = async body => {
  const { data } = instanceForProducts.post(`/add`, body);
  return data;
};
