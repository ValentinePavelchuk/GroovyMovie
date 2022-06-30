import { FC } from "react";
import Image from "next/image";
import { useGetProductsQuery } from "../../store/product/product.api";
import { IProduct } from "../../store/product/product.types";

const Products: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(6);

  return (
    <>
      {isLoading && "LOADING"}
      {error && "ERROR"}
      {data?.map((product: IProduct) => {
        return (
          <Image
            key={product.title}
            height="100px"
            src={product.image}
            alt={product.title}
          />
        );
      })}
    </>
  );
};
export default Products;
