// // VARIABLES & DATA TYPES

// // /*
// // // var - let - const

// // /* Examples for variables

// // var firstName = "Altan"
// // var lastName = 'Ibrahimli'
// // console.log(firstName)
// // var x = 10;
// // x = "Kamil";
// // console.log(x)

// // const a = 20;
// // const a=30
// // 

// // var x = null
// // var n = "";


// // // DATA TYPES

// // // Primitive / Non-primitive

// // // number
// // var age = 20;
// // var x = "20";
// // // string
// // var name = "Altan";
// // var name = 10;
// // // undefined
// // var u;
// // console.log(u);
// // // null
// // var n = null;
// // // boolean
// // var b = true;

// // // Array
// // var lang = ['html','css','js','c#','sql'];
// // console.log(lang[1])
// // // Object

// // var Person = {
// //     name: 'Altan',
// //     age: 26,
// //     calculatAge: function(){ 
// //         return new Date().getFullYear()-this.age
// //     }
// // }

// // console.log(Person.name + " " + Person.calculatAge() + "-tevelludur")



// // function Dark() {

// //     document.getElementById('image').style.filter = "grayscale(1)";
// //     // document.getElementById('body').style.backgroundColor = "#000"
// //     // document.getElementById('body').style.color = "#fff"

// // }


// // function Light() {
// //     // document.getElementById('body').style.backgroundColor = "#fff"
// //     // document.getElementById('body').style.color = "#000"
// //     document.getElementById('image').style.filter = "grayscale(0)";
// // }


// // typeof
// var x = "";
// var y = "Altan"
// var age = 25;
// var empty = null

// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof age)
// console.log(typeof empty)


// // PRINT TO SCREEN - console / alert / innerHTML / innerText/
// // console - log,error,warning

// console.log('Welcome');
// console.warn('Welcome');
// console.error('Welcome');
// //prompt();

// //alert("Welcome");

// document.write("FRONT-END DEVELOPMENT");

// document.getElementById('user-name').innerHTML = "<i>Altan</i>";
// document.getElementById('username').innerText = "<i>Altan</i>";


// // OPERATORS
// // Aritmethic 
// // Bitwise
// // Conditional
// // Comparison
// // Logical

// var ad = "Amil";
// var soyad = "Nuriyev";
// var fullname = ad+" " + soyad

// var n = 10;
// var m = "20";
// console.log(n+ " " +m);



// console.log();

// var x = 10;
// var y = 5;
// var cem = x+y;
// var ferq = x-y;
// var hasil = x*y;
// var bolme = x/y;
// console.log(cem,ferq,hasil,bolme)

// // Template literals

// var a = 5;
// console.log(++a)


// var x = 10;
// var y = 20;

// x += y;
// // x = x+y



// // var b = a**2;

// // if(a == b) {
// //     alert('salam');
// // }
// // else{
// //     alert('sagol')
// // }


// */

// var x = 10;
// if(x>10 && x<20) {
//     // 
// }
// else if(x>30 && x<50){

// }
// else{

// }


// var x = 10

// switch(x){
//     case 1:
//         alert("bir");
//         break;
//     case 2:
//         alert("iki");
//         break;
//     default:
//         alert("none");
//         break;
// }


// if(x>10) {
//     alert('Access');
// }

// else{
//     alert('Block');
// }

// var number = x>10 ? alert('Access') : alert('Block')

// var ad = "Altan"

// ad=="Altan" ? alert("Hello") : alert("Bye-bye");


// var date = new Date().getHours();


// if(date>=6 && date<12) {
//     alert('Good Morning');
// }
// else if(date>=12 && date<18) {
//     alert('Good Afternoon');
// }
// else if(date>=18 && date<6){
//     alert('Good Night');
// }


// PI,round,floor,pow,random,sqrt,min,max,abs,trunc,ceil

var x = 10.5;

var z = Math.trunc(x);
const pi = Math.PI
console.log(z);
console.log(pi);

var texmin = Math.floor(Math.random() * 100)

console.log(texmin)

