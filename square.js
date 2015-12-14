function getRandomColor() {
		    var letters = '0123456789ABCDEF'.split('');
		    var color = '#';
		    for (var i = 0; i < 6; i++ ) {
		        color += letters[Math.floor(Math.random() * 16)];
		    }
		    return color;
		}
	
function random()
		{
			x = Math.floor((Math.random() * 200) + 30);;
			return x;
		}

function Square() {
	this.x = random();
	this.y = random();
	this.velocity = 0.3;
	this.limit = 600;
	this.a = Math.random() * 1 + 0.1;
	this.b = Math.random() * 1 + 0.1;

//logika sterująca obiektem
this.update = function(delta) {
	this.y += this.velocity * delta * this.a;
	this.x += this.velocity * delta * this.b;
	if (this.y >= this.limit || this.y <= 0){
	this.velocity = -this.velocity;
	this.b*=-1;
	}
	if (this.x >= this.limit || this.x <= 0){
	this.velocity = -this.velocity;
	this.a*=-1;
	}
}

//funkcją rysująca obiekt
this.draw = function(ctx) {
	ctx.translate(this.x+75, this.y+75)
	ctx.rotate(Math.PI/180);
	ctx.translate(-this.x-75, -this.y-75)
	ctx.fillStyle = getRandomColor();
	ctx.fillRect(this.x, this.y, 50, 50);
	}
}