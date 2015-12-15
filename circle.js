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
			x = Math.floor((Math.random() * 500) + 30);;
			return x;
		}


		

		function Circle() {
			this.x = random();
			this.y = random();
			this.r = Math.floor((Math.random() * 20) + 10);;
			this.velocity = 1;
			this.limit = 800;
			this.a = Math.random() * 1 + 0.1;
			this.b = Math.random() * 1 + 0.1;
			
			this.update = function(delta) {
				this.y += this.velocity * delta * this.a;
				this.x += this.velocity * delta * this.b;
				if (this.y >= this.limit || this.y <= 25){
				this.velocity = -this.velocity;
				this.b*=-1;
				}
				if (this.x >= this.limit || this.x <= 25){
				this.velocity = -this.velocity;
				this.a*=-1;
				}
			}

			//funkcją rysująca obiekt
			this.draw = function(ctx) {	
			ctx.beginPath();
			ctx.fillStyle = getRandomColor();
			ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
			}
	}
		
