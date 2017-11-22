var shortCutNames = ["Folder", "SomethingELse", "Testing", "haha"];
var placeholder = "../img/shortCuts/placeHolder.png";
var imageNames = [placeholder, placeholder, placeholder];

$(window).load(function()
{
	addDesktopIcons();
});

function addDesktopIcons()
{
	var top = 20;
	var left = 30;
	for (var adesktopShortcut = 0; adesktopShortcut < shortCutNames.length; adesktopShortcut++) 
	{

		var currentName = shortCutNames[adesktopShortcut];
		var currentimage = imageNames[adesktopShortcut];

		// Create css for an un-hovered shortcut
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = "#desktopShortcut-"+currentName+"{position: absolute;top: "+top+"px;left:"+left+"px;width: 100px ;height: 80px ;background: yellow;}";
		document.getElementsByTagName('head')[0].appendChild(css);

		// Create single shorcut div
		var iDiv = document.createElement('div');
		iDiv.id =  "desktopShortcut-"+currentName;
		document.getElementById('desktopIcons').appendChild(iDiv);

		top += 100;
	}
} 


