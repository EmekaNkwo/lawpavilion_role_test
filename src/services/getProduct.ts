import { IGetProductsResponse } from "../models";

export const getProducts = async () => {
  let response: IGetProductsResponse;

  response = require("../json/products.json");

  const { products } = response.data || [];

  return products;
};
