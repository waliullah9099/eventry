"use server";

import { redirect } from "next/navigation";

const { createUser } = require("@/db/quires");

async function registerUser(fromData) {
  const user = Object.fromEntries(fromData);
  const created = await createUser(user);
  redirect("/login");
}

export { registerUser };
