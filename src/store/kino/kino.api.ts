import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// import { Ikino } from "./kino.types";

export const kinoApi = createApi({
  reducerPath: "api/kino",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.KINO_API }),
  endpoints: (build) => ({
    getAllMovies: build.query({
      query: () => `movie?token=RAGDFMM-MN8MP9S-MH96EDA-9FBPB8V&limit=10`,
    }),
    getTopMovies: build.query<any, void>({
      query: () =>
        `movie?field=rating.kp&search=8-10&field=votes.kp&search=100000-10000000&sortField=rating.kp&sortType=-1&field=typeNumber&search=1&limit=2&token=${process.env.KINO_TOKEN}`,
    }),
    getFilmById: build.query<any, any>({
      query: (id) =>
        `https://api.kinopoisk.dev/movie?search=${id}&field=id&token=RAGDFMM-MN8MP9S-MH96EDA-9FBPB8V`,
    }),
  }),
});

export const {
  useGetAllMoviesQuery,
  useGetTopMoviesQuery,
  useGetFilmByIdQuery,
} = kinoApi;
export const { getTopMovies, getFilmById } = kinoApi.endpoints;
