const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 600;
// all images are retrieved from the internet 
const background = new Image();
        background.src = "./images/background2.jpg";

imgArray = []

imgArray[0] = new Image();
imgArray[0].src = './images/1.png';

imgArray[1] = new Image();
imgArray[1].src = './images/2.png';

imgArray[2] = new Image();
imgArray[2].src = './images/3.png';

imgArray[3] = new Image();
imgArray[3].src = './images/4.png';



const obsN = new Image();
      obsN.src = "./images/pipeNorth.png";     
const obsS = new Image();
      obsS.src = "./images/pipeSouth.png";
const ground = new Image();
      ground.src = "./images/fg.png"
const ballon = new Image();
      ballon.src = "./images/Ballon.png"
const ballon2 = new Image();
      ballon2.src = "./images/Ballon2.png"      
// All Audios are retrieved from the internet  
const wingsound = new Audio("./Sounds/sfx_wing-[AudioTrimmer.com].wav");
const pointsound = new Audio("./Sounds/sfx_point.wav");
const hitsound = new Audio("./Sounds/sfx_hit.wav");
const backgroundsound = new Audio("./Sounds/backgroundSound2.mp3")

// array of pipes
pipe = []
pipe[0] = {
	x:600,
	y:0
	// add
}
// array of ballons
arballon = []
arballon[0] = {
	x:canvas.width/2,
	y:480,
	width:40,
	height:60 
}
// Yellow ballow features 
const ballonData = {
	arballon2: [ {
	x:canvas.width/2,
	y:500,
	width:40,
	height:60,
    draw: function(){
    	context.drawImage(ballon2,this.x,this.y,this.width,this.height)
    },
    update: function(){
    	this.y--
    }
  }]
}
const draw4 = function(){
   for(let k = 0; k<ballonData.arballon2.length; k++){
   	ballonData.arballon2[k].draw();
   }
}
const update4 = function(){
	for(let h = 0; h<ballonData.arballon2.length; h++){
		ballonData.arballon2[h].update();
	if(ballonData.arballon2[h].y === 150){
      ballonData.arballon2.push({
	x:Math.floor(Math.random()*1000)-300, 
	y:500,
	width:40,
	height:60,
    draw: function(){
    	context.drawImage(ballon2,this.x,this.y,this.width,this.height)
    },
    update: function(){
    	this.y--
    }
  })
	}
  }
}
const gap = 450
const constant = obsN.height + gap
 const birdData = {
	bX: 10,
    bY: 11,
    gravity: 1.86
}


const draw = function(){
    	context.drawImage(background,0,0,canvas.width,canvas.height);
    	backgroundsound.play();
          for(let i= 0; i<pipe.length; i++){
        	context.drawImage(obsN,pipe[i].x,pipe[i].y);
            context.drawImage(obsS,pipe[i].x,pipe[i].y+constant);
           pipe[i].x --;
          // .push function retrievd from the internet 
          if(pipe[i].x === 413){
          	pipe.push({
              x:600,
              y: Math.floor(Math.random()*obsN.height) - obsN.height
          	});
          }
         if(birdData.bX + 68 >= pipe[i].x && birdData.bX  <= pipe[i].x + obsN.width && birdData.bY <= pipe[i].y + obsN.height ||
          birdData.bX + 68 >= pipe[i].x && birdData.bX  <= pipe[i].x + obsN.width && 
         	birdData.bY+ 58 >= pipe[i].y + constant || birdData.bY + 58 >= canvas.height - 54) {
            location.reload();          
           }
          if(pipe[i].x  == 5){
          	score ++
            //pointsound.play();
           }
           context.drawImage(ground,0,canvas.width - 180, canvas.width,120)
          }
       }
             
// index of the imgArray 
let curImageIndex = 0;
// function animator is for flapping the wings
const animateor = function(){
	curImageIndex += 1
 if(curImageIndex === imgArray.length){
	curImageIndex = 0
   }
}

// function draw2 is for the movment of the bird 
const draw2 = function(){
          context.drawImage(imgArray[curImageIndex],birdData.bX,birdData.bY,68,58);         
          birdData.bY += birdData.gravity
              
}

// ballon feature
const ballonData2 = {
	arballon: [ {
	x:canvas.width/2 + 100,
	y:430,
	width:40,
	height:60,
    draw: function(){
    	context.drawImage(ballon,this.x,this.y,this.width,this.height)
    },
    update: function(){
    	this.y--
    }
  }]
}
const draw3 = function(){
	for(let j = 0; j<ballonData2.arballon.length; j++){
		ballonData2.arballon[j].draw();
	}
}
const update3 = function(){
	for(let m = 0; m<ballonData2.arballon.length; m++){
		ballonData2.arballon[m].update();
		if(ballonData2.arballon[m].y === 200){
			ballonData2.arballon.push({
	         x:Math.floor(Math.random()*800)-300,
	         y:430,
	         width:40,
	         height:60,
             draw: function(){
    	        context.drawImage(ballon,this.x,this.y,this.width,this.height)
             },
             update: function(){
    	        this.y--
             }
          })
		}
	}
}
let score  = 0;
const scoredrawer = function(){
	context.fillStyle = "#000";
	context.font = "30px Timesnewroman"
	context.fillText("Score: "+score,15,canvas.height - 50)
}

let time = 80
time += 10
setInterval(function(){ animateor(); }, time);

const ultimatedrawer = function(){
    draw();
    draw2();
    draw4();
    update4();
    draw3();
    update3();
    scoredrawer();
   }

document.addEventListener('keydown', function(event) {
	// upKey
	if(event.keyCode === 38){ 
		birdData.bY -= 50
		wingsound.play();
	}
    // downkey
	if(event.keyCode === 40){
		birdData.bY += 62
        wingsound.play();
	}	    
}, false);



const loop = function(){
   ultimatedrawer();
   requestAnimationFrame(loop)

};

const Start = function(){
loop();
}
	

