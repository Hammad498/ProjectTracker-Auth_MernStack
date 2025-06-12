import userModel from "../models/userAuth.model.js";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
//////
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isMatched = await user.comparePassword(password);
    if (!isMatched) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = user.generateToken();

    res.status(200).json({
      success: true,
      message: "User logged in successfully!",
      data: user,
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};