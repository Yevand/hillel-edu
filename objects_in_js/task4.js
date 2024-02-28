const person = {
  firstName: 'Іван',
  lastName: 'Іванов',
  age: 27,
};

person.email = 'test@gmail.com';

delete person.age;

console.log(person);
