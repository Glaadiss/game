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
	this.r = 50
	this.velocity = 0.7;
	this.limit = 900;
	this.a = Math.random() * 1 + 0.1;
	this.b = Math.random() * 1 + 0.1;
	this.rotate = 1;

//logika sterująca obiektem
this.update = function(delta) {
	this.y += this.velocity * delta * this.a;
	this.x += this.velocity * delta * this.b;
	if (this.y >= this.limit-300 || this.y <= 0){
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

	ctx.save();
	ctx.translate(this.x+ this.r/2, this.y+this.r/2)
	ctx.rotate(this.rotate * Math.PI/180);
	this.rotate++;
	ctx.translate(-1*(this.x+this.r/2), -1*(this.y+this.r/2));
	ctx.fillStyle = getRandomColor();	
	ctx.fillRect(this.x, this.y, this.r, this.r);
	ctx.restore();

	}
}