//what TYPE of variables are the next 3 lines?
//what is their scope?
var confirmString="Are you ready to play? Press \"OK\""
var youngEnough='Play ON!!';
var tooOld='OK... but, I cannot be responsible for your safety';

contender=Array('wizard', 'orc', 'dwarf', 'troll');

var playerType='<option>Select Your Player</option><option value="wizard">Wizard</option><option value="orc">Orc</option><option value="dwarf">Dwarf</option><option value="troll">Troll</option>';
var myChoice='<option>Choose</option><option value="fight">Fight</option><option value="hide">Hide</option><option value="run">Run</option>'

function makeResult(o){
    var myAction = document.getElementById("myChoice").value;
    if(myAction==='fight'){
        if(o===mySVG){
           document.getElementById('demo2').innerHTML = '<p>You are victorious!!!</p>'; 
        }else{
           document.getElementById('demo2').innerHTML = '<p>You fought a '+o+ ' are you CRAZY???</p>';  
        }
    }else if(myAction==='hide'){
        document.getElementById('demo2').innerHTML = '<p>The '+o+ ' sees you cowering...</p>'; 
    }else{
        document.getElementById('demo2').innerHTML = '<p>Run Forrest.  RUN!</p>'; 
    }
    
}

function makeOpponent(){
    var x = Math.floor((Math.random() * 4));
    var opponent = contender[x];
    document.getElementById('demo2').innerHTML = '<p>You meet a '+opponent+' in the forest.  What do you do????</p><select id="myChoice" onchange="makeResult(\''+opponent+'\')">'+myChoice+'</select>';
    drawPlayer2(opponent,'canvas2');  
}

function drawPlayer(){
    mySVG = document.getElementById("myPlayer").value;
    var can = document.getElementById('canvas1');
    var ctx = can.getContext('2d');
    ctx.clearRect(0, 0, can.width, can.height);
    
    var img = new Image();
    
    img.onload = function() {
        var hatWidth = img.width;
        var hatHeight = img.height;
        var newHatWidth = can.width;
        var newHatHeight = can.height;
        
        if(hatWidth!==hatHeight){
            if(hatWidth>hatHeight){
                newHatHeight=hatHeight/hatWidth*newHatWidth;
            }else{
                newHatWidth=hatWidth/hatHeight*newHatHeight;
            }
        }
        ctx.drawImage(img, 0, 0, newHatWidth, newHatHeight);
        makeOpponent();
    }
    img.src = "images/"+mySVG+".svg";
    
}

function drawPlayer2(i, c){
    var can = document.getElementById(c);
    var ctx = can.getContext('2d');
    ctx.clearRect(0, 0, can.width, can.height);
    
    var img = new Image();
    
    img.onload = function() {
        var hatWidth = img.width;
        var hatHeight = img.height;
        var newHatWidth = can.width;
        var newHatHeight = can.height;
        
        if(hatWidth!==hatHeight){
            if(hatWidth>hatHeight){
                newHatHeight=hatHeight/hatWidth*newHatWidth;
            }else{
                newHatWidth=hatWidth/hatHeight*newHatHeight;
            }
        }
        ctx.drawImage(img, 0, 0, newHatWidth, newHatHeight);
    }
    img.src = "images/"+i+"2.svg";
    
}


function areYouReady(str){
    confirm(str);
}

function startGame(divID){
    document.getElementById(divID).innerHTML = '<select id="myPlayer" onchange="drawPlayer()">'+playerType+'</select>';
}

function playON2(age, s1, s2, divID){
    if(age > 40){
        document.getElementById(divID).innerHTML = '<a href="#" onclick="startGame(\''+divID+'\')">'+s2+'</a>';
    }else{
        document.getElementById(divID).innerHTML = '<a href="#" onclick="startGame(\''+divID+'\')">'+s1+'</a>';
    }
}

function playON(s1, s2, divID){
    if(age > 40){
        document.getElementById(divID).innerHTML = '<a href="#" onclick="startGame(\''+divID+'\')">'+s2+'</a>';
    }else{
        document.getElementById(divID).innerHTML = '<a href="#" onclick="startGame(\''+divID+'\')">'+s1+'</a>';
    }
}


function howOld(){
    //what is the "scope" of age and why???
    var age = prompt("What's your age");
    return age;
}

