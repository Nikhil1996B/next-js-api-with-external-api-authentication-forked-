import jwt from "jsonwebtoken";
import users from "../../../db";

export default (req, res) => {
  try {
    const token = req.headers.authorization.split("")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = users.find((u) => u.id === decode.id);
    if (!user) throw new Error("User not found");
    const data = {
      email: user.email,
      name: user.name,
    };
    res.status(200).json(data);
  } catch (error) {
    console.error(error.messsage);
    res.status(404).json({ message: "Invalid token" });
  }
};
