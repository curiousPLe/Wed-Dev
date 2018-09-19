
var numMode = 6;
var colorList = [];
var pickedColor;
var boxes = document.querySelectorAll(".square");
var displaySpanColor = document.querySelector("#spanSelectedColor");
displaySpanColor.textContent = pickedColor;
var messageDisplay = document.querySelector("#gameMessage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();



//FUNCTIONS LIBRARY
function init(){
	// mode buttons event listeners
	setUpGameMode();
	// click square
	clickSquare();
	reset();
	resetButton.addEventListener("click",function(){
		reset();
	})
}

function setUpGameMode(){
	for (var i=0; i<modeButton.length; i++){
	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numMode = 3: numMode = 6;
		reset();
		});
	}
}
function clickSquare(){
	for(var i = 0; i < boxes.length; i++){
	boxes[i].addEventListener("click",function(){
			if(this.style.backgroundColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeCorrectColor();
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}	
		})
	}
}

function reset(){
	colorList = generateRandomColor(numMode);
	pickedColor = pickColorList();
	displaySpanColor.textContent = pickedColor;
	for(var i = 0; i < boxes.length; i++){
		if(colorList[i]){
			boxes[i].style.display="block";
			boxes[i].style.backgroundColor = colorList[i];
		}else{
			boxes[i].style.display="none";
		}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	}
}

function generateRandomColor(numMode){
	listColorArray = [];
	listColorArray.length = numMode;
	for (var i=0; i<listColorArray.length;i++){
		listColorArray[i] = generateColor();
	}
	return listColorArray;
}

function generateColor(){
	var random1 = Math.floor(Math.random()*256);
	var random2 = Math.floor(Math.random()*256);
	var random3 = Math.floor(Math.random()*256);
	return "rgb(" + random1 + ", " + random2 +", " + random3+ ")"
}

function pickColorList(){
	var pickRandom = Math.floor(Math.random()*colorList.length);
	return colorList[pickRandom];
}

function changeCorrectColor(){
	//loop through all boxes and change color when correct
	for(var i = 0; i < boxes.length; i++){
		boxes[i].style.backgroundColor = pickedColor;
	}
}
