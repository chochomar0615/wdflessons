let val;

val = document;

val = document.doctype;
val = document.head;
val = document.body;

val = document.URL;

val =document.links;
val =document.links[0];
val =document.links[1];
val =document.links[3];
val =document.links[3].id;
val =document.links[5].id;

val =document.links[3].className;
val =document.links[3].classList;
val =document.links[3].classList[0];
val =document.links[3].classList[1];

val = document.forms;   //HTMLCollection
val = document.forms[0];
val = document.forms[0].id; //form
val = document.forms[0].className; //form
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action; // file:///D:/wdfbatch11/l47documentobject.html
val = document.forms[0].method; //get

val = document.images;
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].classList[0];
val = document.images[0].src;
val = document.images[0].alt;

// val = document.scripts;     //HTMLCollection
val = document.scripts[0]; //<script src=" D:\wdfbatch11\l47document.js" type="text/javascript"></script>
val = document.scripts[0].src;
val = document.scripts[0].type;

// console.log(val);

// => Change Styling
document.getElementById('tasktitle').style.backgroundColor ="green";
document.getElementById('tasktitle').style.color ="#fff";
document.getElementById('tasktitle').style.padding ="5px";
// document.getElementById('tasktitle').style.paddingLeft ="5px";


// => Change Content //id => Element (cause id is unique)
document.getElementById("tasktitle").textContent="My Job";
document.getElementById("tasktitle").innerText="My Todo";
document.getElementById("tasktitle").innerHTML="My Lists";

document.getElementById("tasktitle").innerHTML="<span style='color:yellow;'>My New Tasks Style</span>";
// document.getElementById("tasktitle").innerText="My Lists";   //donot work
// document.getElementById("tasktitle").textContent="My Lists"; //donot work


// => Call  by Class Name(Class)
const lis = document.getElementsByClassName('list-group-item');
console.log(lis);
console.log(lis[2]);

lis[2].style.color = 'blue';
// lis[2].textContent = 'Have to visit'; //overwrite or override
// lis[2].innerText= 'Have to cook';
lis[2].innerHTML= 'Have to read"<a href="#" id="delete-item1" class="delete-item"><i class="fa-solid fa-trash"></i>delete</a>"';

// => Call by Tag Name (Element)

const litags= document.getElementsByTagName('li');
console.log(litags);
console.log(litags[1]);

litags[1].style.color ="red";
litags[1].innerHTML='Have to cook<a href="#" id="delete-item2" class="delete-item"><i class="fa-solid fa-trash"></i>delete</a>';

// => Query Selector
// console.log(document.querySelector('#tasktile'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h3'));

// console.log(document.querySelector('li')); // only first li will come out
// console.log(document.querySelector('.list-group-item')); //only first li

// document.querySelector('li').style.color="green";
// document.querySelector('ul li').style.color="violet";
// document.querySelector('ul li:nth-child(odd)').style.color="yellow";
// document.querySelector('ul li:nth-child(even)').style.color="green";
// document.querySelector('ul li:last-of-type').style.color="orange";
// document.querySelector('ul li:nth-of-type(4)').style.color="steelblue";

// => Query Selector All

// console.log(document.querySelectorAll('#tasktitle')); //NodeList
// console.log(document.querySelectorAll('#tasktitle')[0]);

// console.log(document.querySelectorAll('.card-title')); //NodeList
// console.log(document.querySelectorAll('.card-title')[0]);

// console.log(document.querySelectorAll('li')); //NodeList
// console.log(document.querySelectorAll('li')[2]);

// console.log(document.querySelectorAll('.list-group-item')); //NodeList
// console.log(document.querySelectorAll('.list-group-item')[3]);

// const listitems = document.querySelector('ul').getElementsByClassName('list-group-item');
// console.log(listitems); //HTMLCollection(5)
// console.log(typeof listitems); //object
// console.log(listitems[1]);

// const arritems =Array.from(listitems);
// //console.log(arritems);

// arritems.forEach(function(arritem){
   // console.log(arritem);
// });

// const listitms = document.querySelectorAll('ul.list-group li.list-group-item');
// console.log(listitms);
// console.log(typeof listitms);
// console.log(listitms[1]);

// listitms.forEach(function(listitm,idx){
    //console.log(listitm);

    // listitm.innerText = `Hellow World`;
   // listitm.innerText = `${++idx}Hello World`;
