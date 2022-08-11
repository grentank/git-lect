function multiply(arg1, ...arr) {
  const a = new Promise((res, rej) => {
    res(5);
  });
  return a.then((data) => data - 2);
}

module.exports = multiply;
