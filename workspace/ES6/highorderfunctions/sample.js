const lstYears = movies => movies.map(movie => movie.year);
const greaterThan = (years, baseYear) => years.filter(year => year >= baseYear);
console.log(lstYears(movieList));
console.log(greaterThan(lstYears(movieList), 2000));

const students = [
    {
      name: "Anna",
      sex: "f",
      grades: [4.5, 3.5, 4]
    },
    {
      name: "Dennis",
      sex: "m",
      country: "Germany",
      grades: [5, 1.5, 4]
    },
    {
      name: "Martha",
      sex: "f",
      grades: [5, 4, 2.5, 3]
    },
    {
      name: "Brock",
      sex: "m",
      grades: [4, 3, 2]
    }
];
const femaleList = student => student.sex === "f";
const avgGrade = arr => arr.grades = arr.grades.reduce((a,b) => a + b, 0) / arr.grades.length;
const filter = (student, func) => student.filter(func);
console.log(filter(filter(students,femaleList),avgGrade));
