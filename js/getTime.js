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
	if(mins < 10)
	{
		document.getElementById("time").innerHTML = hours+":0"+mins+" "+timeOfDay;
	}
	else
	{
		document.getElementById("time").innerHTML = hours+":"+mins+" "+timeOfDay;
	}
});