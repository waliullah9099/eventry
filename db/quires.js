import { eventModel } from "@/models/events-models";
import { replaceMongoIdInArray } from "@/utils/data-utils";

async function getAllEvents() {
  const allEvents = await eventModel.find().lean();

  return replaceMongoIdInArray(allEvents);
}

export { getAllEvents };
