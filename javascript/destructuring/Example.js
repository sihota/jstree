"use strict"
var a,b;
console.log(a,b);
[a,b] = [10,20];
console.log(a,b);

var x,y;
[x,y] = [1,2,3,4,5];
console.log(x,y);

//... means rest values from array into array;
var v1,v2,rest;
[v1,v2,...rest] = [10,20,30,40,50];
console.log(v1,v2,rest);

var s = ["a","e","i","o","u"];
var [a,e,i,o,u] = s;
console.log(a,e,i,o,u);

var name,age;
[name="default",age=10] = [1,"a"];
console.log(name,age);

var a1=100,b1=200;
console.log(a1,b1);
[a1,b1]=[b1,a1];
console.log(a1,b1);

//you can skip with , ,
var s1,s2;
[s1,,,,s2] = [1,2,3,4,5];
console.log(s1,s2);


function foo()
{
	
	return ['a','b','c'];
}
var a1,a2;
[a1,,a2] = foo();
console.log(a1,a2);

//caught SyntaxError: Rest element must be last element
var j1,j2,j3;
//[j1,...j2,j3] = [1,2,3,4,5];
[j1,...j2] = [1,2,3,4,5];
console.log(j1,j2,j3);


function parseCustomer(customer){
	let parseCust = /^name:(\w+);age:(\d+);email:(.*)$/.exec(customer);
	if(!parseCust){
		return false;
	}
	console.log(parseCust);
	let [,name1,age1,email] = parseCust;
	return [name1,age1,email];	
}

let [name1,age1,email1] = parseCustomer("name:cust1;age:10;email:cust1@email.com");
console.log(name1,age1,email1);

let obj1,obj2;
( {obj1,obj2} = {obj4:"name",obj3:"value1"} );
//({obj1,obj2} = {obj1:"name",obj2:"value1"});
console.log(obj2);

let {ac:aac=1,bc:bbc=2} = {ac:3};
console.log(bbc);

let m1,m2;
({m1="a",m2="b"} = {m1:"c"});
console.log(m1);
///https://wesbos.com/destructuring-renaming/
const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer',
	  _:'default value',
    },
    web: {
      blog: 'https://wesbos.com'
    }
  }
};
const { twitter: tweet, facebook: fb } = wes.links.social;
console.log (tweet);
console.log (fb);
const { _ = 'default-wes-value' } = wes.links.social;
console.log(_);

const Person = {
	firstname: "amarpal",
	lastname: "sihota",
}
let {lastname:lname} = Person;
console.log(lname);


function drawChartOld(options)
{
	options = options === undefined ? {} : options;	
	var size = options.size === undefined ? 'big' : options.size;
	var coords = options.coords === undefined ? {x:10,y:10} : options.coords;
	var radius = options.radius === undefined ? 10 : options.radius;
	console.log (size,coords,radius);
}
drawChartOld({
     size:'small',
     coords: {x:20,y:30},
	 radius:40,	
});

//note - {} at right side you can omit argument to invoke function
function drawChartNew( {size = "big",coords = {x:10,y:10},radius= 10} = {} ) 
{
	console.log (size,coords,radius);
}
drawChartNew();

function drawChartNew1( {size = "big",coords = {x:10,y:10},radius= 10}) 
{
	console.log (size,coords,radius);
}
drawChartNew1({
     size:'medium',
     coords: {x:100,y:200},
	 radius:5,	
});

const Employees = {
	records:
	[
	  { Name : "abc", Address:{zip : 7083,	state :'NJ',},},
	  { Name : "xyz", Address:{zip : 8028,	state :'NJ',},},	
	],
	count:2,
};

let {
	records:[ {Name:FullName}, //rename
		      {Address:{zip:Code}}, //rename
  		    ],
	count:total,
} = Employees;

console.log(FullName,Code);

const people = [
   {
	name:"john",
	family:
	{
		father:"steve",
		mother:"nathalia",
		sister:"gracia",
	},
	age:30,
   },
   {
	 name:"tom",
	 family:
	 {
		father:"sam",
		mother:"belle",
		brother:"mike",
     },
	 age:30,
   },
];

for (var {name:nm,family:{father: fat,mother: mom}} of people )
{
  console.log("name="+nm+" "+"father=" + fat+"mother="+mom);
}	

const user = {
	id:1001,
	fullname:{
		fname:"bob",
		lastname:"hill",		
	},
	salary:1000,	
}

function getUserID({id})
{
	return id;	
}

function getUserDetails({salary:s,fullname:{fname:f}})
{
	console.log(s+" " + f);
}

console.log("user id= "+getUserID(user));
getUserDetails(user);
//rest
var {a,b,...z} = {a:10,b:20,c:30,d:40,e:50};
console.log(a);
console.log(b);
console.log(z);
//spread
var s = {a,b,...z};
console.log(s);
//const means constant no change once assigned/use var/let for variation/change
const f = {"flag":true};
const {"flag":fnew}=f;
console.log(fnew);


const prop = [
{id:1,name: 'billazard',},
{id:2,name: 'bullazard',},
{id:2,name: 'bellazard',},
];

const [,,{name:_name}] =  prop;
console.log(_name);