// });



// const lisodds = document.querySelectorAll('li:nth-child(odd)');
// console.log(lisodds);

// const lisevens = document.querySelectorAll('li:nth-child(even)');
// console.log(lisevens);

// lisodds.forEach(function(lisodd){
//     lisodd.style.backgroundColor ="gray";
// });

// // lisevenss.forEach(function(liseven){
// //     liseven.style.backgroundColor ="green";
// // });

// lisevens.forEach(function(aaa){
//     aaa.style.backgroundColor ="green";
// });

// for(let i=0; i<lisevens.length;i++){
//     console.log(i);
//     lisevens[i].style.backgroundColor="skyblue";
// }


// listevens.forEach(function(value,index){
//     console.log(value);
// });


//=> Parent to Children

// let getli= document.querySelector('ul li');
//     getli= document.querySelector('li.list-group-item');
//     getli =document.querySelector('li.list-group-item:first-child');
// console.log(getli);

// let chl;
let getul = document.querySelector('ul.list-group');
// console.log(getul);

chl = getul.children; //HTMLCollection(5)
// console.log(chl);
// console.log(chl[2]);

// chl[1].textContent = "Have to go";
// getul.children[3].innerText= "Have to Cook";
// getul.children[4].innerHTML="Have to do many tasks'<a href='#' id='delete-item5' class='delete-item'><i class='fa-solid fa-trash'</i>delete</a>'";

// => Parent to Children to Children

chl = getul;//ul element
chl = getul.children;
chl = getul.children[0];
chl = getul.children[0].children; //HTMLCollection

chl = getul.children[0].children[0];
chl = getul.children[0].children[0].id;
chl = getul.children[0].children[0].className;
chl = getul.children[0].children[0].classList; //DOMTokenList
chl = getul.children[0].children[0].classList[0];
// chl = getul.children[0].children[0].href;

    // ul   li          a 
chl = getul.children[0].children[0].children;//HTMLCollection
    //ul    li          a           i
chl = getul.children[0].children[0].children[0];

console.log(chl);


// => Child Element Count
// chl = getul.children.length;
chl = getul.childElementCount; //5

chl = getul.children[0].childElementCount; //1
chl = getul.children[0].children[0].childElementCount;//5
console.log(chl);

// => Children to Parent Element

const getfirstli = document.querySelector('li.list-group-item:first-child');
console.log(getfirstli);

                // li        ul
let getparent = getfirstli.parentElement;
              // li        ul           div.card-footer
    getparent = getfirstli.parentElement.parentElement;
                 // li        ul        div.card-footer     div.card
    getparent = getfirstli.parentElement.parentElement.parentElement;

console.log(getparent);


// => Next Element Sibling

let getsibling = getfirstli;
                //li        li1
    getsibling = getfirstli.nextElementSibling;
                  //li        li1               li2
    getsibling = getfirstli.nextElementSibling.nextElementSibling;
                     //li        li1               li2              li3
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
                     //li        li1               li2              li3                 li4
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
                         //li        li1               li2              li3                 li4             li5
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

    console.log(getsibling);


// => Previous Element Sibling
            // li1          li2                 li3                 li2
getsibling =  getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(getsibling);

// Create Element

const newli = document.createElement('li');

// => Add ID
newli.id="new-item";

//=>Add Class
//newli.className = "list-group-item";
// newli.className = "delete-me";
// newli.className = "list-group-item delete-me";

// newli.classList.add('delete-i');
// newli.classList.add('delete-you');
// newli.classList.add('delete-we','delete-your','delete-us');


// => Add Attribute
//setAttribute(attrname,value);
newli.setAttribute('title','newitem');

// newli.textContent="hay";
// newli.innerText="hi";
// newli.innerHTML='List Item 6';


// const newtext = document.createTextNode("Hello World");
// console.log(newtext);
// newli.appendChild(newtext);

newli.appendChild(document.createTextNode("Hello Thailand"));

const newlink = document.createElement('a');
newlink.href = "#";
newlink.id="delete-item";
// newlink.className="delete-item";
newlink.classList.add("delete-item");

// newlink.innerText="delete";


const newitalic = document.createElement('i');
newitalic.classList.add('fas','fa-trash-alt');
console.log(newitalic);

newli.appendChild(newitalic);
console.log(newlink);

newlink.appendChild(document.createTextNode('delete'));
newli.appendChild(newlink);
console.log(newli); 

