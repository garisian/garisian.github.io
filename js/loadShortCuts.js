var shortCutNames = ["Folder", "Resume", "Terminal"];
var placeholder = "../img/shortCuts/placeHolder.png";
var imageNames = [placeholder, placeholder, placeholder];
$(window).load(function()
{
	addShortcuts();
	addActionListeners();
});

function addActionListeners()
{
	for (var aShortCut = 0; aShortCut < shortCutNames.length; aShortCut++) 
	{
		var name = shortCutNames[aShortCut];
		document.getElementById('shortCut'+name).onclick = function() {
			switch(name)
			{
				case "Folder":
					alert(name);
					break;
				case "Terminal":
					alert(name);
					break;
				case "Resume":
					alert(name);
					break;
				default:
					// Forgot to initialize?
			}

		};
	}
}

function addShortcuts()
{
	var leftPadding = 182;
	for (var aShortCut = 0; aShortCut < shortCutNames.length; aShortCut++) 
	{
		var currentName = shortCutNames[aShortCut];
		var currentimage = imageNames[aShortCut];

		// Create css for an un-hovered shortcut
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = "#shortCut"+currentName+"{width:80px;height:100%;margin-left:"+leftPadding+"px;position:absolute;display: flex;justify-content: center;align-items: center; font-size: 1.3rem;  color: white;background: rgba(138, 43, 226, 0.2);}";
		document.getElementsByTagName('head')[0].appendChild(css);

		// Create css for hovered shortcut
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = "#shortCut"+currentName+":hover{background: rgba(138, 43, 226, 0.4);}";
		document.getElementsByTagName('head')[0].appendChild(css);


		// Create single shorcut div
		var iDiv = document.createElement('div');
		iDiv.id =  "shortCut"+currentName;
		document.getElementById('shortCuts').appendChild(iDiv);

		leftPadding += 80;
	}
} 