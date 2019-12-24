const answer = (data, res) => {
  res.status = 200;

  return res.json(
    data.length !== 0
      ? {
          status: "success",
          users: data
        }
      : {
          status: "no users",
          users: data
        }
  );
};

module.exports = {
  byId: (data, id, res) => {
    const result = data.filter(el => el.id === id);
    answer(result, res);
  },
  byIds: (data, ids, res) => {
    // cut first - '[' and last - ']' symbols
    idSlice = ids.slice(1, ids.length - 1);

    const idsArray = idSlice.split(",");
    const result = data.filter(el => idsArray.includes(String(el.id)));

    answer(result, res);
  },
  byCategories: (data, categories, res) => {
    const categoryArr = categories.split(",");

    const result = data.filter(user => {
      const matchedUsers = categoryArr.map(category =>
        user.categories.includes(category) ? true : false
      );
      return !matchedUsers.includes(false);
    });
    answer(result, res);
  },
  byAll: (data, res) => answer(data, res)


};
