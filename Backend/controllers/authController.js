import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      role,
    });

    // save to DB
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
