const randomArray = (len, value) => {
  const array = [];
  for (let i = 0; i < len; i += 1) {
    array.push(Math.round(Math.random() * (value - 1)));
  }
  return array.reduce((totally, number) => {
    const all = totally;
    all[number] = (totally[number] || 0) + 1;
    return all;
  }, {});
};
console.log(randomArray(5, 5));

module.exports = { randomArray };
