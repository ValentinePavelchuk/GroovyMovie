import React, { FC } from "react";
import Image from "next/image";
import { useActions, useAppSelector } from "@hooks/reduxHooks/hooks";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "node:querystring";
import axios from "axios";
import { useRouter } from "next/router";
import { IProduct } from "../../store/product/product.types";

interface IProducts {
  data: IProduct;
}

const Products: FC<IProducts> = ({ data }) => {
  const { addItem } = useActions();
  const { cart } = useAppSelector((state) => state);
  const router = useRouter();

  const isInCart = (id) => {
    return cart.some((p) => p.id === id);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
      }}
    >
      <img
        height="100px"
        width="100px"
        src={data.thumbnailUrl}
        alt={data.title}
      />
      {isInCart(data.id) ? (
        "Added"
      ) : (
        <button type="button" onClick={() => addItem(data)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data } = await axios.get<IProduct[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/photos?_start=0&_limit=100`
  );

  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<IProducts> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_DOMAIN}/photos/${params?.id}`
  );

  return {
    props: {
      data,
    },
  };
};

export default Products;
