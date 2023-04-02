exports.sum = (a, b) => {
  return a + b;
};

exports.deleteUser = (arr, id) => {
  return arr.filter((user) => {
    return user.id !== id;
  });
};
