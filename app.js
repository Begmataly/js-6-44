// map, finter, reduce, find, findIndex, forEach

const students = [
    {name: 'Aman', age:12, salary:60000}, 
    {name: 'Ergan', age:11, salary:50000},
    {name: 'Begmataly', age:13, salary:70000},
    {name: 'Amantur', age:14, salary:80000},
]
// console.log(students);


// const mapStudents=students.map((student) => {
//     return '${student.name}  ${student.age}'
// })
// console.log(mapStudents);

// const filterStudents=students
// .filter(add=>add.salary>=60000)
// .map(add=>add.name)
// console.log(filterStudents);


// const reduceStudents=student.reduce((total,student)=>{
//     return total+student.salary
// },0)
// console.log(reduceStudents);

const animals = [
    {name:'Giraffe'},
    {name:'Gipart'},
    {name:'Lion'},
    {name:'Zebra'},
]

const newAnimals=animals.map(adam =>{
    return adam.name.toUpperCase();
})

console.log(newAnimals);

