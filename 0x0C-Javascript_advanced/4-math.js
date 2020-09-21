const divideBy = (firstNumber = 0, secondNumber = 0) => {
  return secondNumber / firstNumber;
};

const addBy = (firstNumber = 0, secondNumber = 0) => {
  return firstNumber + secondNumber;
};

const addBy100 = (num) => {
  return addBy(num, 100);
};

const addBy1000 = (num = 0) => {
  return addBy(num, 1000);
};

const divideBy10 = (num = 0) => {
  return divideBy(10, num);
};

const divideBy100 = (num = 0) => {
  return divideBy(100, num);
};
