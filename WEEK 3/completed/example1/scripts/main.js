var myHeading = document.querySelector('h1');
myHeading.textContent='Hello World!';

//alert(myHeading.textContent[11]);

//alert(5+7*3/36);
/*var myContent = document.querySelector('.content');

var iceCream = 'jamoca almond fudge';
if(iceCream==='chocolate'){
	myContent.textContent='Yay, chocolate is my favourite';
}else{
	myContent.textContent='Awww... But I love chocoalte...';
}*/

/*var person = {
	firstName : 'John',
	lastName : 'Doe',
	id : 5556,
	fullName(){return this.firstName+ " "+ this.lastName;}
}
document.getElementById('demo').innerHTML =person.fullName()*/

/*function multiply(num1, num2){
	var result = num1 * num2;
	return result;
}
alert(multiply(20,20));*/


function changeImage(myImage, aImg, bImg) { 	
var mySrc = myImage.getAttribute('src'); 	
if(mySrc === aImg) { 		
	myImage.setAttribute ('src',bImg); 	
} else { 		
	myImage.setAttribute ('src',aImg); 	
} 
}

var myFox = document.getElementById('foxlogo'); 
var imageA = 'images/firefox-icon.png'; 
var imageB = 'images/firefox2.png';

myFox.onclick = function() {
	changeImage(myFox, imageA, imageB);
};
