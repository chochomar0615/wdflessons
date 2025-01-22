let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;

val = document.URL;  //file:///D:/wdfexercisefile/javascript/l21documentobject.html


val = document.links;// HTMLCollection []
val = document.links[0];
val = document.links[3]; //<a href="#" id="delete-item4" class="delete-item myitem" title="iamtitle" alt="iamalt">
							//<i class="fas  fa-trash-alt">Delete</i></a>
val = document.links[3].id; //delete-item4
val = document.links[5].id; //clearall

val = document.links[3].className; //  delete-item myitem
val = document.links[3].classList;  //DOMTokenList

val = document.links[3].classList[0];//delete-item
val = document.links[3].classList[1];//myitem


val = document.forms;//HTMLCollection
val = document.forms[0];//<form id="form" class="form" action="" method=""></form>
val = document.forms[0].id;//form
val = document.forms[0].className;//form
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action;//file:///D:/wdfexercisefile/javascript/l21documentobject.html#
val = document.forms[0].method;//get

val = document.images;//HTMLCollection
val = document.images[0];//<img src="./loadcartoon.gif" id="loading" class="loading" alt="loader">
val = document.images[0].src;//file:///D:/wdfexercisefile/javascript/loadcartoon.gif
val = document.images[0].id;//loading
val = document.images[0].alt;//
val = document.images[0].className;//
val = document.images[0].classList;//DOMTokenList
val = document.images[0].classList[0];//loading

val = document.scripts;//HTMLCollection
val = document.scripts[0];//<script ></script>
val = document.scripts[0].src;//file:///D:/wdfexercisefile/javascript/l21documentobject.js
val = document.scripts[0].type;

// console.log(val);

// => Change Styling

// document.getElementById("tasktitle").style.backgroundColor ="green";
// document.getElementById("tasktitle").style.color="#fff";
// document.getElementById("tasktitle").style.paddingLeft= "50px";


// => Change Content
// document.getElementById("tasktitle").textContent ="Hello";
// document.getElementById("tasktitle").innerText ="My Job";
// document.getElementById("tasktitle").innerHTML ="hELLO";

// => Call by Class Name (Class)
// const list=document.getElementsByClassName("list-group-item");
// console.log(list);//HTMLCollection(5/length)
// console.log(list[0]);//<li></li>


// list[0].style.color="blue";
// list[3].textContent="Have to visit";
// list[3].innerText="Have to do";
// list[3].innerHTML='Have to cook<a href="#" id="delete-item2" class="delete-item" title="iamtitle" alt="iamalt"><i class="fas  fa-trash-alt">Delete</i></a>';

//=> Call by Tag Name (Element)

// const litags = document.getElementsByTagName("li");
// console.log(litags);//HTMLCollection(5)
// console.log(litags[1]);

// litags[1].style.color = "red";
// litags[3].innerHTML='Have to cook<a href="#" id="delete-item2" class="delete-item" title="iamtitle" alt="iamalt"><i class="fas  fa-trash-alt">Delete</i></a>';
// litags[3].style.color="red";


// id ele 

// const ididid=document.getElementById("tasktitle");
// console.log(ididid);

// => Query Selector

// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector(".card-header"));
// console.log(document.querySelector("h4"));;

// console.log(document.querySelector("li")); //only first li
// console.log(document.querySelector(".list-group-item"));;//only first li

// document.querySelector("li").style.color ="pink"; //work like normal css not index
// document.querySelector("ul li").style.color ="green";
// document.querySelector("ul li:nth-child(odd)").style.color ="red";
// document.querySelector("ul li:nth-child(even)").style.color ="orange";
// document.querySelector("ul li:first-child").style.color ="orange";
// document.querySelector("ul li:nth-of-type(3)").style.color ="yellow";
// document.querySelector("ul li:nth-of-type(5)").style.color ="darkred";


// Query Selector All

// console.log(document.querySelectorAll("#tasktitle")); //NodeList //work array
// console.log(document.querySelectorAll("#tasktitle")[0]);

