import express from "express";
import mongoose from "mongoose";
import {
  dailyCreateValidation,
  loginValidation,
  registerValidation,
} from "./validations/validations.js";
import { UserController, DailyController } from "./controllers/index.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js";
import cors from "cors";
import "dotenv/config";

const app = express();

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    console.log("Database loaded.");
  })
  .catch((err) => console.log("Database error: ", err));

app.use(express.json());
app.use(cors());

app.post(
  "/reg",
  registerValidation,
  handleValidationErrors,
  UserController.register,
);

app.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  UserController.login,
);

app.get("/me", checkAuth, UserController.getMe);

app.get("/daily", DailyController.getAll);
app.get("/daily/:id", DailyController.getOne);
app.post(
  "/daily",
  checkAuth,
  dailyCreateValidation,
  handleValidationErrors,
  DailyController.create,
);
app.delete("/daily/:id", checkAuth, DailyController.remove);
app.patch("/daily", checkAuth, DailyController.updateAll);
app.patch(
  "/daily/:id",
  checkAuth,
  dailyCreateValidation,
  handleValidationErrors,
  DailyController.update,
);

// app.listen(process.env.APP_PORT, process.env.APP_IP, (err) => {
app.listen("4000", (err) => {
  if (err) return console.log(err);
  console.log("Server started!");
});
