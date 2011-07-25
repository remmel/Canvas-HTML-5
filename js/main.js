var ts = new Tileset("basique.png");
var map = new Map("premiere");

window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	ts.dessinerTile(1, ctx, 10, 10);
	ts.dessinerTile(5, ctx, 50, 10);
	ts.dessinerTile(6, ctx, 90, 10);
	ts.dessinerTile(7, ctx, 130, 10);
	
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
	
	map.dessinerMap(ctx);
}

function testImage(canvas){
	var smiley = new Image();
	smiley.src = "http://www.siteduzero.com/Templates/images/smilies/heureux.png";
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = 'blue';
	ctx.fillRect(10, 10, 100, 50);
	
	ctx.strokeStyle = 'red';
	ctx.strokeRect(75, 75, 50, 50);
	
	ctx.drawImage(smiley, 200, 10);
	ctx.drawImage(smiley, 200, 30, 100, 50); 
	ctx.drawImage(smiley, 0, 0, 10, 19, 200, 100, 10, 19);
}