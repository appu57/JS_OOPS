//Prototypal inheritance is a fundamental concept in JavaScript where objects can inherit properties and methods from other objects. 
//In JavaScript, each object has an internal link to another object called its prototype. When a property or method is accessed on an object, 
//if it doesn't exist on the object itself, JavaScript looks for it on the object's prototype, and if not found there, it continues up the prototype 
//chain until it finds it or reaches the end of the chain.


const Person = {
    hobby(hobby){
        console.log(`A new Employee with name ${this.name} with the hobby ${hobby} has joined`);
    }
}

const JavaScript = Object.create(Person);
JavaScript.name="Javascript"; //create a new object set the name in the prototype or set prototype directly like in below eg.
JavaScript.hobby("Building web");
//Then, JavaScript is created as an object using Object.create(Person), meaning that JavaScript inherits from Person. The name property is added to JavaScript, with a value of "Javascript".

//In JavaScript, every object has an internal property called [[Prototype]], which is either null or references another object. This [[Prototype]] is also often referred to as the object's prototype.

//When you access a property or method of an object, and that property or method is not found on the object itself, JavaScript automatically looks up the prototype chain to find it.
"###############################################################################################################################################################"


const JavaScripts={
    name:"Javscript is a new name assigned with setPrototype",
    language:"Scripting"
     
}

Object.setPrototypeOf(Person,JavaScripts); //sets the prototype of object Person as JavaScripts , every object has a prototype so now protype of person is javascript
Person.hobby();

"###############################################################################################################################################################"


//Setting prototype 

// Using Object.create()
const person = {
    name: 'John',
    age: 30,
    print:function(){
        console.log("Ater direct modification of a function salaray is ",this.salary);
    }
};
const employee = Object.create(person);
employee.language = "Scripting";

console.log(employee);

// Directly modifying [[Prototype]]
function Employee(salary) {
    this.salary = salary;
}
Employee.prototype = person; // Set prototype

const employee1 = new Employee(5000);
employee1.print();

"###############################################################################################################################################################"