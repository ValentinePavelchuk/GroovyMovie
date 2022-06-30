import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "./user.types";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    getUsers: build.query<IUser[], number>({
      query: (limit: 1) => `users?limit=${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
