//UI

const minnum = document.querySelector('.minnumber');
const maxnum = document.querySelector('.maxnumber'),

	getinput = document.querySelector("#guessnumber"),
	getbtn	= document.querySelector("#btn"),

	message1 = document.querySelector(".message1"),
	message2 = document.querySelector(".message2"),

	getgameform = document.getElementById("gameform");

const min =1,
		max =10,
		winningnum = randomnum(min,max);

let gameleft=3;

minnum.textContent = min;
maxnum.innerText =max;


getbtn.addEventListener('click',function(e){
	console.log('hay i am working');
	// console.log(getinput.value);
	// console.log(typeof getinput.value);

	// let guess = Number(getinput.value);
	// let guess = +getinput.value;
	let guess = parseInt(getinput.value);
	console.log(guess);

	if(guess <min || guess >max || isNaN(guess)){
		// message2.textContent=`Please enter number betweeen ${min} to ${max}`;
		setmessage2(`Please enter number betweeen ${min} to ${max}`,"red");
	}

	if(guess === winningnum){
		
		//GameOver Won;
		//console.log('You Won');

		//disabled getinput
		// getinput.disabled = true;


		//getinput border color to green
		// getinput.style.borderColor = 'green';

		//message 1
		// message1.textContent = `${winningnum} is correct!!You Won`
		// message1.style.color = "green";

		// setmessage1(`${winningnum} is correct!!! You Won`,"green");

		//play again? 
		// getbtn.value="play agin";

		gameover(true,`${winningnum} is correct!!! You Won`);
	}
	else{
		//gameleft--;
		gameleft -=1;
		if(gameleft === 0){
			//Gameover Lose

			//disabled getinput
		// getinput.disabled = true;


		//getinput border color to green
		// getinput.style.borderColor = 'red';

		//message 1
		// message1.textContent = `Game Over, You Lost, The correct number is ${winningnum}`;
		// message1.style.color = "red";
		// setmessage1(`Game Over, You Lost, The correct number is ${winningnum}`,"red");

		//play again? 
		// getbtn.value = 'Play again';

		//Add
		getbtn.className +="playagain";

		gameover(false,`Game Over, You Lost, The correct number is ${winningnum}`);
		}
		else{
		//Continue Game

		//getinput border color to red
		getinput.style.borderColor = "red";


		//message 1
		message1.textContent = `${guess} is not correct! ${gameleft} guess left`;
		message1.style.color = "blue";

		//clear getinput old value
		getinput.value= "";

		//auto focus getinput
		getinput.focus();
		}

	}

	e.preventDefault();
});

function setmessage1(msg,color){
	message1.textContent =msg;
	message1.style.color=color;
}

function setmessage2(msg,color){
	message2.textContent = msg;
	message2.style.color = color;

	//1 s = 1000 ms
	setTimeout(function(){
		message2.textContent = " ";
	},2000);
}


function gameover(won,msg){
		
	let color;

	won === true ? color = "green": color = "red" ;
	//disabled getinput
	getinput.disabled = true;


	//getinput border color to green
	getinput.style.borderColor = color;

	//message 1
	setmessage1(msg,color)
	// message1.textContent = `${winningnum} is correct!!You Won`
	// message1.style.color = "green";

	// setmessage1(`${winningnum} is correct!!! You Won`,"green");

	//play again? 
	getbtn.value="play again";
}


getgameform.addEventListener('mousedown',function(e){
	// console.log(e.target);

	// e.target.classList.contains('playagain');
	if(e.target.className === "btn playagain"){
		// console.log('i am working');
		window.location.reload();
	}
});

function randomnum(min,max){
	let getrdm = Math.floor(Math.random()*(max-min)+min);
	return getrdm;

}

// console.log(randomnum(1,10));
// console.log(winningnum);
	



//30NG
//31JS