// const person={
//     name:'Badsha',
//     isRich:false,
//     money:40000,

// }
// console.log(person,typeof person);


// // json -> js object with notation
// const personJson=JSON.stringify(person);
// console.log(personJson, typeof personJson);
// const perseJson=JSON.parse(personJson);
// console.log(perseJson);


//  const result=fetch('https://jsonplaceholder.typicode.com/todos/1')
//       // .then(response => response.json())
//       // .then(json => console.log(json))
//       .then (response =>  console.log(response));

//       // console.log(result);

// load Data
const loadData= () => {
     fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then((res) => res.json())
     .then((data) => console.log(data));


};