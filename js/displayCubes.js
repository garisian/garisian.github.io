$(window).load(function()
{
		//makeCube(50, 50, "squareStructure-1", "cube-1");
	makeCubes();
	moveCubes();
});

function moveCubes()
{
	var pos = 0;

	var id = setInterval(frameIncrement, 10);

	function frameIncrement()
	{
		var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
		var height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

		var childDivs = document.getElementById('cubeBackground').children;
		for( i=0; i< childDivs.length; i++ )
		{
			var childDiv = childDivs[i];
			var temp = document.getElementById(childDiv.id);
		    style = window.getComputedStyle(temp);
	    	var widthChange = getWidthChange(width, temp.offsetLeft);
		    // Slowly increment the cube to fall down 
			if(temp.offsetLeft > width)
			{
				deleteCube(childDiv.id);
			}
			if(temp.offsetTop > height)
			{
				temp.style.top = 0;
				// Deletes the child once it hits the bottom of the page
				deleteCube(childDiv.id);
			}
			else 
			{
				temp.style.top = temp.offsetTop + 5;
			}
		}
	}
}

function getWidthChange(width, offset)
{
	var ratio = (offset/width).toFixed(2);
	var returnChange = 0;

	if(ratio < 0.5)
	{
		return -1*returnChange;
	}
	return returnChange;
}

function deleteCube(cubeID)
{
 	var elem = document.getElementById(cubeID);
 	elem.parentElement.removeChild(elem);
}

function makeCubes()
{	
	var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var currentVal = 1;
	window.setInterval(function(){
		var startWidth = Math.floor(Math.random() * width);
		makeCube(startWidth, 0, "squareStructure-"+currentVal, "cube-"+currentVal);
		currentVal++;	
	}, 100);
}

function makeCube(xCoordinate, yCoordinate, outerStructureName, cubeStructureName)
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