import axios from "axios";
// import { IGetProductsResponse } from "../models";

export const getProducts = async () => {
  // let response: IGetProductsResponse;

  // // response = require("../json/products.json");
  // response = await axios.get(
  //   "https://nkwo-data-default-rtdb.firebaseio.com/products.json"
  // );

  // const { products } = response.data || [];

  // return products;

  return await axios.get(
    "https://nkwo-data-default-rtdb.firebaseio.com/products.json"
  );
};
