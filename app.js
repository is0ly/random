const randomArray = (len, value) => {
  const array = [];
  for (let i = 0; i < len; i += 1) {
    array.push(Math.round(Math.random() * (value - 1)));
  }
  return array;
};

module.exports = { randomArray };
