import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetTodoByIdQuery,
  useUpdateTodoMutation,
  useGetTodosQuery,
} from "../slices/todoApiSlice";
import "./EditPage.css";
import { toast } from "react-toastify";

function EditPage() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const { data: todo, refetch } = useGetTodoByIdQuery({ id });
  const { data, refetch: getAllTodos } = useGetTodosQuery();

  const [updateTodo] = useUpdateTodoMutation();

  const navigate = useNavigate();

  const editHandler = async (e) => {
    e.preventDefault();
    try {
      await updateTodo({
        title,
        description,
        isCompleted,
        id,
      }).unwrap();

      setTitle("");
      setDescription("");
      setIsCompleted(false);

      refetch();
      getAllTodos();

      toast.success("Edited");

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.messsage || error?.data?.messsage);
    }
  };

  useEffect(() => {
    if (todo) {
      setTitle(todo?.title);
      setDescription(todo?.description);
      setIsCompleted(todo?.isCompleted);
    }
  }, [todo]);

  return (
    <div className="edit-container">
      <form onSubmit={editHandler} className="edit-form">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows={5}
          cols={10}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        ></textarea>

        <select
          value={isCompleted.toString()}
          onChange={(e) => setIsCompleted(e.target.value === "true")}
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>

        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default EditPage;
