// Aqui será criada uma rota, onde nosso front-end vai se comunicar com o back-end

import express from "express";
import { getUsers, checkUser, createUser, editUser, deleteUser } from "../Controllers/users.js";

const router = express.Router();
router.get("/", getUsers);
router.post("/create", createUser)
router.post("/check", checkUser);
router.put("/edit", editUser);
router.delete("/delete/:id", deleteUser)
export default router;