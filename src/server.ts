import "dotenv/config";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/User.routes";
import { AppError } from "./error/Error";

const server = express();
const port = process.env.PORT;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;

server.use(express.json());
server.use(userRoutes);
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "Error",
      message: err.msg,
    });
  }
  return res.status(500).json({
    status: "Error",
    message: `Internal Server Error - ${err.message}`,
  });
});

server.listen(port, () => {
  console.log(`Connected ${port}`);
});

mongoose
  .connect(
    `mongodb+srv://${db_user}:${db_pass}@cluster1.axq1rwe.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Error", err.message);
  });

export default server;
