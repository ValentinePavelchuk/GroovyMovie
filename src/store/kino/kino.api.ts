import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// import { Ikino } from "./kino.types";

export const kinoApi = createApi({
  reducerPath: "api/kino",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_DOMAIN_2 }),
  endpoints: (build) => ({
    getkinos: build.query({
      query: () => `movie?token=RAGDFMM-MN8MP9S-MH96EDA-9FBPB8V&limit=10`,
    }),
  }),
});

export const { useGetkinosQuery } = kinoApi;
