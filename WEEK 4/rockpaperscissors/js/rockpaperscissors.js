// JavaScript Document

//create iterator variables:
var i;
var j;
var k;

//select all elements with the class "player_choice";
var user_choice = document.querySelectorAll(".player_choice");

//use a for loop to create an array of choices:
var choices = Array();
for (i = 0; i < user_choice.length; i++) { 
    choices[i] = user_choice.item(i).id;
}

//create vars to hold the scores:
var player = 0;
var computer = 0;



//function add to score:
function addToScore(p){
	var pID = p+"_score";
	var pDiv = document.getElementById(pID);
	var pCount = pDiv.textContent;
	pCount++;
	document.getElementById(pID).innerHTML = pCount;	
}


//compare results:
function compare(choice1, choice2){
    //no matter what each player chooses, if they choose the same, there is a tie
    if(choice1===choice2){
        return ("The result is a tie!");
    }
    //or else we need to compare results
    //the user "choice1" can select 1 of 3 options:
    else if(choice1==='rock'){
        if(choice2==='scissors'){
			addToScore('player');
            return ("rock wins");
        }else{
			addToScore('computer');
            return ("paper wins");	
        }
    }else if(choice1==='paper'){
        if(choice2==='rock'){
			addToScore('player');
            return ("paper wins");
        }else{
			addToScore('computer');
            return ("scissors wins");
        }
    }else{
        if(choice2==='rock'){
			addToScore('computer');
            return ("rock wins");
        }else{
			addToScore('player');
            return ("scissors wins");
        }
    }
}
//function to remove active class
function removeClass(){
	for (k = 0; k < choices.length; k++) { 
    	document.getElementById(choices[k]).className = "player_choice";
	}
}


//randomly makes the computer's choice:
function makeComputerChoice(choice){
	var computerChoice=choices[Math.floor(Math.random()*3)];
	var result = compare(choice, computerChoice);
	document.getElementById('computer_choice').innerHTML = '<p><span class="icon-'+computerChoice+'"></span><br>'+result+'</p>';
	document.getElementById('computer_choice').className = 'played';
	document.getElementById('score_board').className = 'play';
}

//this function makes each of the ids passed to it clickable, returns the value and runs makeComputerChoice
function createUserChoice(element) {
	document.getElementById(element).onclick= function(){
		removeClass();
		document.getElementById(element).className = "player_choice active";
		var choice = element;
    	makeComputerChoice(choice);
	};
}


for (j = 0; j < choices.length; j++) { 
    createUserChoice(choices[j]);
}
