$(window).load(function()
{
	createCubes();
	shootCubes();
});

function createCubes()
{
	var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var currentVal = 1;
	window.setInterval(function(){
		var cubeType = Math.floor((Math.random() * 4) + 1);
		var startWidth = Math.floor(Math.random() * width);
		makeCube(startWidth, 0, "shooting-cube-Structure-"+currentVal, "shooting-cube-"+currentVal);
		currentVal++;	
	}, 2000);
}

function shootCubes()
{

}


function makeCube(xCoordinate, yCoordinate, outerStructureName, cubeStructureName, location)
{
	// Create the css for the outer Square
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = "#"+outerStructureName+" { position: absolute;left:"+xCoordinate+"px;top:"+yCoordinate+"px;perspective: 1500px; }";
	document.getElementsByTagName('head')[0].appendChild(css);

	// Create the css for the Cube
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = "."+cubeStructureName+" { transform-style: preserve-3d; animation: rotate 30s linear infinite; }";
	document.getElementsByTagName('head')[0].appendChild(css);


	// Create the new div Outer Container of the cube
	var iDiv = document.createElement('div');
	iDiv.id = outerStructureName;
	document.getElementById('shootingCubeBackground').appendChild(iDiv);

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