

var width_attrb;





function batting(width_attrb)
{
	window.alert("TEMp");
	var elem = document.getElementById("bat");
	change(elem,0,width_attrb,1);
}

function bowling(width_attrb)
{
	var elem = document.getElementById("bowl");
	change(elem,0,width_attrb,2);
}

function fielding(width_attrb)
{
	var elem = document.getElementById("field");
	change(elem,0,width_attrb,3);
}
 
function change(elem,width,total,text)
{
	var id = setInterval(frame,20-(total/10));
	function frame()
	{
		if (width >= total) 
		{
			clearInterval(id);
		} 
		else 
		{
			width++;
			elem.style.width = width + '%';
			elem.style.background = " rgb("+ (255-2*width) +","+(2*width)+" ,"+ 0+")";  
			document.getElementById(text).innerHTML = width * 1  + '%';
		}
	}
}