"use strict"
//Hoisting Example In JavaScripting
//Only functions declaration are hoisting not classes
function nonhoisted(name)
{
	console.log("name is" + name);
}
nonhoisted("nonhoisted");

hoisted("hoisted");
//javaScript putting function declarations into
//memory before it executes any code segment 
//Only declarations are hoisted not initializations
function hoisted(name)
{
	console.log("name is"+name);
}

var var1 = 10;
console.log("variable1=" + var1);

console.log("variable2="+var2);
var var2 = 20;


//Class declaration one way to define class in javascript
//Define a class using class keyword
class MyClass1
{
	constructor(param1,param2)
	{
		this.param1 = param1;
		this.param2 = param2;
	}
}

//const objC1 = new MyClass2; // reference error, class should be define before creating an object
//class MyClass2 {} 

// Another way to define class using class expressions named or unnamed way. 
//defined a class class expression unnamed way
//unamed way
const Class1 = class {
	constructor(param1,param2)
	{
		this.param1 = param1;
		this.param2 = param2;
	}		
};
//you can retreive the name of the class using name property not by an object
console.log(Class1.name);

//named way
const Class2 = class MyClass2{
	constructor(param1,param2)
	{
		this.param1 = param1;
		this.param2 = param2;
	}			
};

console.log(Class2.name);

class Super
{
	 constructor()
	 {
		 console.log("Hi from super class");		 
	 }
	 
	 method1()
	 {
		 console.log("super method1");
		 
	 }
	 fun()
	 {
		 console.log("fun from super class");		 
	 }
	
}

class Base extends Super{
	 
	 constructor()
	 {
		 console.log("Hi from base class");		 
		 super();
	 }

 	 method2()
	 {
		 console.log("base method2");
		 super.method1();
	 }

	 fun()
	 {
		 console.log("fun from base class");		 
	 }

}

class Derive extends Base
{
	constructor()
	{
		//class parent class constructor
		super();		
	}
	 method3()
	 {
		 console.log("derive method3");
		 
	 }
	 fun()
	 {
		 console.log("fun from derive class");		 
	 }
}

let objD = new Derive();
objD.fun();

let Customers = 
{	group: "noraml user",
	lists:[	{name:"name1",age:10},		{name:"name2",age:20},		{name:"name3",age:30}, ],
	displayList()
	{
		this.lists.forEach(
			//this.group works because Arrow functions have no “this” 
			list => {console.log(list.name + " " + this.group)}
		);		
	},
};		
Customers.displayList();


let Customers2 = 
{	group: "noraml user",
	lists:[	{name:"name1",age:10},		{name:"name2",age:20},		{name:"name3",age:30}, ],
	displayList()
	{
		this.lists.forEach( function (list)
		{
			//thorws error this.group undefined because this scope is limited to inside function 
			console.log(list.name + " " + this.group);
		}
		);		
	},
};		
Customers2.displayList();