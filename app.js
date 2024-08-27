// function User (name, age,phone, email) {
//     this.name = name;
//     this.age  = age ;
//     this.phone = phone ;
//     this.email =email;
// }
// let John = new User("John ,"45."+14688", "john'gmail.com") ;
// console.log(john) 

// let user = {
//    name: "john",
//    age: 45,
// //    address: {
// //        city: "Tashkent",
       
// //    }
// }

// console.log(user .address?.city);



// Uyga vazifa masallar

 // 1- masalla

// function sortArrayByLengthDescending(array) {
//   return array.sort((a, b) => b.length - a.length);
// }
// const myArray = ["inson", "daraxtlar", "o'lim", "avtomabil", "olmalar"];
// const sortedArray = sortArrayByLengthDescending(myArray);

// console.log(sortedArray);


//  2- masala

//  function capitalizeFirstLetters(array) {
//   return array.map(el => typeof el === 'string' ? el[0].toUpperCase() + el.slice(1) : el);
// }

// const myArray = ["salom",  18, "Najot", "dost"];
// const capitalizedArray = capitalizeFirstLetters(myArray);
// console.log(capitalizedArray); 

// 3 misol
// let res = ('s5a6l8o8m');
// function name(str) {
//   let arr = '';
//   for (const char of str) {
//       if (char < '0' || char > '9') {
//           arr += char;
//       }
//   }
//   return arr;
// }
// console.log(name(res));

// 4 misol

// let res = [,1,2,3,4,5,'salom',true,'xayr']
// function name(arg) {
//   return arg.filter(arr => typeof arr === 'string')

// }
// console.log(name(res));

// 5 misol
// function name(arg) {
//     let arr = arg.split(' ');
//     arr = arr.map(function(value){
//       return value.split('').reverse().join('')

//     })
//     return arr.join(' ').length
// }

// console.log(name['salom xayr']);

// 6 misol

// let res = [, 1, 2, 3, 4, 5, "salom", true, "xayr", 'bolalar','ha'];

// function name(arg) {
//   let res = arg.filter((item) => typeof item === "string");

//   let arr = res.sort((a, b) => a.length - b.length);

//   return arr;
// }

// console.log(name(res));

// 7 misol

// let res = "salom bolalar";
// let sum = ("a,e,i,o,u,A,E,I,O,U");
// let res1 = "";
// function name(arg) {
//   for (const iterator of arg) {
//     if (!sum.has(iterator)) {
//       res1 += iterator;
//     }
//   }

//   return res1;
// }
// console.log(name(res1));



// 9 misol

// function name(arg) {
//     let arr = arg.split(' ');
//     arr = arr.map(function(value){
//       return value.split('').reverse().join('')

//     })
//     return arr.join(' ')
// }

// console.log(name('salom bolalar'));

// 10 misol
//   function name(arg, arg1) {
//     let res = arg.filter(arr => arr === arg1);
//     return res.length;
// }

// let arg = ['a','b','v','c','b','a'];
// let arg1 = 'a';

// console.log(name(arg, arg1));