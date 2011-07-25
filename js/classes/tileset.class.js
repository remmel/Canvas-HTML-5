

function Tileset(url) {
	this.image = new Image();
	this.image.tilesetRef = this;
	this.image.onload = function() {
		if(!this.complete) 
			throw "Erreur de chargement du tileset nomm� \"" + url + "\".";
		this.tilesetRef.width = this.width / 32;
		console.log("Onload... " + this.tilesetRef.width);
	}
	this.image.src = "tilesets/" + url;
	
	this.funcs = new Array();
	
	
	// M�thode de dessin du tile num�ro "numero" dans le contexte 2D "context" aux coordonn�es x et y
	this.dessinerTile = function(numero, context, xDestination, yDestination) {

		var xSourceEnTiles = numero % this.width;
		if(xSourceEnTiles == 0) xSourceEnTiles = this.width;
		var ySourceEnTiles = Math.ceil(numero / this.width);
		var xSource = (xSourceEnTiles - 1) * 32;
		var ySource = (ySourceEnTiles - 1) * 32;
		context.drawImage(this.image, xSource, ySource, 32, 32, xDestination, yDestination, 32, 32);
		console.log("dessiner tile" + this.width);
	}
	
}