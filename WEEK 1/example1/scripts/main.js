var myHeading = document.querySelector('h1');

	myHeading.textContent = 'Hello World!';

//length of objects, in this case the letters including spaces
//alert(myHeading.textContent.length);

//0 calls H, 0 is always the first element
//alert(myHeading.textContent[0]);

//var myContent = document.querySelector('.content');

//var iceCream = 'jamoca almond fudge';

	// if(iceCream==='chocolate') {
	// 	myContent.textContent = 'Yay, I love chocolate ice cream!';
	// } 

	// else {
	// 	myContent.textContent = 'Awwww, but chocolate is my favorite...';
	// }



// var person = {

// 	firstName: "John",
// 	lastName : "Doe",
// 	id : 5566,
// 	fullName : function() {return this.firstName + " " + this.lastName;}

// };

// document.getElementById("demo").innerHTML = person.fullName();


//CREATING FUNCTIONS

// function multiply(num1,num2) {
// 	var result = num1 * num2;
// 	return result;
// }

// document.getElementById("demo").innerHTML = multiply(4,5);

//USING EVENTS

function changeImage(myImage, aImg, bImg) {
var mySrc = myImage.getAttribute('src');
	if(mySrc === aImg) {
		myImage.setAttribute ('src',bImg);
	} 
	else {
		myImage.setAttribute ('src',aImg);
	}
}

var myFox = document.getElementById('foxlogo');
var imageA = 'images/firefox-icon.png';
var imageB = 'images/firefox2.png';

myFox.onclick = function() {
	changeImage(myFox, imageA, imageB)
};





