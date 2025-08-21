import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);          // GET all users
router.post("/", createUser);       // POST new user
router.get("/:id", getUserById);    // GET user by ID
router.put("/:id", updateUser);     // UPDATE user
router.delete("/:id", deleteUser);  // DELETE user

export default router;
