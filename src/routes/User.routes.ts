import { Router } from "express";
import {
  createUser,
  deleteUserById,
  findAllUsers,
  findUserById,
  updateUserById,
} from "../controllers/user.controller";
import { createUserSchema } from "../validate/createUser.validation";
import { createValidator } from "express-joi-validation";
import { updateUserSchema } from "../validate/updateUser.validation";

const userRoutes = Router();
const validator = createValidator();

userRoutes.post("/user", validator.body(createUserSchema), createUser);

userRoutes.get("/users", findAllUsers);

userRoutes.get("/user/:id", findUserById);

userRoutes.put("/user/:id", validator.body(updateUserSchema), updateUserById);

userRoutes.delete("/user/:id", deleteUserById);

export default userRoutes;
