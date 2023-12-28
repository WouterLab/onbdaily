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

const app = express();

mongoose
  .connect(
    "mongodb+srv://admin:Transf1f2f3f4f@daily.udhpkcu.mongodb.net/calendar?retryWrites=true&w=majority",
  )
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
app.patch(
  "/daily/:id",
  checkAuth,
  dailyCreateValidation,
  handleValidationErrors,
  DailyController.update,
);

app.listen("4000", (err) => {
  if (err) return console.log(err);
  console.log("Server started!");
});
