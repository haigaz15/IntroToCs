//1 && 2
const createBoxes = function(count, canvasWidth, canvasHeight) {
	const colorArray = ['#0be5da', '#d110ef', '#350fef','#f45900','#efdd10','#27db39','#70c119'];
	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	context.fillStyle = "orange"
	context.fillRect(0,0,canvas.width,canvas.height)

	const rand = function(num) {
           return Math.floor(Math.random() * num) + 1;
	};
	for(let i = 0; i < count;i++) {
		const a = [{ 
			x:rand(canvasWidth-60),
			y:rand(canvasHeight-33),
			width: 50,
			height: 50,
			xDelta: 1,
			yDelta: 1,
			speed: 5,
			color: colorArray[rand(7) - 1],
			draw: function() {
					context.fillStyle = this.color;
					context.fillRect(this.x, this.y, this.width, this.height);
			},
			update: function() {
				if(this.x + 40 >= canvas.width) {
					this.xDelta *= -1;
				}
				if(this.x <= 0)	{
					this.xDelta *= -1;
				}
				if(this.y  >= canvas.height) {
					this.yDelta *= -1;
				} 
				if(this.y <= 0)	{
					this.yDelta *= -1;
				}


				context.clearRect(this.x, this.y, this.width, this.height);
				this.x += this.xDelta * this.speed;
				this.y += this.yDelta* this.speed;			
				context.fillRect(this.x, this.y, this.width, this.height);

			}
		}]
    const draw = function(){
       	for(let m=0; m<a.length; m++){
       	obj = a[m].draw();
     }
    }
    const update = function(){
      	for(let m=0; m<a.length; m++){
      	obj = a[m].update();
     }
    }
    const loop = function() {
    	draw();
    	update();
    	requestAnimationFrame(loop)
      }
      loop();
    };

};
createBoxes(8,1000,800);
