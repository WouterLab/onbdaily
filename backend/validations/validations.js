import { body } from "express-validator";

export const registerValidation = [
  body("name", "Имя должно быть строкой").isString(),
  body("login", "Логин должен быть строкой").isString(),
  body("login", "Минимальная длина логина - 4 символа").isLength({
    min: 4,
    max: 16,
  }),
  body("password", "Минимальная длина пароля - 4 символа").isLength({ min: 4 }),
];

export const loginValidation = [
  body("login", "Логин должен быть строкой").isString(),
  body("login", "Минимальная длина логина - 4 символа").isLength({
    min: 4,
    max: 16,
  }),
  body("password", "Минимальная длина пароля - 4 символа").isLength({ min: 4 }),
];

export const dailyCreateValidation = [
  body("name", "Имя должно быть строкой").isString(),
];