// console.log(document.querySelectorAll(".card-footer")); //NodeList
// console.log(document.querySelectorAll(".card-footer")[0]); 

// console.log(document.querySelectorAll("li")); //NodeList(5) 
// console.log(document.querySelectorAll("li")[0]); 
// console.log(document.querySelectorAll("li")[4]); 

// console.log(document.querySelectorAll(".list-group-item")); //NodeList(5) 
// console.log(document.querySelectorAll(".list-group-item")[0]); 
// console.log(document.querySelectorAll(".list-group-item")[4]); 


// const listitems = document.querySelector("ul").getElementsByTagName("li");
// console.log(listitems); //HTMLCollection(5)

// const liitems = document.querySelector("ul").querySelector("li");
// console.log(liitems); //

// const testliitems = document.querySelector("ul").querySelector("li:first-child");
// console.log(testliitems); //

// const litem = document.querySelector("ul").getElementsByClassName("list-group-item");
// console.log(litem); //HTMLCollection(5)
// console.log(typeof litem);//object
// console.log(litem[1]);

// const arritems= Array.from(litem);
// console.log(arritems);

// for(value of litem){
// 	console.log(value);
// }

	//forEach is must be pure Array
// arritems.forEach(function(value){
// 	console.log(value);
// });

// const list = document.querySelectorAll('ul.list-group li.list-group-item');
// console.log(list);//NodeList
// console.log(typeof list);//object
// console.log(list[0]);
// console.log(list[3]);

// for(value of list){
// 	console.log(value);
// }

// list.forEach(function(value,idx){
// 	// console.log(value);

// 	// ++idx;
// 	// value.innerText="Hello World";
// 	// value.innerText=`${idx} Hello World`;

// 	value.innerText=`${++idx} Hello World`;
// })


const liodds = document.querySelectorAll("li:nth-child(odd)");
// console.log(liodds);//NodeList(3)

const lieven = document.querySelectorAll("li:nth-child(even)");
// console.log(liodds);//NodeList(3)

// liodds.forEach(function(value){
// 	value.style.backgroundColor="gray";
// })

// for(let i=0;i<liodds.length;i++){
// 	// console.log(i);//0 1 3
// 	liodds[i].style.backgroundColor ="pink";
// }


// lieven.forEach(function(value){
// 	value.style.backgroundColor="blue";
// })

// for(let j=0;j<lieven.length;j++){
// 	console.log(j);//0 1
// 	lieven[j].style.backgroundColor ="gray";
// }


// => Parent to Children

let getli = document.querySelector('ul li');
 	getli = document.querySelector('li.list-group-item');
	getli = document.querySelector('li:first-child');
// console.log(getli);

let chl;
let getul = document.querySelector('ul.list-group');
// console.log(getul);

// chl = getul.children;
// console.log(chl);//HTMLCollection(5)
// console.log(chl[2]);

// chl[1].innerText="Have to cook";
// getul.children[0].textContent="Hello,Good Morning";
// getul.children[0].innerHTML='Hello,List-Item 1<a href="#" id="delete-item1" class="delete-item" title="iamtitle" alt="iamalt"><i class="fas  fa-trash-alt">Delete</i></a>';


// => Parent to Children to Children

			//ul
chl = getul.children; //HTMLCollection(5)
			//ul li-1
chl = getul.children[0]; //li 1

			//ul li-1	a 
chl = getul.children[0].children;//HTMLCollection [a#...]
chl = getul.children[0].children[0];//<a tag>

			//ul li-1	a 				i
chl = getul.children[0].children[0].children;//HTMLCollection [i tag...]
chl = getul.children[0].children[0].children[0];//<i tg>

chl = getul.children[0].children[0].id;
chl = getul.children[0].children[0].className;
chl = getul.children[0].children[0].classList;	// DOMTokenList
chl = getul.children[0].children[0].classList[0];
chl = getul.children[0].children[0].href;



