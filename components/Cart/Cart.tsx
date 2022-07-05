import React, { FC } from "react";
import Image from "next/image";
import { useActions, useAppSelector } from "@hooks/reduxHooks/hooks";
import { IProduct } from "../../store/product/product.types";

const Cart: FC = () => {
  const { removeItem } = useActions();
  const { cart } = useAppSelector((state) => state);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      {cart?.map((product: IProduct) => {
        return (
          <React.Fragment key={product.title}>
            <img
              height="100px"
              width="100px"
              src={product.thumbnailUrl}
              alt={product.title}
            />
            <button type="button" onClick={() => removeItem(product)}>
              Remove from cart
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Cart;
