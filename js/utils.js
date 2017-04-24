function displayError(err_msg) {
	console.error(err_msg);
	stop();
}

function stop()
{
	console.info(typeof animation);
	cancelAnimationFrame( animation );
}

function degToRad(deg)
{
	if(typeof deg === "number" )
	{
		return deg * ( Math.PI / 180 );
	} else {
		displayError("Erreur conversion degrés à radians --- utils.js --- Mauvais type(s) d'argument(s)");
	}
}

function radToDeg(rad)
{
	if( typeof rad === "number" )
	{
		return rad * ( 180 / Math.PI );
	} else {
		displayError("Erreur conversion radians à degrés --- utils.js --- Mauvais type(s) d'argument(s)");
	}
}

