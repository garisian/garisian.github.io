// List of all the categories displayed on main page
var categories = [
    "a"
];


// Letter To Path List
var imageUrlsMapping = new Object();


// dictionary count of each letter in categories list
var charDict = new Object();

// list of displayed letters
var displayedLetters = [];	
var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
var height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;


/*var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
var height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

var singleLetter = {left:Math.floor(Math.random() * width- 50), top: Math.floor(Math.random() * height - 50), letter:'a', xDirection:Math.floor(Math.random() * 2), yDirection:Math.floor(Math.random() * 2), name:"letter0"};
var singleLetter2 = {left:Math.floor(Math.random() * width- 50), top: Math.floor(Math.random() * height- 50), letter:'b', xDirection:Math.floor(Math.random() * 2), yDirection:Math.floor(Math.random() * 2), name:"letter1"};
displayedLetters.push(singleLetter)
displayedLetters.push(singleLetter2)*/

$(window).load(function(){

	updateImageMapping();

	// Create dictionary of each char and their occurance rate
	var arrayLength = categories.length;
	var charNum = 0;
  	for (var categoryNum = 0; categoryNum < arrayLength; categoryNum++) 
  	{
		var charPosition = categories[categoryNum].length;
		while (charPosition--) 
		{
			if(!(categories[categoryNum][charPosition] in charDict))
	  		{
	  			charDict[categories[categoryNum][charPosition]]=1;
	  		}
	  		else
	  		{
	  			charDict[categories[categoryNum][charPosition]]=charDict[categories[categoryNum][charPosition]]+1;
	  		}
			
	  		// extract letter url
	  		var letterChar = categories[categoryNum][charPosition];
	  		var imageURL = imageUrlsMapping[categories[categoryNum][charPosition]];

			// Create an letter object and store it
			var singleLetter2 = {left:Math.floor(Math.random() * width- 50), top: Math.floor(Math.random() * height- 50), letter:letterChar, xDirection:Math.floor(Math.random() * 2), yDirection:Math.floor(Math.random() * 2), name:"letter"+charNum};
			displayedLetters.push(singleLetter2);

			// Create the css and inject it for the new div
			var css = document.createElement("style");
			css.type = "text/css";
			css.innerHTML = "#letter"+charNum+" { width: 50px;height: 50px;position: absolute;background-image: "+imageURL+";background-size: contain; }";
			document.getElementsByTagName('head')[0].appendChild(css);

			// Create the new div for the letter
			var iDiv = document.createElement('div');
			iDiv.id = 'letter'+charNum;
			document.getElementsByTagName('div')[0].appendChild(iDiv);

			displayedLetters.push(singleLetter2);

	  		charNum++;
		}
	}

	// Print all occurances
	for(var key in charDict){
	    //alert('key is : \"' + key + '\" and value is : \"'+ charDict[key])+"\"";
	}


	//document.head.appendChild(css);



	myMove();

 });

function updateImageMapping()
{
	imageUrlsMapping['a'] = "url(\"img/alphabet/a.png\")";
	imageUrlsMapping['b'] = "url(\"img/alphabet/b.png\")";
	imageUrlsMapping['c'] = "url(\"img/alphabet/c.png\")";
	imageUrlsMapping['d'] = "url(\"img/alphabet/d.png\")";
	imageUrlsMapping['e'] = "url(\"img/alphabet/e.png\")";
	imageUrlsMapping['f'] = "url(\"img/alphabet/f.png\")";
	imageUrlsMapping['g'] = "url(\"img/alphabet/g.png\")";
	imageUrlsMapping['h'] = "url(\"img/alphabet/h.png\")";
	imageUrlsMapping['i'] = "url(\"img/alphabet/i.png\")";
	imageUrlsMapping['j'] = "url(\"img/alphabet/j.png\")";
	imageUrlsMapping['k'] = "url(\"img/alphabet/k.png\")";
	imageUrlsMapping['l'] = "url(\"img/alphabet/l.png\")";
	imageUrlsMapping['m'] = "url(\"img/alphabet/m.png\")";
	imageUrlsMapping['n'] = "url(\"img/alphabet/n.png\")";
	imageUrlsMapping['o'] = "url(\"img/alphabet/o.png\")";
	imageUrlsMapping['p'] = "url(\"img/alphabet/p.png\")";
	imageUrlsMapping['q'] = "url(\"img/alphabet/q.png\")";
	imageUrlsMapping['r'] = "url(\"img/alphabet/r.png\")";
	imageUrlsMapping['s'] = "url(\"img/alphabet/s.png\")";
	imageUrlsMapping['t'] = "url(\"img/alphabet/t.png\")";
	imageUrlsMapping['u'] = "url(\"img/alphabet/u.png\")";
	imageUrlsMapping['v'] = "url(\"img/alphabet/v.png\")";
	imageUrlsMapping['w'] = "url(\"img/alphabet/w.png\")";
	imageUrlsMapping['x'] = "url(\"img/alphabet/x.png\")";
	imageUrlsMapping['y'] = "url(\"img/alphabet/y.png\")";
	imageUrlsMapping['z'] = "url(\"img/alphabet/z.png\")";
}
function myMove() 
{
	//var elem = document.getElementById("letter0");   
	var pos = 0;

	var id = setInterval(frame, 10);

 	
	function frame() 
	{
		var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

	  	for (var aLetter = 0; aLetter < displayedLetters.length; aLetter++) 
		{
			var elem = document.getElementById(displayedLetters[aLetter].name); 

			// Deal with the corner/edge cases
			if (displayedLetters[aLetter].top > height - 50) 
			{
				displayedLetters[aLetter].yDirection = 0;
			} 
			if (displayedLetters[aLetter].top == 0) 
			{
				displayedLetters[aLetter].yDirection = 1;
			} 
			if (displayedLetters[aLetter].left > width - 50) 
			{
				displayedLetters[aLetter].xDirection = 0;
			} 
			if (displayedLetters[aLetter].left == 0) 
			{
				displayedLetters[aLetter].xDirection = 1;
			} 

			// Increment the image
			if(displayedLetters[aLetter].yDirection == 1)
			{
				displayedLetters[aLetter].top++; 
			}
			else
			{
				displayedLetters[aLetter].top--; 
			}
			if(displayedLetters[aLetter].xDirection == 1)
			{
				displayedLetters[aLetter].left++; 
			}
			else
			{
				displayedLetters[aLetter].left--; 
			}
			elem.style.top = displayedLetters[aLetter].top + 'px'; 
			elem.style.left = displayedLetters[aLetter].left + 'px'; 
		}	
	}
}

