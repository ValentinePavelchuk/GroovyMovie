import React, { FC } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { initializeStore, makeStore, wrapper } from "../store/store";
import { getProducts } from "../store/product/product.api";
import Products from "../components/Products/Products";
import { productsActions, productsSlice } from "../store/product/product.slice";

const AllProducts: FC = () => {
  return <Products productsCount={100} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const store = makeStore();

  await store.dispatch(getProducts.initiate());

  return { props: { initialReduxState: store.getState() } };
};

export default AllProducts;
