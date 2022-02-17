"use strict";

var number = 1;
var count = document.getElementById('digit');
function Plus(){ 
    number++;
    count.innerHTML = number;
}

function Minus() {

    if(number==1) {
        alert("Minimum 1 mehsul secilmelidir");
        return;
    }

    number--;
    count.innerHTML = number;
}

function Click() {
var x = document.getElementById('inp').value;
    console.log(x)
}


/*
var x = 10;
delete x;
console.log(x);

var students = [
    Metin = {
        id: 1,
        name: "Metin",
        age: 20
    },
    Amil = {
        id: 2,
        name: "Amil",
        age:21
    },
    Altan = {
        id: 10,
        name: "Altan",
        age:26
    }
]


/*
class Group {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    AddStudent(st);

    if(this.students.find(st=> st.id===students.id)) {
        alert("Olmaz");
    }
    else{
        AddStudent();
    }
}

const Person = {
    firstName: "Altan",
    lastName: "Ibrahimli",
    age: 25,
    isStudent: true,
    address: {
        city: "Baku",
        region: "Sabail"
    },
    get fullName() {
        return this.firstName + " " + this.lastName
    }
}

// Object Literals
console.log(Person.address.region);
console.log(Person.address["region"]);

var x = 10;
var z = x;

console.log(Person.fullName);

console.log();

function Person(ad,yas,unvan) {
    this.ad = ad;
    this.yas = yas;
    this.unvan = unvan;
    this.info = function() {
    }
}


class Student {
    constructor(firstName,age) {
        this.firstName = firstName;
        this.age = age
    }
}

var student = new Person("Altan",25,"Baku");
var doctor = new Person("Amil",20,"Moscow");
console.log(student.unvan);





const person = {
    name: "John",
    age: 30,
    city: "New York",
    address: "Baku"
  };

  console.log(person);
  
  const myArray = Object.values(person);
  console.log(myArray);


//   const person = {
//     for: true,
//     return: false,
//     firstName: "John",
//     lastName: "Doe",
//     fullName: "",
//     country: "",
//     set cName(olke) {
//         this.country = olke
//     },
//     set fName(ad) {
//       this.fullName = ad;
//     }
//   };

//   person.age = 20;
//   delete person.age;
//   person.country = db.Users.country;

//   person.fName = "Altan Ibrahimli";

//   console.log(person)
  
  */
  