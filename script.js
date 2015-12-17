
window.onload = function(){

		var canvas = document.getElementById('qwe');
		canvas.width = 1100;
		canvas.height = 830;
		var c = canvas.getContext('2d');
		
		var tab = [];
		var tab2 = [];
		var tab3 = [];


			window.addEventListener('keydown', function(event) {
  			switch (event.keyCode) {
			   
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
		window.addEventListener('keydown', move ,false);
		window.addEventListener('keyup', stop, false);	
		
		function move(event)	{	
			var keyCode = event.keyCode; 
			switch	(keyCode)	{
				case 67: 
				var kolko = new Circle();
				tab2.push(kolko)
			    break;	
				case 37 :	//lewo
				left	= true;
				right	= false;		
				break;	
				case 38:	//góra
				up		= true;	
				down	= false;		
				break;	
				case 39:	//prawo	
				right	= true;	
				left	= false;	
				break;	
				case 40:	//dół	
				down	= true;	
				up = false;
				break;	
				case 82: //r
				for(var i = 0; i<tab3.length; i++)
				{
				tab3[i].velocity +=0.2;
				}
				for(var i = 0; i<tab.length; i++)
				{
				tab[i].velocity +=0.2;
				}
				for(var i = 0; i<tab2.length; i++)
				{
				tab2[i].velocity +=0.2;
				}
				break;
				case 69: //e
					for(var i = 0; i<tab3.length; i++)
				{
				tab3[i].velocity =0;
				}
				for(var i = 0; i<tab.length; i++)
				{
				tab[i].velocity =0;
				}
				for(var i = 0; i<tab2.length; i++)
				{
				tab2[i].velocity =0;
				}
				break;
				
			}	
			event.preventDefault();	
		}	

		function stop(event)	{
			var keyCode2 = event.keyCode;
				switch	(keyCode2)	{	
				case 37 :	//lewo
				left	= false;		
				break;	
				case 38:	//góra
				up		= false;			
				break;	
				case 39:	//prawo	
				right	= false;		
				break;	
				case 40:	//dół	
				down	= false;	
				break;	
				
			}	
				event.preventDefault();	
		}

		
		window.addEventListener('click', click,false);
		function click(event){
			var x = event.pageX;
			var y = event.pageY;
			for(var i = 0; i<tab.length; i++){
				if (tab[i].x - 10 <= x && (tab[i].x + tab[i].r + 10) >= x &&  tab[i].y - 10 <= y && (tab[i].y + tab[i].r + 10) >= y){
				tab[i].play = false;	
				}
			}
			for(var i = 0; i<tab2.length; i++){
				if (tab2[i].x - 10 <= x && (tab2[i].x + tab2[i].r + 10) >= x &&  tab2[i].y - 10 <= y && (tab2[i].y + tab2[i].r + 10) >= y){
				tab2[i].play = false;	
				}
			}
			for(var i = 0; i<tab3.length; i++){
				if (tab3[i].x  - 10 <= x && (tab3[i].x + tab3[i].r + 10) >= x &&  tab3[i].y - 10 <= y && (tab3[i].y + tab3[i].r + 10) >= y){
				tab3[i].play = false;	
					}
			}
		}


	
		window.addEventListener('contextmenu',function(e)	{	
				var	x	=	e.pageX;	
				var	y	=	e.pageY;	
				var keyCode3 = e.which;
				var kwadrat = new Square2(x,y);
				tab3.push(kwadrat);				
		},false);

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

			for(var i = 0; i<tab3.length; i++){
		
			if(up	&&	tab3[i].y >= 10){
			tab3[i].y -= 5;	
			}	
			if(down	&&	tab3[i].y <=canvas.height-20){
			tab3[i].y += 5;
			}
			if(left	&&	tab3[i].x >= 10){
			tab3[i].x-= 5;	
			}	
			if(right &&	tab3[i].x <=canvas.width-20){
			tab3[i].x += 5;
			}	
			tab3[i].update(delta);
			}

		}
		function draw() {

	
			c.clearRect(0, 0, canvas.width, canvas.height);
			for(var i = 0; i<tab.length; i++){
			if(tab[i].play){
			tab[i].draw(c);	
			}	
			}	
			for(var i = 0; i<tab2.length; i++){
			if(tab2[i].play){
			tab2[i].draw(c);	
			}	
			}	
			for(var i = 0; i<tab3.length; i++){
			if(tab3[i].play){
			tab3[i].draw(c);	
			}	
			}
		}
		MainLoop.setUpdate(update).setDraw(draw).start();


}