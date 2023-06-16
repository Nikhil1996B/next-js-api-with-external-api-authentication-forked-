import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import users from "../../../db";

export default (req, res) => {
  const { email, password } = req;
  const user = users.find((u) => u.email === email);
  if (user && bcrypt.compareSync(password, user.password)) {
    // user credentials are valid, generate jwt
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    return res.status(200).json({ token });
  } else {
    return res.status(404).json({ messsage: "Invalid credentials" });
  }
};
