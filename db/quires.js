import { eventModel } from "@/models/events-models";
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

export { getAllEvents, getEventById };
