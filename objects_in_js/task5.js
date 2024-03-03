const users = [
  {
    name: 'Іван',
    age: 27,
    isVIP: true,
  },
  {
    name: 'Петро',
    age: 32,
    email: 'test1@gmail.com',
  },
  {
    name: 'Андрій',
    age: 24,
    isAdult: true,
  },
];

for (const {
  name, age, isVIP = 'N/A', email = 'N/A', isAdult = 'N/A',
} of users) {
  console.log('Імʼя:', name);
  console.log('Вік:', age);
  console.log('Статус VIP:', isVIP);
  console.log('Пошта:', email);
  console.log('Дозвіл за віком:', isAdult);
  console.log('------------------------------------');
}