//=> Child Element Count

chl = getul.children.length;// 5
chl = getul.childElementCount;// 5

chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;

// console.log(chl);

// => Children to Parent Element

const getfirstli = document.querySelector('li');
// console.log(getfirstli);

				// li 		ul
let getparent = getfirstli.parentElement;
				//li  		ul    		div.card-footer
	getparent = getfirstli.parentElement.parentElement;
				//li  		ul    		div.card-footer  div.card
	getparent = getfirstli.parentElement.parentElement.parentElement;

// console.log(getparent);

//=> Next Element Sibling

let getfirstli1 = document.querySelectorAll('li')[0];
	
	getsibling = getfirstli1.nextElementSibling;
	getsibling = getfirstli1.nextElementSibling.nextElementSibling;
	getsibling = getfirstli1.nextElementSibling.nextElementSibling.nextElementSibling;
				// li1  	 li2  					li3   				li4   			li5
	getsibling = getfirstli1.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
	getsibling = getfirstli1.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;//null

// console.log(getsibling);


// => Previous Element Sibling

	getsibling = getfirstli1.nextElementSibling.nextElementSibling.previousElementSibling;

	// console.log(getsibling);



// => Create Element


let newli = document.createElement('li');


// Add id

newli.id = 'new-item';

// Add class

// newli.className ="list-group-item";
newli.className ="list-group-item delet-item";

newli.classList.add("delete-i");
newli.classList.add("delete-u");
newli.classList.add("delete-we","delete-us");

// => Add Attribute

// setAttribute(attrname,value);
newli.setAttribute("title","newitem");

// newli.innerHTML ='List item 6<a href= "hello" id="delete-item6" class="delete-item aaaa" title="iamtitle" alt="iamalt"><i class="fas  fa-trash-alt">Delete</i></a>';
newli.innerText ="Hello Thailand";
// newli.textContent ="hay";


// const newtext = document.createTextNode("Hello World");
// newli.appendChild(newtext);

const newlink = document.createElement('a');
newlink.href="#";
newlink.id="delete-item6";
newlink.classList.add("delete-item");
newlink.setAttribute("title","iamtitle2");

// console.log(newlink);

const newitalic =document.createElement("i");
newitalic.classList.add("fas","fa-tash-alt");
// console.log(newitalic);

newlink.appendChild(newitalic);
newitalic.appendChild(document.createTextNode("Delete"));
// console.log(newlink);

newli.appendChild(newlink);

// console.log(newli);

// document.querySelector('ul').appendChild(newli);
document.querySelectorAll('ul.list-group')[0].appendChild(newli);


//=> Replace Element
// replaceChild(new,old)

const oldtitleh4 = document.getElementById('tasktitle');
// console.log(oldtitleh4);

const newtitleh2 = document.createElement("h2");
newtitleh2.id="tasktitle";
newtitleh2.appendChild(document.createTextNode("All My Lists"));
// console.log(newtitleh2);

const getcardfooter = document.querySelector(".card-footer");
// const getcardfooter = document.querySelectorAll(".card-footer")[0];

getcardfooter.replaceChild(newtitleh2,oldtitleh4);
// console.log(getcardfooter);


// => Remove Element (self)

const getlis = document.querySelectorAll("li");
// console.log(getlis);

// getlis[0].remove();//list-item1
// getlis[1].remove();//list-item1
// getlis[4].remove();//list-item1

// console.log(getlis.length);//6


//=> Remove Child Element

const getfirstul = document.querySelector("ul");
// console.log(getfirstul);
// getfirstul.remove();
// console.log(getfirstul);

// getfirstul.removeChild(getfirstul.children[0]);//list-item1
// getfirstul.removeChild(getfirstul.children[2]);//list-item4
// getfirstul.removeChild(getfirstul.children[1]);//list-item3



//=> Attribute 

const firstli = document.querySelector('li');
// console.log(firstli);

