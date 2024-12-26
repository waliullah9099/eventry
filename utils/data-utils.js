export const replaceMongoIdInArray = (arr) => {
  const mappedArray = arr
    .map((item) => {
      return {
        id: item._id.toString(),
        ...item,
      };
    })
    .map(({ _id, ...rest }) => rest);

  return mappedArray;
};
