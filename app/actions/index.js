"use server";

import { redirect } from "next/navigation";

const { createUser, findUserByCredentials } = require("@/db/quires");

async function registerUser(fromData) {
  const user = Object.fromEntries(fromData);
  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(fromData) {
  const credentials = {};
  createUser.email = fromData.get("email");
  createUser.password = fromData.get("password");
  const foundUser = await findUserByCredentials(credentials);

  if (foundUser) {
    redirect("/");
  } else {
    throw new Error(`User with email ${fromData.get("email")} not found`);
  }
}

export { performLogin, registerUser };
