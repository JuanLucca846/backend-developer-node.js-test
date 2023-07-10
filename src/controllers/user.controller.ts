import { Request, Response, json } from "express";
import { User } from "../models/User";
import { AppError } from "../error/Error";

export const createUser = async (req: Request, res: Response) => {
  const { name, dob, address, description } = req.body;
  await User.create({ name, dob, address, description });
  return res.status(200).json({ msg: "User Created Successfully!" });
};

export const findAllUsers = async (req: Request, res: Response) => {
  const allUsers = await User.find();
  return res.json(allUsers);
};

export const findUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (user) {
    return res.status(200).json(user);
  } else {
    throw new AppError("This User Does Not Exist!");
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, dob, address, description } = req.body;
  const findUser = await User.findById(id);
  if (findUser) {
    await User.updateOne({
      name,
      dob,
      address,
      description,
    });

    return res.status(200).json({ msg: "User Updated Successfully!" });
  } else {
    throw new AppError("This User Does Not Exist!");
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteUser = await User.findByIdAndDelete(id);
  if (deleteUser) {
    return res.json({ msg: "User Deleted Successfully!" });
  } else {
    throw new AppError("User Id Does Not Exist!");
  }
};
