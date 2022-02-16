// // STRING

// var x = "Altan Ibrahimli salam.Sagol Ibrahimli";
// x = x.replace("Ibrahimli","Ibrahimov")
// console.log(x)
// //var x = new String("Altan");

// var text = "Please visit Microsoft and Microsoft!";
// var newText = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText)

// var text = "Welcome";
// var text2 = `The quick
// brown fox
// jumps over
// the lazy dog`;
// console.log(text)
// console.log(text2)

// var firstname = "Altan";
// var age = 25;

// console.log("Telebenin adi " + firstname + "dir.Onun " + age + " yasi var")
// console.log(`Telebenin adi ${firstname}dir.Onun ${age} yasi var`)

// // NaN ==> Not a number
// // isNan

// console.log(isNaN(firstname))
// console.log(isNaN(age))
// console.log(typeof NaN)

// var num = 5.57;
// console.log(num.toExponential())

// var x = "10";
// var x = new Number(10)

// Number(true);
// Number(false);
// Number("10");
// Number("  10");
// Number("10  ");
// Number(" 10  ");
// Number("10.33");
// Number("10,33");
// Number("10 33");
// Number("John");

// parseInt("-10");
// parseInt("-10.33");
// parseInt("10");
// parseInt("10.33");
// parseInt("10 20 30");
// parseInt("10 years");
// parseInt("1 yea1rs 10");


// parseFloat("10");
// parseFloat("10.33");
// parseFloat("10 20 30");
// parseFloat("10 years");
// parseFloat("years 10");


// var colors = [true,"",null,10];
// colors[0] = 'red';
// colors[1] = 'black';
// colors[5] = 'green';

// console.log(colors);

// var front = ['html','css','js'];
// var last_el =  front[front.length-1];
// console.log(last_el)





// var front = new Array();
// var back = ['c#','sql','azure'];

// var full_stack = front.concat(back)
// full_stack.sort();
// full_stack.reverse();
// // colors=[]
// //colors.length = 0
// console.log(full_stack);

// shift / unshift / pop / push

// var front = ['html','css','js'];

// console.log(front)









// FUNCTIONS

function ShowMessage(name,age) {
    console.log("Hello " + name);
}

var SayHello = function(firstname) {
    console.log("Hello " + firstname)
}

var SayHello = firstname => console.log('Hello ' + firstname)

var SayHello = (firstname) => {
    console.log('Hello ' + firstname)
}

ShowMessage("Altan",25);
SayHello("Mayil");

function Calc(x,y) {
    return x* y;
}

var Calc = (x,y) => x*y;

var Calc = function(x,y){
    return x*y;
}

var Calc = (x,y) => {
    return x * y;
}
console.log(Calc(5,10));


var Show = function(name){
    return name;
}

Show();

var Show = name => name


(function(name){
    document.write("Salam " + name);
})("Altan");


function Person(name,age,address) {
    this.name = name;
}

var User = new Person("Altan");

// var btn = document.getElementById('btn');
// btn.onclick = function() {

// }


function Change() {
    var body = document.getElementById('body');
    console.log(body.style.backgroundColor);
    if(body.style.filter==="invert(1) hue-rotate(180deg)") { 
        body.style.filter="invert(0) hue-rotate(0deg)"
    }
    else{
        body.style.filter="invert(1) hue-rotate(180deg)"
    }
}


// var Change = function() {

// }

// var Change = () => {

// }