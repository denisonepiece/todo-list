import api from '../../../api/rootApi';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        data: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
