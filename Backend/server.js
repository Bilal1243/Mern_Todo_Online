import express from "express";
import connectDb from "./config/db.js";
import todoRoute from "./routes/todoRoutes.js";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";

const app = express();

let port = 3000;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.method(path , handler)

// req.body

// http://localhost:3000/api/todo/create-todo

app.use("/api/todo", todoRoute);
app.use("/api/user", userRoute);

// app.post('/register' , (req,res)=>{

// })

app.listen(port, () => console.log("server started"));

// oYfDU5nmDqI4trln
