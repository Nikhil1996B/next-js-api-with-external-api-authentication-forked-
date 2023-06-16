import bcrypt from "bcrypt";

const users = [
  {
    id: 1,
    name: "user1",
    email: "user1@email.com",
    password: bcrypt.hashSync("password1", 10),
  },
  {
    id: 2,
    name: "user2",
    email: "user2@email.com",
    password: bcrypt.hashSync("password2", 10),
  },
];

export default users;
