import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/", registerUser);

userRoute.post("/auth", loginUser);

userRoute.get("/logout", logoutUser);

export default userRoute;
