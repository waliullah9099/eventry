import { eventModel } from "@/models/events-models";
import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

async function getAllEvents() {
  const allEvents = await eventModel.find().lean();

  return replaceMongoIdInArray(allEvents);
}

async function getEventById(id) {
  const event = await eventModel.findById(id).lean();
  return replaceMongoIdInObject(event);
}

async function createUser(userData) {
  return await userModel.create(userData);
}

async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();
  return user;
}

export { createUser, findUserByCredentials, getAllEvents, getEventById };
