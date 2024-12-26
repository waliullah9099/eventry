import { eventModel } from "@/models/events-models";
import { userModel } from "@/models/user-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
import mongoose from "mongoose";

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
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function updateInterest(eventId, authId) {
  const foundEvent = await eventModel.findById(eventId);
  if (foundEvent) {
    const foundUsers = foundEvent?.interested_ids?.find(
      (id) => id.toString() === authId
    );

    if (foundUsers) {
      foundEvent?.interested_ids?.pull(new mongoose.Types.ObjectId(authId));
    } else {
      foundEvent?.interested_ids?.push(new mongoose.Types.ObjectId(authId));
    }

    foundEvent.save();
  }
}

async function add(params) {}

async function updatedGoing(eventId, authId) {
  const foundEvent = await eventModel.findById(eventId);
  foundEvent?.going_ids?.push(new mongoose.Types.ObjectId(authId));
  foundEvent.save();
}

export {
  createUser,
  findUserByCredentials,
  getAllEvents,
  getEventById,
  updatedGoing,
  updateInterest,
};
