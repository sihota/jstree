"use strict"; // restrict to use depcrecated functions

/* create div element with style and attributes  */
var div = document.createElement("div");
div.style.padding = "10px";
div.style.background = "cyan";
div.id = "div1";
div.setAttribute("class","clsdiv1");

div.addEventListener('click',function(){
	alert("clicked on div1");
});

/* create label element with text Enter your name */
var label = document.createElement("label");
label.innerText = "Enter your name:";

/* add it to the div element */
div.appendChild(label);

label.addEventListener("click",function(){
	alert("clicked on label");	
	
});

/* create input element of  type text */
var input = document.createElement("input"); 
/*define input element text type */
input.setAttribute("type","text"); 
/* add input text into div element */
div.appendChild(input);

input.addEventListener("click",function(){
  //stop bubbling
  if(event.stopPropagation) event.stopPropagation();
  if(event.cancelBubble!=null) event.cancelBubble = true; 
  alert("clicked on input text");	
});

/* create submit button */
var submit = document.createElement("input")
submit.setAttribute("type","submit");
submit.value = "submit form";

submit.addEventListener("click",function(){
	
	
	var d = document.getElementById("div1");
	
	//d.removeEventListener("click");
	
	/** search for only first label element found in div element **/
	/** use querySelectorAll() for iterate over all labels in div **/
	var l = d.querySelector("label");
	/** if element node exists **/
	if(l!=null)	d.removeChild(l);	
	alert("clicked on submit button");
});

div.appendChild(submit);

/* finally add div to document body */
document.body.appendChild(div);
