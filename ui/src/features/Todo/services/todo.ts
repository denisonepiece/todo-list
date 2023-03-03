import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from '../models';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/todo/' }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodoList: builder.query<Todo[], void>({
      query: () => '',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Todo' as const, _id })),
              { type: 'Todo', id: 'LIST' },
            ]
          : [{ type: 'Todo', id: 'LIST' }],
    }),
    getTodo: builder.query<Todo, number>({
      query: (id) => `${id}`,
    }),
    updateTodo: builder.mutation<void, Partial<Todo>>({
      query: ({ _id, ...otherProperties }) => ({
        url: `${_id}`,
        method: 'PUT',
        body: {
          ...otherProperties,
        },
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
    addTodo: builder.mutation<void, Partial<Todo>>({
      query: (body) => ({
        url: '',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetTodoListQuery,
  useAddTodoMutation,
  useGetTodoQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
