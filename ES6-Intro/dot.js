const student ={
    name:'Rafid',
    marks:90,
    1 : 50
}
// dot notation
const studentName=student.name;

// bracket notation
const sudentone=student['1'];
console.log(sudentone);

for(const key in student){
    const value=student[key]
}