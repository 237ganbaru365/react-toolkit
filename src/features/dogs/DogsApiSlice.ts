import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "xxxxx";

interface Bread {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set("x-api-key", DOGS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreads: builder.query<Bread[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreadsQuery } = apiSlice;
