import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const rootApi = createApi({
  reducerPath: 'splitApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Todo'],
  endpoints: () => ({}),
});

export default rootApi;
