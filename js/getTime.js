$(window).load(function()
{
	var d = new Date();
	var mins = d.getMinutes();
	var hours = d.getHours();

	timeOfDay = "am";
	if(hours > 11)
	{
		timeOfDay = "pm";
		hours -= 12;
	}
	document.getElementById("time").innerHTML = hours+":"+mins+" "+timeOfDay;
});