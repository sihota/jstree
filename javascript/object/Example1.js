"use strict";

let first = {"firstname":"Amarpal"};
let last = {"lastname":"Sihota"};


//object.assign(target,source1,source2,..sourcen);
let name = Object.assign(first,last);
//console.log(name);
//console.log(first);


let keysvals = Object.assign({"key1":"val1"},{"key2":"val2"},{"key3":"val3"});
//console.log(keysvals);

let merge = Object.assign({"key1":"val1"},{"key1":"val2"},{"key1":"val3"});
//console.log(merge);

let obj = {"name":"abc"};
let clone = Object.assign({},obj);
//console.log(clone);


let defaults = {name:'abc',age:10};
//console.log(defaults);

function foo(options)
{
	let settings = Object.assign({},defaults,options);
    let name = settings.name
	let age = settings.age;
	return name + ' ' + age;
}

let n1 = {name:'xyz',age:20};
console.log(foo(n1));

function foo1(options)
{
	let settings = Object.assign({},defaults,options);
    let name = settings.name
	let age = settings.age;
	return name + ' ' + age;
}

let n2 = Object.assign({},{name:'xyz',age:20},{name:'test',age:30});
console.log(foo1(n2));


function foo3( {n="a",a=10} = {} ) 
{
  return (`${n},${a}`);
}

let nv = {n:"new",a:30};
console.log(foo3());

let objLiteralNotation = {
	property1:"value",
	property2:10,
	method1:function(){return "method1"},
	method2:function(val1){return val1;},
	outer:function()
	{
		let inner = function()
		{
		  return "inner";			
		}
        return inner;		
	}
	
}

//console.log(objLiteralNotation);
let inner = objLiteralNotation.outer();
console.log(inner());