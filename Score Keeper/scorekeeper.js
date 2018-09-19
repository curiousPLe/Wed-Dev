var player1Button = document.querySelector("#player1");
var player2Button = document.querySelector("#player2");
var resetButton = document.querySelector("#reset");
var span1 = document.querySelector("#span1Display");
var span2 = document.querySelector("#span2Display");
var setEndScore = document.querySelector("input[type='number']");
var spanSetEndScore = document.querySelector("p span");
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
var endScore = 5;

setEndScore.addEventListener("change",function(){
	resetGame();
	spanSetEndScore.textContent = this.value;
	endScore = Number(this.value);
})

player1Button.addEventListener("click",function(){
	if (!gameOver){
		player1Score ++;
		span1.textContent = player1Score; 
		if (player1Score === endScore){
			gameOver = true;
			span1Display.classList.add("winner");
		}
	}
})
player2Button.addEventListener("click",function(){
	if (!gameOver){
		player2Score ++;
		span2.textContent = player2Score; 
		if (player2Score === endScore){
			gameOver = true;
			span2Display.classList.add("winner");
		} 
	}
})
resetButton.addEventListener("click",function(){
	resetGame();
})

function resetGame(){
	gameOver = false;
	span1Display.classList.remove("winner");
	span2Display.classList.remove("winner");
	player1Score = 0;
	player2Score = 0;
	span1.textContent = player1Score;
	span2.textContent = player2Score;
}