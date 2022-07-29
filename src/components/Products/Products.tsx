import React, { FC } from "react";
import { useActions, useAppSelector } from "../../hooks/reduxHooks/hooks";
import { useGetProductsQuery } from "../../store/product/product.api";
import { IProduct } from "../../store/product/product.types";
import { makeStore } from "../../store/store";

interface IProducts {
  productsCount?: number;
}

const Products: FC<IProducts> = ({ productsCount = 10 }) => {
  const { data, isLoading, error } = useGetProductsQuery();
  const { addItem } = useActions();
  const { cart } = useAppSelector((state) => state);
  const store = makeStore();

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
      {data?.slice(0, productsCount).map((product: IProduct) => {
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
export default Products;