const firstlichild = firstli.children[0];
// console.log(firstlichild);
// console.log(firstlichild.href);//#
// console.log(firstlichild.id);//delete-item2
// console.log(firstlichild.alt);//undefined
// console.log(firstlichild.title);//iamtitle

// console.log(firstlichild.getAttribute('href'));//#
// console.log(firstlichild.getAttribute('id'));//
// console.log(firstlichild.getAttribute('alt'));//iamalt
// console.log(firstlichild.getAttribute('title'));//iamtitle

let hasattr = firstlichild.hasAttribute("href");
// console.log(hasattr);//true

hasattr = firstlichild.hasAttribute("hay");
// console.log(hasattr);//false


// => className vs classList

// console.log(firstlichild.className);
// firstlichild.className="delete-myself";
// firstlichild.className="delete-myself delete-item";
// firstlichild.className="delete-myself delete-item deleteourselves";
// firstlichild.className="delete-myself deleteourselves";
// console.log(firstlichild.className);


// console.log(firstlichild.classList);// DOMTokenList
// console.log(firstlichild.classList[0]);
// console.log(firstlichild.classList[1]);

firstlichild.classList.add("delete-myself");
firstlichild.classList.add("delete-myself","delete-us");
firstlichild.classList.add("delete-ourselse","delete-us","delete-all");

// firstlichild.classList.remove("delete-myself");
// firstlichild.classList.remove("delete-us","delete-all");

// console.log(firstlichild);//delete-item delete-myself

// if(firstlichild.className === "delete-item delete-myself delete-us delete-ourselse delete-all"){
// 	console.log("Yes");
// }else{
// 	console.log("No");
// }


// if(firstlichild.className === "delete-us delete-ourselse delete-all delete-item delete-myself "){
// 	console.log("Yes");
// }else{
// 	console.log("No");
// }


// if(firstlichild.classList.contains('delete-myself')){
// 	console.log("Yes");
// }else{
// 	console.log("No");
// }


//=> addEventListener(eventtype,callbackfunction)

const clearbtn = document.querySelector(".clear-tasks");

console.log(clearbtn);


//Method 1

// clearbtn.addEventListener("click",function(e){
// 	// console.log("i am working");

// 	// console.log(e);//PointerEvent

// 	// console.log(e.target);
// 	// console.log(e.target.id);
// 	// console.log(e.target.className);
// 	// console.log(e.target.classList);
// 	// console.log(e.target.classList[0]);


// 	// console.log(this);// do not work in arrow function 

// 	console.log(this.id);
// 	console.log(this.className);

// 	e.preventDefault();
// });


//Method 

// clearbtn.addEventListener("click",function(event){
// 	// console.log("i am working");

// 	 console.log(event);
// });


// Method 2

clearbtn.addEventListener("click",myclick);

function myclick(e){
	e.preventDefault();

	// console.log('hello');

	// console.log(e.target);

	// console.log(this);
	// console.log(this.id);
	// console.log(this.href);

	// this.innerText = "Done";
	// e.target.innerText = "Finished";

	//Coordinate Event - relative to the window
	const clientx = e.clientX;
	const clienty = e.clientY;
	// console.log(clientx,clienty);

	//Coordinate Event - relative to the window
	const offsetx = e.offsetX;
	const offsety = e.offsetY;
	// console.log(offsetx,offsety);

}


// => Mouse Event( Pointer Event)

const clbtn = document.querySelector('.clear-tasks');


// Single Click
// clbtn.addEventListener('click',mouseeventtype);

// Double Click
// clbtn.addEventListener('dblclick',mouseeventtype);

// Mouse Down
// clbtn.addEventListener('mousedown',mouseeventtype);


// Mouse Up [OR] Click
// clbtn.addEventListener('mouseup',mouseeventtype);


const card = document.querySelector('.card');

// Mouse Enter
// card.addEventListener('mouseenter',mouseeventtype);

// Mouse Over
// card.addEventListener('mouseover',mouseeventtype);

// Mouse Leave
// card.addEventListener('mouseleave',mouseeventtype);

