import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Backend from "../Axios";


function HomePage() {
  let [todos, setTodos] = useState([]);

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

  return (
    <>
      {todos.map((item, index) => (
        <div key={index}>
          <p>
            {index + 1} Title : {item.title}
          </p>
          <p>Description : {item.description}</p>
        </div>
      ))}
    </>
  );
}

export default HomePage;
