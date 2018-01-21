export const arrayToMapById = arr =>
  arr.reduce((map, obj) => {
    map[obj._id] = obj;
    return map;
  }, {});

export default {
  arrayToMapById
};
