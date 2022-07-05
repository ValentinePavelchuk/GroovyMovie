import React, { FC } from "react";
import Image from "next/image";
import { useActions, useAppSelector } from "@hooks/reduxHooks/hooks";
import { GetStaticProps } from "next";
import axios from "axios";
import { IProduct } from "../store/product/product.types";

interface IProducts {
  data: any;
}

const AllProducts: FC<IProducts> = ({ data }) => {
  const { addItem } = useActions();
  const { cart } = useAppSelector((state) => state);

  const isInCart = (id) => {
    return cart.some((p) => p.id === id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      {data?.map((product: IProduct) => {
        return (
          <React.Fragment key={product.title}>
            <img
              height="100px"
              width="100px"
              src={product.thumbnailUrl}
              alt={product.title}
            />
            {isInCart(product.id) ? (
              "Added"
            ) : (
              <button type="button" onClick={() => addItem(product)}>
                Add to Cart
              </button>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps<IProducts> = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_DOMAIN}/photos/?_start=0&_limit=100`
  );

  return {
    props: {
      data,
    },
  };
};

export default AllProducts;
