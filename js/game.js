//----------------------------IMAGES AND CANVAS--------------------------------//

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "images/hero.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "images/monster.png";

// Spider image
var spiderReady = false;
var spiderImage = new Image();
spiderImage.onload = function () {
	spiderReady = true;
};
spiderImage.src = "images/spider.png";



//----------------------------IMAGES AND CANVAS END--------------------------------//



// ----------------------------GAME OBJECTS------------------------------------------//


// Game objects
var hero = {
	speed: 256, // movement in pixels per second
    health: 100,
    attack: 15
};
var monster = {
    health: 75,
    attack: 10
};
var spider = {
    health: 500,
    attack: 50
}

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


/*var renderBoss = function(){
		ctx.drawImage(spiderImage, 32, 32);
}*/


var bossBattleInitiate = function(){
    hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
    //renderBoss();
    //ctx.fillText("Boss health: " + spider.health, 32, 85);
}
  


// Reset the game when the player successfully defeats a monster
var reset = function () {
    if (hero.health >= 309){
        bossBattleInitiate();
        } else {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	// Throw the monster somewhere on the screen randomly & resets it's health
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
    monster.health = 75;
            }
};

// On player death
var death = function(){
    hero.attack = 15;
    hero.health = 100;
    monster.health = 75;
}

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
	}

// Battle System   
var battleInitiate = function(){
    if (hero.health < monster.attack){
        console.log("You have been slain!")
        death();
        reset();
    }
    else if (hero.attack < monster.health){
        --monster.health;
        --hero.health;
        console.log("You fight the monster");
    } else if (hero.attack >= monster.health){
       console.log("You hit the monster and kill it!"); 
       console.log("You level up!")
        hero.attack+=5;
        hero.health+=50;
       reset();
    }
}

  
// Is player touching a monster?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
        && hero.health < 310
	) {
		battleInitiate();
	} /*else if (hero.health >= 300){
        bossBattleInitiate(); //Checks if player is ready for boss
    }*/
};

// ----------------------------GAME OBJECTS END------------------------------------------//



// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
    
    
    //Here is the code that I added
    if (spiderReady && hero.health >= 309) {
		ctx.drawImage(spiderImage, 50, 50);
        document.getElementById("playerinfo").innerHTML = " test " + "<br>";
        document.getElementById("playerinfo").innerHTML += " test ";
        ctx.fillText("Boss health: " + spider.health, 32, 98);
        ctx.clearRect()
	}
    

	// Stats
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
    ctx.fillText("Player health: " + hero.health, 32, 32);
    ctx.fillText("Monster health: " + monster.health, 32, 65);
    /*ctx.fillText("Inventory: ", 330, 32);
    ctx.fillText("Health Potion", 330, 65);*/
};


// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again 
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Play
var then = Date.now();
reset();
main();