// Mouse Out
// card.addEventListener('mouseout',mouseeventtype);

// Mouse Move
// card.addEventListener('mousemove',mouseeventtype);



const headingh2 = document.querySelector('h2');




// function mouseeventtype(e){

// 	// console.log("i am working");

// 	// console.log(`Event type = ${e.type}`);

// 	headingh2.innerText = `MouseX : ${e.clientX} MouseY : ${e.clientY}`;

// 	document.body.style.backgroundColor = `rgba(${e.offsetX} , ${e.offsetY} , ${e.clientY},0.5)`;

// 	e.preventDefault();
// }



//submit

// const getform = document.querySelector('.form');

// getform.addEventListener('submit',function(e){

// 	console.log(`Event type = ${e.type}`);

// 	e.preventDefault();
// });



// => Input Event ( Keyboard Event )

const getinput = document.querySelector('#task');
// console.log(getinput);

//keydown [or] keypress
// getinput.addEventListener('keydown',inputeventtype);
// getinput.addEventListener('keypress',inputeventtype);

// keyup
// getinput.addEventListener('keyup',inputeventtype);
//input
// getinput.addEventListener('input',inputeventtype);


//focus
// getinput.addEventListener('focus',inputeventtype);

//blur => cursor out
// getinput.addEventListener('blur',inputeventtype);

//cut (ctrl+x)
// getinput.addEventListener('cut',inputeventtype);

//paste  (ctrl+v)
// getinput.addEventListener('paste',inputeventtype);

//copy  (ctrl+c)
// getinput.addEventListener('copy',inputeventtype);





function inputeventtype(e){
	// console.log(e.target);
	// console.log(this);

	console.log(`Event type =  ${e.type}`);

	// console.log(e.target.value);
	// console.log(this.value);
	console.log(getinput.value);
}


// =>Event Bubbling

// document.querySelector(".card-title").addEventListener('click',function(){
// 	console.log('i am card-title');
// });

// document.querySelector(".card-header").addEventListener('click',function(){
// 	console.log('i am card-header');
// });

// document.querySelector(".card").addEventListener('click',function(){
// 	console.log('i am card');
// });


// =>Event Delegation

// const getdeleteitem = document.querySelector(".myitem");

// getdeleteitem.addEventListener('click',function(e){
// 	console.log("i am delete item");

// 	// console.log(e.target);// a tag, if delete is in i tag, will print out i tag
// 	console.log(this);// if delete is in i tag, will print out a tag
// });



// document.body.addEventListener('click',eventdeleg);

// function eventdeleg(e) {
// 	// console.log(e.target);

// 	// console.log(e.target.className);
// 	e.preventDefault();

// 				//i tag
// 	// if(e.target.className === "fas fa-trash-alt"){
// 	// 	console.log("i am working, i am trash");
// 	// }

// 				// i     a tag
// 	// console.log(e.target.parentElement);
// 	// console.log(e.target.parentElement.className);

// 	if(e.target.parentElement.classList.contains('delete-item')){
// 		console.log("i am working , a tag");

// 			//i 
// 		// e.target.remove();

// 			//i       a
// 		// e.target.parentElement.remove();

// 			// i    a  			li
// 		e.target.parentElement.parentElement.remove();




// 	}
// }



document.querySelector("#form").addEventListener('click',function(e){

	e.preventDefault();
	// console.log('i am working');

	let getnewtask = document.getElementById('task').value;
	// console.log(getnewtask);

	let allnewtasks;

	if(localStorage.getItem('taskname') === null){
		allnewtasks =[];
	}else{
		allnewtasks = JSON.parse(localStorage.getItem('taskname'));
		

		// console.log(allnewtasks);
		// console.log(typeof allnewtasks);
	}

	allnewtasks.push(getnewtask); //
	localStorage.setItem('taskname',JSON.stringify(allnewtasks));

	


	// console.log(allnewtasks);


});



 




 //29Oct 
//video 46:16












