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

// Letter To Path List
var imageUrlsMapping = new Object();


// dictionary count of each letter in categories list
var charDict = new Object();

// list of displayed letters
var displayedLetters = [];
var singleLetter = {left:90, top: 90, letter:'a', xDirection:1, yDirection:1};
var singleLetter2 = {left:90, top: 90, letter:'b', xDirection:1, yDirection:0, name:"something"};
displayedLetters.push(singleLetter)
displayedLetters.push(singleLetter2)

$(window).load(function(){

	updateImageMapping();

	// Create dictionary of each char and their occurance rate
	var arrayLength = categories.length;
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

		}
	}

	// Print all occurances
	for(var key in charDict){
	    //alert('key is : \"' + key + '\" and value is : \"'+ charDict[key])+"\"";
	}

	myMove();
/*
	var iDiv = document.createElement('div');
	iDiv.id = 'myAnimationTest';
	iDiv.className = '';
	document.getElementsByTagName('body')[0].appendChild(iDiv);

	iDiv.style.top = 90 + 'px'; 
	iDiv.style.left = 90 + 'px'; */


 });

function updateImageMapping()
{
	imageUrlsMapping['a'] = "url(\"./../img/alphabet/a.png\")";
	imageUrlsMapping['b'] = "url(\"./../img/alphabet/b.png\")";
	imageUrlsMapping['c'] = "url(\"./../img/alphabet/c.png\")";
	imageUrlsMapping['d'] = "url(\"./../img/alphabet/d.png\")";
	imageUrlsMapping['e'] = "url(\"./../img/alphabet/e.png\")";
	imageUrlsMapping['f'] = "url(\"./../img/alphabet/f.png\")";
	imageUrlsMapping['g'] = "url(\"./../img/alphabet/g.png\")";
	imageUrlsMapping['h'] = "url(\"./../img/alphabet/h.png\")";
	imageUrlsMapping['i'] = "url(\"./../img/alphabet/i.png\")";
	imageUrlsMapping['j'] = "url(\"./../img/alphabet/j.png\")";
	imageUrlsMapping['k'] = "url(\"./../img/alphabet/k.png\")";
	imageUrlsMapping['l'] = "url(\"./../img/alphabet/l.png\")";
	imageUrlsMapping['m'] = "url(\"./../img/alphabet/m.png\")";
	imageUrlsMapping['n'] = "url(\"./../img/alphabet/n.png\")";
	imageUrlsMapping['o'] = "url(\"./../img/alphabet/o.png\")";
	imageUrlsMapping['p'] = "url(\"./../img/alphabet/p.png\")";
	imageUrlsMapping['q'] = "url(\"./../img/alphabet/q.png\")";
	imageUrlsMapping['r'] = "url(\"./../img/alphabet/r.png\")";
	imageUrlsMapping['s'] = "url(\"./../img/alphabet/s.png\")";
	imageUrlsMapping['t'] = "url(\"./../img/alphabet/t.png\")";
	imageUrlsMapping['u'] = "url(\"./../img/alphabet/u.png\")";
	imageUrlsMapping['v'] = "url(\"./../img/alphabet/v.png\")";
	imageUrlsMapping['w'] = "url(\"./../img/alphabet/w.png\")";
	imageUrlsMapping['x'] = "url(\"./../img/alphabet/x.png\")";
	imageUrlsMapping['y'] = "url(\"./../img/alphabet/y.png\")";
	imageUrlsMapping['z'] = "url(\"./../img/alphabet/z.png\")";
}
function myMove() 
{
	//var elem = document.getElementById("myAnimation");   
	var pos = 0;
	var width = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
	var height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

	var id = setInterval(frame, 10);

 	
	function frame() 
	{
	  	for (var aLetter = 0; aLetter < displayedLetters.length; aLetter++) 
		{
			var elem = document.getElementById("myAnimation"); 
			if(displayedLetters[aLetter].letter == 'b')
			{
				var elem = document.getElementById("myAnimationTest"); 
			}
			// Deal with the corner/edge cases
			if (displayedLetters[aLetter].top == height - 50) 
			{
				displayedLetters[aLetter].yDirection = 0;
			} 
			if (displayedLetters[aLetter].top == 0) 
			{
				displayedLetters[aLetter].yDirection = 1;
			} 
			if (displayedLetters[aLetter].left == width - 50) 
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

