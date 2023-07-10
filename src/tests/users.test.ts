import {
  createUser,
  findAllUsers,
  findUserById,
  updateUserById,
  deleteUserById,
} from "../controllers/user.controller";
import { User } from "../models/User";

jest.mock("../models/User");

describe("User API", () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      body: {},
      params: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  describe("createUser", () => {
    it("should create a user successfully", async () => {
      const createSpy = jest.spyOn(User, "create");

      req.body = {
        name: "Test",
        dob: "01/02/2023",
        address: "SP",
        description: "SP",
      };

      await createUser(req, res);

      expect(createSpy).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        msg: "User Created Successfully!",
      });
    });
  });

  describe("findAllUsers", () => {
    it("should find all users", async () => {
      const mockUsers = [
        { id: "1", name: "Test" },
        { id: "2", name: "Teste" },
      ];

      jest.spyOn(User, "find").mockResolvedValue(mockUsers);

      await findAllUsers(req, res);

      expect(res.json).toHaveBeenCalledWith(mockUsers);
    });
  });

  describe("findUserById", () => {
    it("should find a user by id", async () => {
      const mockUser = { id: "1", name: "John Doe" };

      jest.spyOn(User, "findById").mockResolvedValue(mockUser);

      req.params.id = "1";

      await findUserById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockUser);
    });
  });

  describe("updateUserById", () => {
    it("should update a user by id", async () => {
      const updateOneSpy = jest.spyOn(User, "updateOne");

      req.params.id = "1";
      req.body = {
        name: "Updated Test",
        dob: "01/02/2023",
        address: "Updated SP",
        description: "Updated SP",
      };

      jest.spyOn(User, "findById").mockResolvedValue({ _id: "1" });

      await updateUserById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        msg: "User Updated Successfully!",
      });
    });
  });

  describe("deleteUserById", () => {
    it("should delete a user by id", async () => {
      jest.spyOn(User, "findByIdAndDelete").mockResolvedValue({ id: "1" });

      req.params.id = "1";

      await deleteUserById(req, res);

      expect(res.json).toHaveBeenCalledWith({
        msg: "User Deleted Successfully!",
      });
    });
  });
});
