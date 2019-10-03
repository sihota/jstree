"use strict";

function normalAdd(a,b){
	return a+b;	
}

var res = normalAdd(1,1);
alert(res);

var arrowAdd = (a,b) => {return a+b;}
var res = arrowAdd(1,1);
alert(res);

function normalRet(a,b)
{
	return a*b;	
}

var ret1 = normalRet(3,10);
alert(ret1);

//More specifically, it's not an operator,
// it's a punctuator token that separates the parameters from the body: ArrowFunction :
// ArrowParameters => ConciseBody. E.g. (params) => { /* body */ }

//var arrowRet = (a) => {return a*b;}
var arrowRet = (a,b) => a*b;
var ret3 = arrowRet(3,10);
alert(ret3);


//A arrow function expression does not have 
//its own this binding and therefore cannot be used as a constructor function

var msg = "hello from outside";

var obj = {
     msg    :  "hello from inside",
	 print1 : () => {alert(this.msg);},
	 print2 : function(){alert(this.msg);}
}

obj.print1();
obj.print2();

var msg = 'check msg variable';
class class1
{
	msg = 'default msg';
	//constructor()
	//{
	//	this.msg = arguments[0] || this.msg;	
	//}
	returnMessage()
	{
		return this.msg;		
	}
	arrowFunctionMessage = () => { return this.msg;}
}
var obj1 = new class1();
alert(obj1.returnMessage());
var obj2 = new class1('hello msg');
alert(obj2.returnMessage());
alert(obj2.arrowFunctionMessage());



class Counter{
	counter = 0;
	handleCounter = () => { return this.counter++;}	
}

var objC = new Counter();
alert(objC.handleCounter());
alert(objC.handleCounter());

class Counter1
{
	counter = 0;
	handleCounter()
	{
		return this.counter++;		
	}
}
var objC1 = new Counter1();
alert(objC1.handleCounter());
alert(objC1.handleCounter());

function Person(firstname,middlename,lastname) {
  // The Person() constructor defines `this` as an instance of itself.
  this.firstname = firstname;
  this.middlename = middlename;
  this.lastname = lastname;
}

var p = new Person('amarpal','singh','sihota');
p.fullname = function () {
	return 	p.firstname + ' ' + p.middlename + ' ' + p.lastname;
}
console.log(p.fullname());

var x=1000;
function CountUp() {
  this.x = 0;
  //console.log(this);
  //setInterval(() => console.log(++this.x), 1000); 
  setInterval( function count() { /*console.log(this);*/console.log(++this.x) }, 10000); 
}
var a = new CountUp();

/*
function CountUp1() {
  var that = this;
  that.x = 0;
  //setInterval(() => console.log(++this.x), 1000); 
  setInterval( function count() { console.log(++that.x) }, 10000); 
}
var a = new CountUp1();
*/