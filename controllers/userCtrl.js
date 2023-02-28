import bcrypt from "bcryptjs"
import  jwt  from "jsonwebtoken";
import userModel from "../models/userModels.js";

//register callback
export const register= async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const exisitingUser = await userModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res.status(200).send({ message: "User Already Exist", success: false });
    }
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Sucessfully", success: true });
  }
  catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};




// login callback
export const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invlid EMail or Password", success: false });
    }
    const token = jwt.sign({ id: user.__id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};