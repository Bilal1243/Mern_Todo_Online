import Users from "../model/userModel.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    const userExists = await Users.findOne({ email: email });

    if (userExists) {
      return res.status(400).json({ message: "user already exists" });
    }

    const user = await Users.create({
      name,
      email,
      password: encryptedPassword,
    });

    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      return res.status(400).json({ message: "invalid user data" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    const user = await Users.findOne({ email: email });

    if (user && await user.matchPassword(password)) {

      return res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });

    } else {
      return res.status(400).json({ message: "invalid user data" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const logoutUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json(error);
  }
};

export { registerUser, loginUser, logoutUser };
