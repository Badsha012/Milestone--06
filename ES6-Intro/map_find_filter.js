const students = [
  { name: 'Abul', marks: 50 },

  { name: 'Bbul', marks: 70 },
  { name: 'Cbul', marks: 99 },
  { name: 'Kbul', marks: 30 },
  { name: 'Rbul', marks: 60 },
  { name: 'Dbul', marks: 15 },
];
 const names= students.map(student => student.marks*0.75)

 const goodStudets=students.filter(student => student.marks > 80)
 console.log(goodStudets)