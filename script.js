
window.onload = function(){

		var canvas = document.getElementById('qwe');
		canvas.width = 1100;
		canvas.height = 830;
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

		var	left, right, up, down	= false;	
		window.addEventListener('keydown',move,false);
		window.addEventListener('keyup', stop, false);	
		function move(event)	{	
		var	keyCode	= event.keyCode;	

			switch	(keyCode)	{	
				
			
				/*
				case 37 && 40 :
				left	= true;
				right	= false;	
				up		= false;
				down	= true;	
				break;
				case 39 && 38 :
				left	= false;
				right	= true;	
				up		= true;	
				down	= false;	
				break;
				case 39 && 40 :
				left	= false;
				right	= true;	
				up		= false;
				down	= true;	
				break;
				*/
				case 37 :	//lewo
				left	= true;
				right	= false;	
				up		= false	
				down	= false;	
				break;	
				case 38:	//góra
				up		= true;	
				down	= false;	
				right	= false;	
				left	= false;	
				break;	
				case 39:	//prawo
				up		= false;	
				down	= false;	
				right	= true;	
				left	= false;	
				break;	
				case 40:	//dół
				up		= false;	
				down	= true;	
				right	= false;	
				left	= false;
				break;	
				case 37 && 38 :
				left	= true;
				right	= false;	
				up		= true;
				down	= false;	
				keycode = false;
				break;
				
			}	
			event.preventDefault();	
			return false;
		}	

		function stop(event)	{	
				up		= false;	
				down	= false;	
				right	= false;	
				left	= false;
				event.preventDefault();	
		}

		function update(delta) {
			for(var i = 0; i<tab.length; i++){

			if(up	&&	tab[i].y >= 5){
			tab[i].y -= 5;	
	
			}	
			if(down	&&	tab[i].y <=canvas.height-15){
			tab[i].y += 5;
			}
			if(left	&&	tab[i].x >= 5){
			tab[i].x-= 5;	
			}	
			if(right &&	tab[i].x <=canvas.width-15){
			tab[i].x += 5;
			}	
			tab[i].update(delta);
			}
			for(var i = 0; i<tab2.length; i++){
		
			if(up	&&	tab2[i].y >= 10){
			tab2[i].y -= 5;	
			}	
			if(down	&&	tab2[i].y <=canvas.height-20){
			tab2[i].y += 5;
			}
			if(left	&&	tab2[i].x >= 10){
			tab2[i].x-= 5;	
			}	
			if(right &&	tab2[i].x <=canvas.width-20){
			tab2[i].x += 5;
			}	
			tab2[i].update(delta);
			}
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