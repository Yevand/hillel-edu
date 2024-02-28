function getRectArea1(width, height) {
  return width * height;
}

console.log('Площа прямокутника:', getRectArea1(4, 5));

const getRectArea2 = function (width, height) {
  return width * height;
};

console.log('Площа прямокутника:', getRectArea2(8, 7));

const getRectArea3 = (width, height) => width * height;

console.log('Площа прямокутника:', getRectArea3(6, 9));
