$(window).load(function(){

	// List of all the categories displayed on main page
	var categories = [
	    "github",
	    "resume",
	    "sports",
	    "contact me",
	    "how it's done",
	    "garisian kana",
	    "garisian kana"
	];
	// Dictionary count of each letter in categories list
	var dict = new Object();


	// Create dictionary of each char and their occurance rate
	var arrayLength = categories.length;
  	for (var categoryNum = 0; categoryNum < arrayLength; categoryNum++) 
  	{
		var charPosition = categories[categoryNum].length;
		while (charPosition--) 
		{
			if(!(categories[categoryNum][charPosition] in dict))
	  		{
	  			dict[categories[categoryNum][charPosition]]=1;
	  		}
	  		else
	  		{
	  			dict[categories[categoryNum][charPosition]]=dict[categories[categoryNum][charPosition]]+1;
	  		}
		}
	}

	// Print all occurances
	for(var key in dict){
	    //alert('key is : \"' + key + '\" and value is : \"'+ dict[key])+"\"";
	}

	myMove();


 });

function myMove() 
{
	var elem = document.getElementById("myAnimation");   
	var pos = 0;
	var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

	var id = setInterval(frame, 10);
	var xDirection = 1;
	var xCoord = 0;
	var yCoord = 0;
	var yDirection = 1;

	function frame() {
		// Deal with the corner/edge cases
		if (yCoord == height - 50) 
		{
			// clearInterval(id);
			yDirection = 0;
		} 
		if (yCoord == 0) 
		{
			// clearInterval(id);
			yDirection = 1;
		} 
		if (xCoord == width - 50) 
		{
			// clearInterval(id);
			xDirection = 0;
		} 
		if (xCoord == 0) 
		{
			// clearInterval(id);
			xDirection = 1;
		} 
		// Increment the image
		if(yDirection == 1)
		{
			yCoord++; 
		}
		else
		{
			yCoord--; 
		}
		if(xDirection == 1)
		{
			xCoord++; 
		}
		else
		{
			xCoord--; 
		}
		elem.style.top = yCoord + 'px'; 
		elem.style.left = xCoord + 'px'; 
	}
}

