import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProduct } from "./product.types";

export const productApi = createApi({
  reducerPath: "api/photos",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_DOMAIN }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], number>({
      query: (limit) => `photos?_start=0&_limit=${limit}`,
    }),
    getAllProducts: build.query<IProduct[], void>({
      query: () => `photos?_start=0&_limit=100`,
      transformResponse: (response: IProduct[]) => response,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
export const { useGetAllProductsQuery } = productApi;
