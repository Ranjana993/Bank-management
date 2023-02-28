// const express = require("express");

import express from "express"
import { login, register } from "../controllers/userCtrl.js";

//router onject
const router = express.Router();

router.post("/login", login);
router.post("/register", register);

export default router