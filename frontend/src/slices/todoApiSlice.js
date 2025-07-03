import { apiSlice } from "./apiSlice";

const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/api/todo/getTodos",
      }),
    }),
    createTodo: builder.mutation({
      query: (data) => ({
        url: "/api/todo/create-todo",
        method: "POST",
        body: data,
      }),
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/api/todo/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation , useDeleteTodoMutation } = todoApiSlice;
