import bcrypt from "bcryptjs";

export const users = [
  {
    name: "test1",
    email: "test1@gmail.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: true,
  },
  {
    name: "test2",
    email: "test2@gmail.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: false,
  },
];