document.querySelector('ul.list-group').appendChild(newli);

// => Replace Element
// replaceChild(new,old)

const oldtitleh4 =document.getElementById('tasktitle');
console.log(oldtitleh4);

const newtitleh2 = document.createElement('h2');
newtitleh2.id ="tasktitle";

const newcaption = document.createTextNode('All My List');
newtitleh2.appendChild(newcaption);

//console.log(newtitleh2);

const getfooter = document.querySelector('.card-footer');
console.log(getfooter);

getfooter.replaceChild(newtitleh2,oldtitleh4);


// => Remove Element (self)

const getlis = document.querySelectorAll('li'); //Node List that can enable in using forEach looping
// console.log(getlis);

// getlis[0].remove(); // li 1
// getlis[1].remove(); // li 2

// console.log(getlis.length); //6
//------------------------------------------------
// => Remove (only above on UI)

const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
// getfirstul.remove();

// console.log(getfirstul.children[0]);

// getfirstul.removeChild(getfirstul.children[0]);
// getfirstul.removeChild(getfirstul.children[2]);
// getfirstul.removeChild(getfirstul.children[1]);

 // => Attribute 


//  if(fstlichild.classList.contains('delete-myself')){
//     console.log('Yes');
//  }else{
//     console.log('No');
//  }
 const firstli = document.querySelector('li');
//  console.log(firstli);

 const fstlichild = firstli.children[0];
//  console.log(fstlichild);
//  console.log(fstlichild.id);
//  console.log(fstlichild.href);
//  console.log(fstlichild.alt);
//  console.log(fstlichild.title);

//  console.log(fstlichild.getAttribute('href')); //#
//  console.log(fstlichild.getAttribute('id'));   //delete-item1
//  console.log(fstlichild.getAttribute('alt'));   //iamalt
//  console.log(fstlichild.getAttribute('title'));  //iamtitle

 let hasatt = fstlichild.hasAttribute('href');
//  console.log(hasatt); // true

 hasatt = fstlichild.hasAttribute('hay');
//  console.log(hasatt); //false

 // => className VS classList
//  console.log(fstlichild.className);
//  fstlichild.className =  'delete-myself';
//  fstlichild.className =  'delete-myself delete-item';
//  fstlichild.className =  'delete-myself delete-item delete-ourserve';
//  fstlichild.className =  'delete-myself delete-ourserve';

 console.log(fstlichild.classList);
//  console.log(fstlichild.classList[0]);
//  console.log(fstlichild.classList[1]);

 fstlichild.classList.add('delete-myself');
 fstlichild.classList.add('delete-myself','delete-item');

 fstlichild.classList.remove('delete-myself');
//  fstlichild.classList.remove('delete-myself','delete-item');

//  console.log(fstlichild);
//  console.log(fstlichild.className);

 if(fstlichild.className === 'delete-item'){
   //  console.log('Yes');
 }else{
   //  console.log('No');
 }

// => addEventListener(eventtype,callbackfunction)

const clearbtn = document.querySelector('.clear-tasks');

//Method 1
clearbtn.addEventListener('click',function(e){
   // console.log("i am working");

   // console.log(e);
   // console.log(e.target);
   // console.log(e.target.id);
   // console.log(e.target.className);
   // console.log(e.target.classList);
   // console.log(e.target.classList[0]);

   // console.log(this); //cannot work in arrow function
   // console.log(this.id);

   e.preventDefault(); //appear only this our webpage


});

//Method2
clearbtn.addEventListener('click',myclick);

function myclick(e){
   // e.preventDefault();
   // console.log("hello");
   // console.log(e.target);

   // console.log(this);
   // console.log(this.id);

   // e.target.innerText = "Finished";
   // this.innerText = 'Done';

   //Coordinate Event - relative to the window
   // console.log(e);
   // const clientx = e.clientX;
   // const clienty = e.clientY;
   // console.log(clientx,clienty);

   
   //Coordinate Event - relative to the element
   // console.log(e);
   // const offsetx = e.offsetX;
   // const offsety = e.offsetY;
   // console.log(offsetX,offsetY);


}

//=> Mouse Event (Pointer Event)

const clbtn = document.querySelector('.clear-tasks');

//Single Click
// clbtn.addEventListener('click',mouseeventtype);

//Double Click
// clbtn.addEventListener('dblclick',mouseeventtype);

