import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Backend from "../Axios";
import "./HomePage.css";
import { toast } from "react-toastify";

function HomePage() {
  let [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const getTodos = async () => {
    try {
      let data = await Backend.get("/getTodos");

      setTodos(data.data);
    } catch (error) {
      console.log(error?.message || error?.data?.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      let response = await Backend.post("/create-todo", { title, description });
      getTodos();
      toast.success("Todo Created Successfully");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.log(error?.message || error?.data?.message);
      toast.error(error?.message || error?.data?.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      let response = await Backend.delete(`/${id}`);
      getTodos();
      toast.success("Todo Deleted Successfully");
    } catch (error) {
      console.log(error?.message || error?.data?.message);
      toast.error(error?.message || error?.data?.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              rows={5}
              cols={10}
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button type="submit">Add</button>
          </form>
        </div>

        <div className="todos-container">
          {todos?.map((todo) => (
            <div className="box todo-card" key={todo._id}>
              <h1 className={todo.status ? "completed" : "todo-title"}>
                {todo.title}
              </h1>
              <p className="todo-description">{todo.description}</p>
              <div className="button-group">
                <button
                  className="delete-btn"
                  onClick={() => deleteHandler(todo._id)}
                >
                  Delete
                </button>
                {!todo.isCompleted && (
                  <button
                    className="edit-btn"
                    onClick={() => navigate(`/edit/${todo._id}`)}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
