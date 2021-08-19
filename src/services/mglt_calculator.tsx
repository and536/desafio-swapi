import moment from "moment";

const transformConsumablesInHours = (consumables: any) => {
  const [timeNumber, unit] = consumables.split(" ");
  const consumablesInHours = moment.duration(timeNumber, unit).asHours();
  return consumablesInHours;
};

export const calculateStopsByDistance = (distance: any, velocity: any, consumables: any) => {
  const hours = distance / velocity;
  const hoursConsumable = transformConsumablesInHours(consumables);
  const stops = hours / hoursConsumable;
  return Math.round(stops) //Math.floor(stops);
};