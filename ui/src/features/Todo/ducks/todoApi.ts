import api from '../../../api/rootApi';
import { Todo } from '../models';

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodoList: builder.query<Todo[], void>({
      query: () => ({ url: 'todo', method: 'GET' }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Todo' as const, _id })),
              { type: 'Todo', id: 'LIST' },
            ]
          : [{ type: 'Todo', id: 'LIST' }],
    }),
    getTodo: builder.query<Todo, number>({
      query: (id) => ({ url: `todo/${id}`, method: 'GET' }),
    }),
    updateTodo: builder.mutation<void, Partial<Todo>>({
      query: ({ _id, ...otherProperties }) => ({
        url: `todo/${_id}`,
        method: 'PUT',
        data: {
          ...otherProperties,
        },
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
    addTodo: builder.mutation<void, Partial<Todo>>({
      query: (data) => ({
        url: 'todo',
        method: 'POST',
        data,
      }),
      invalidatesTags: [{ type: 'Todo', id: 'LIST' }],
    }),
    deleteTodo: builder.mutation<void, number>({
      query: (id) => ({
        url: `todo/${id}`,
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
