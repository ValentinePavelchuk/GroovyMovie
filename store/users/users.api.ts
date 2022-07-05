import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "./user.types";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_DOMAIN }),
  endpoints: (build) => ({
    getUsers: build.query<IUser[], number>({
      query: (limit: 1) => `users?_start=0&_limit=${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
