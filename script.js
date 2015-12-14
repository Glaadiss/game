
window.onload = function(){

		var canvas = document.getElementById('qwe');
		canvas.width = 1000;
		canvas.height = 800;
		var c = canvas.getContext('2d');
		
		var tab = [];
		var tab2 = [];

			window.addEventListener('keydown', function(event) {
  			switch (event.keyCode) {
			    	case 67: 
				var kolko = new Circle();
				kolko.draw(c);
				tab2.push(kolko)
			    break;
			       case 83: 
				var s= new Square();
				tab.push(s)
			    break;
			       case 84: 
				var trojkat = new Triangle();
				trojkat.draw(c);
			    break;
  			}
			}, false);

		function update(delta) {
			for(var i = 0; i<tab.length; i++)
			tab[i].update(delta);
			for(var i = 0; i<tab2.length; i++)
			tab2[i].update(delta);
		}
		function draw() {
			c.clearRect(0, 0, canvas.width, canvas.height);
			for(var i = 0; i<tab.length; i++)
			tab[i].draw(c);
			for(var i = 0; i<tab2.length; i++)
			tab2[i].draw(c);
		}
		MainLoop.setUpdate(update).setDraw(draw).start();


}