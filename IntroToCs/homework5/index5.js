
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 600;

const background = new Image();
        background.src = "https://cdn3.f-cdn.com/contestentries/71989/10040340/53550fd04bb48_thumb900.jpg"
        

const  goodGuyImg = new Image();
        goodGuyImg.src = 'https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png';

const badGuyImg = new Image();
        badGuyImg.src = 'http://clipart-library.com/images/BcaE578Xi.gif';
 

const gameData = {
	hero: {
		x:40,
		y:400 ,
		xDelta: 0,
		yDelta: 0,
		width: 100,
		height: 100,
		gravity: 2,
		image: goodGuyImg,
		draw: function() {
         context.drawImage(this.image,this.x,this.y,this.width,this.height)
		 },
		update: function() {
         
         this.x += this.xDelta
         this.y = this.y + this.yDelta * this.gravity

		 }
	},
	  
	 badGuys: [
		   {
			x: canvas.width -260,
			y: 400,
			xDelta: -1,
			yDelta: -1,
			width: 100,
			height: 100,
			image: badGuyImg,
			draw: function() { 
				context.drawImage(this.image,this.x,this.y,this.width,this.height)
			 },
			update: function() { 
             if(this.x <=0 ){
             	this.xDelta = 4
               }
             if(this.y <=0){
               	this.yDelta = 4
               }

             if(this.x >= canvas.width - 353 && this.y >= canvas.height -159 ){
             	this.xDelta = -4
             	this.yDelta = -4
             }
             this.x += this.xDelta
             this.y += this.yDelta 
			 }
		},
		
        {
        	x: canvas.width -300,
			y: 400,
			xDelta: -2,
			yDelta: 0,
			width: 100,
			height: 100,
			image: badGuyImg,
			draw: function() { 
				context.drawImage(this.image,this.x,this.y,this.width,this.height)
			 },
			update: function() { 
            if(this.x <= 0){
            	this.xDelta = 10
            }
            if(this.x >= canvas.width - 100){
            	this.xDelta = -7
            }

            this.x += this.xDelta
             //y = yDelta + 1
			 }
        },
        
        {
        	x: canvas.width -300,
			y: 400,
			xDelta: -1,
			yDelta: -1,
			width: 100,
			height: 100,
			image: badGuyImg,
			draw: function() { 
				context.drawImage(this.image,this.x,this.y,this.width,this.height)
			 },
			update: function() { 
             //x = xDelta + 1
             if(this.y <= 0){
               this.yDelta = 10
             } else if(this.y >= canvas.height-100){
             	this.yDelta = -7
             }

               this.y += this.yDelta 
			 }
        }

   ]
 };

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
document.addEventListener('keydown', function(event) {
	if(event.keyCode === rightKey) {
        gameData.hero.xDelta = 4
        }
    if(event.keyCode === leftKey){
        gameData.hero.xDelta = -4
        }
    if(event.keyCode === upKey){
        gameData.hero.yDelta = -4
   	    }
    if(event.keyCode === downKey){
   	    gameData.hero.yDelta = 4
   	    }
}, false);
document.addEventListener("keyup", function(event) {
      if(event.keyCode === rightKey || event.keyCode === 37 ) {
        gameData.hero.xDelta = 0
        }
      if(event.keyCode === 38 || event.keyCode === 40 ){
        gameData.hero.yDelta = 0
        }
    
},false);

 const draw = function() {
 	context.drawImage(background,0,0,canvas.width,canvas.height);
	gameData.hero.draw();
   	gameData.badGuys[0].draw();
	gameData.badGuys[1].draw();
	gameData.badGuys[2].draw();
 }
const update = function(){
    gameData.hero.update();
	gameData.badGuys[0].update();
	gameData.badGuys[1].update();
	gameData.badGuys[2].update();
}
const loop = function(){
	draw();
	update();
	requestAnimationFrame(loop)

};
loop();