//Mouse Down
// clbtn.addEventListener('mousedown',mouseeventtype);

//Mouse Up or Click
// clbtn.addEventListener('mousetype',mouseeventtype);

// const card = document.querySelector('.card');
//Mouse Enter
// card.addEventListener('mouseenter',mouseeventtype);

//Mouse Over (element to element)
// card.addEventListener('mouseover',mouseeventtype);

//Mouse leave
// card.addEventListener('mouseleave',mouseeventtype);

//Mouse Out
// card.addEventListener('mouseout',mouseeventtype);

//Mouse Move
// card.addEventListener('movemove',mouseeventtype);

// const headingh2 = document.querySelector('h2');



// function mouseeventtype(e){
//    console.log("i am working");
//    console.log(`Event type = ${e.type}`);

   // headingh2.textContent =`MouseX : ${e.clientX} MouseY : ${e.clientY} `;

   // document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetX},${e.offsetY},1)`;

   //e.preventDefault();
//};


//submit

// const getform = document.querySelector('.form');

// getform.addEventListener('submit',function(e){
//    console.log(`Event type = ${e.type}`);

//    // e.preventDefault();
// });

// const getinput = document.querySelector("#task");

//keydown
// getinput.addEventListener('keydown',myclick);
//keypress
// getinput.addEventListener('keypress',myclick);
//keyup
// getinput.addEventListener('keyup',myclick);
//input
// getinput.addEventListener('input',myclick);

//focus
// getinput.addEventListener('focus',myclick);

//blur(cursor move out)
// getinput.addEventListener('blur',myclick);

//cut(ctl+x)
// getinput.addEventListener('cut',myclick);

//paste(ctl+v)
// getinput.addEventListener('paste',myclick);

//copy(ctl+c)
// getinput.addEventListener('copy',myclick);

// function myclick(e){
//    // console.log(e.target);
//    // console.log(this);

//    console.log(`Even type is = ${e.type}`);

//    console.log(e.target.value);
//    console.log(this.value);
//    console.log(getinput.value);
// };


// => Event Bubbling

// document.querySelector('.card-title').addEventListener('click',function(){
//          console.log('i am card-title');
// });

// document.querySelector('.card-header').addEventListener('click',function(){
//    console.log('i am card-header');
// });

// document.querySelector('.card').addEventListener('click',function(){
//    console.log('i am card');
// });


// => Event Delegation

const getdeleteitem = document.querySelector('.delete-item');
// console.log(getdeletitem);

getdeleteitem.addEventListener('click',function(e){
   console.log('i am deleteitem');

   console.log(e.target); //i tag
   console.log(this); // a tag
});

// document.body.addEventListener('click',eventdeleg);

// function eventdeleg(e){
//    console.log(e.target);

//    console.log()
//    console.log(e.target)

   //i         a
// if(e.target.parentElement.classList.contains('delete-item')){
//    console.log('i am working, i am a tag');
//    //i         
//    e.target.remove();
//    //i         a
//    e.target.parentElement.remove();
//    //i         a           li
//    e.target.parentElement.parentElement.remove();
// }
// }



document.querySelector('#form').addEventListener('submit',function(e){

   e.preventDefault();

   //console.log('i am working');

   const getele = document.getElementById('task').value;
   // console.log(getele);

   // localStorage.setItem('mytasks',getele); 

   let alltasks;

   if(localStorage.getItem('mytasks') === null){
      alltasks =[];

   }
   else{
      alltasks = JSON.parse(localStorage.getItem('mytasks'));
      // console.log('alltasks');
      // console.log(typeof alltasks);
   }

   alltasks.push(getele);
   localStorage.setItem('mytasks',JSON.stringify(alltasks));

   console.log(alltasks);

});


// console.log(localStorage.getItem('mytasks'));
// console.log(typeof localStorage.getItem('mytasks'));

// console.log(JSON.parse(localStorage.getItem('mytasks')));
// console.log(typeof JSON.parse(localStorage.getItem('mytasks')));

// const getmytasks = JSON.parse(localStorage.getItem('mytasks'));

// getmytasks.forEach(function(getmytasks) {
//     console.log(getmytasks);
// });




//28ST 
//29MT


//screenrecording & 29/10/2024 left to write() 




















//id => Element (cause id is unique)

//21DO
//22AR
//23LI
//24CN