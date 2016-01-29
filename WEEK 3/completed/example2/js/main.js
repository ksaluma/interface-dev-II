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

var myFox = document.getElementById('picture1'); 
var myCat = document.getElementById('picture2'); 
var myCow = document.getElementById('picture3'); 

var imageA = 'images/grumpy1.jpg'; 
var imageB = 'images/grumpy2.jpg';

var imageC = 'images/grumpy3.jpg'; 
var imageD = 'images/grumpy4.jpg';

var imageE = 'images/grumpy5.jpg'; 
var imageF = 'images/grumpy6.jpg';

myFox.onclick = function() {
	changeImage(myFox, imageA, imageB);
};

myCat.onclick = function() {
	changeImage(myCat, imageC, imageD);
};

myCow.onclick = function() {
	changeImage(myCow, imageE, imageF);
};
