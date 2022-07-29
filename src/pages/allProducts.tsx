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

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await axios.get(
//     `${process.env.NEXT_PUBLIC_DOMAIN}/photos/?_start=0&_limit=100`
//   );
//   const store = makeStore();
//
//   // const state = store.getState();
//   //
//   await store.dispatch(getProducts.initiate());
//
//   // await store.dispatch(productsActions.addProduct(data));
//
//   return {
//     props: {
//       data,
//     },
//     revalidate: 60,
//   };
// };
export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_DOMAIN}/photos/?_start=0&_limit=100`
      );

      await store.dispatch(productsSlice.actions.addProduct(data));

      return {
        props: {
          data,
        },
      };
    }
);

export default AllProducts;
