const averageGrade = 92;

if (averageGrade >= 0 && averageGrade < 60) {
  console.log('Незадовільно');
} else if (averageGrade >= 60 && averageGrade <= 70) {
  console.log('Задовільно');
} else if (averageGrade >= 71 && averageGrade <= 80) {
  console.log('Добре');
} else if (averageGrade >= 81 && averageGrade <= 90) {
  console.log('Дуже добре');
} else if (averageGrade >= 91 && averageGrade <= 100) {
  console.log('Відмінно');
} else {
  console.log('Середня оцінка має бути від 0 до 100');
}
