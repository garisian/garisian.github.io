$(window).load(function()
{
	//makeCube(50, 50, "squareStructure-1", "cube-1");
	makeCubes();
});

function makeCubes()
{	
	var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

	makeCube(width/2, height/2, "squareStructure1", "cube1",0, 400, 0,400);
	makeCube(width/2, height/2, "squareStructure2", "cube2",0, 400, 400,0);
	makeCube(width/2, height/2, "squareStructure3", "cube3", -400, 0, 400,0);
	makeCube(width/2, height/2, "squareStructure4", "cube4",-400, 0, 0, 400);
}

function makeCube(xCoordinate, yCoordinate, outerStructureName, cubeStructureName,xStart,xEnd,yStart,yEnd)
{
	// Create the css for the outer Square
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = "#"+outerStructureName+" { clip: rect("+(yStart*-1)+"px, "+xEnd+"px, "+yEnd+"px, "+xStart+"px);position: absolute;left:"+xCoordinate+"px;top:"+yCoordinate+"px;perspective: 1500px; }";
	document.getElementsByTagName('head')[0].appendChild(css);

	// Create the css for the Cube
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = "."+cubeStructureName+" { transform-style: preserve-3d; animation: rotate 30s linear infinite; }";
	document.getElementsByTagName('head')[0].appendChild(css);


	// Create the new div Outer Container of the cube
	var iDiv = document.createElement('div');
	iDiv.id = outerStructureName;
	document.getElementById('cubeBackground').appendChild(iDiv);

	// Create the new div Cube
	var iDiv = document.createElement('div');
	iDiv.id = cubeStructureName;
	iDiv.className = cubeStructureName;
	document.getElementById(outerStructureName).appendChild(iDiv);

	// Create all 6 sides of cube
	var iDiv = document.createElement('div');
	iDiv.className = "face";
	iDiv.id = 'front';
	document.getElementById(cubeStructureName).appendChild(iDiv);

	var iDiv = document.createElement('div');
	iDiv.className = "face";
	iDiv.id = 'right';
	document.getElementById(cubeStructureName).appendChild(iDiv);

	var iDiv = document.createElement('div');
	iDiv.className = "face";
	iDiv.id = 'back';
	document.getElementById(cubeStructureName).appendChild(iDiv);

	var iDiv = document.createElement('div');
	iDiv.className = "face";
	iDiv.id = 'left';
	document.getElementById(cubeStructureName).appendChild(iDiv);

	var iDiv = document.createElement('div');
	iDiv.className = "face";
	iDiv.id = 'top';
	document.getElementById(cubeStructureName).appendChild(iDiv);

	var iDiv = document.createElement('div');
	iDiv.className = "face";
	iDiv.id = 'bottom';
	document.getElementById(cubeStructureName).appendChild(iDiv);	
}