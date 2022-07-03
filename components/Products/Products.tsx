import React, { FC } from "react";
import Image from "next/image";
import { useActions, useAppSelector } from "@hooks/reduxHooks/hooks";
import { useGetProductsQuery } from "../../store/product/product.api";
import { IProduct } from "../../store/product/product.types";

const Products: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(6);
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
      {isLoading && "LOADING"}
      {error && "ERROR"}
      {data?.map((product: IProduct) => {
        return (
          <React.Fragment key={product.title}>
            <Image
              height="100px"
              width="100px"
              src={product.image}
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
export default Products;
