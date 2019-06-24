function batStats{
	var bat={
		[49,82,4,3554,211,45.56,6592,53.91,13,2,12,414,10,0],
		[176,168,25,7570,183,52.94,8371,90.43,26,0,38,703,77,0],
		[45,41,12,1658,90,57.17,1223,135.57,0,0,16,176,32,0],
		[139,131,23,4110,113,38.06,3151,130.43,4,0,26,359,148,0]
	}

	var platform={"Tests","ODI","T20I","IPL"}

	var table=document.getElementById("bat");

	for(var i=0;i<4;i++)
	{
		var row=table.insertRow(i+1);

		row.insertCell(0).innerHTML=platform[i];
		for(var j=0;j<14;j++)
		{
			row.insertCell(j+1).innerHTML=bat[i][j];
		}
	}
}