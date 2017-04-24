const DEBUG_COLORMANAGER = true;

//Hexadecimal to Red
function hexToR(c) 
{
  if(typeof c === "string") 
  {
    //if(regex())
    return parseInt((cutHex(c)).substring(0,2),16);  
  } else {
    displayError("Erreur conversion couleur hexadecimal (red) à rgb  --- colorManager.js --- mauvais type(s) d'arguments");
  }
}

//Hexadecimal to Green
function hexToG(c) 
{
  if(typeof c === "string") 
  {
    return parseInt((cutHex(c)).substring(2,4),16);
  } else {
    displayError("Erreur conversion couleur hexadecimal (green) à rgb  --- colorManager.js --- mauvais type(s) d'arguments");
  }
}

//Hexadecimal to Blue
function hexToB(c) 
{
  if(typeof c === "string") 
  {
    return parseInt((cutHex(c)).substring(4,6),16);
  } else {
    displayError("Erreur conversion couleur hexadecimal (blue) à rgb  --- colorManager.js --- mauvais type(s) d'arguments");
  }
}

//Hexadecimal : Gestion du #
function cutHex(c) 
{
  if(typeof c === "string") 
  {
    return (c.charAt(0)=="#") ? c.substring(1,7):c;
  } else {
    displayError("Erreur conversion couleur hexadecimal (#) à rgb  --- colorManager.js --- mauvais type(s) d'arguments");
  }
}

function hexToRGB(color) 
{
  if(typeof color === "string") 
  {
    if(color.length >= 6) 
    { 
      if(!/[_+-.,!@$%^&*();\/|<>"']/.test(color)) 
      {
      	color_used[0] = hexToR(color);
      	color_used[1] = hexToG(color);
      	color_used[2] = hexToB(color); 
      } else {
	displayError("Erreur conversion couleur hexadecimal à rgb  --- colorManager.js --- Expression [] trouvée");
      }
    } else {
      displayError("Erreur conversion couleur hexadecimal à rgb  --- colorManager.js --- Argument trop court");
    }
  } else {
    displayError("Erreur conversion couleur hexadecimal à rgb  --- colorManager.js --- mauvais type(s) d'arguments");
  }
}

function RGBToHex( r, g, b)
{
  if( (typeof r === "number") && (typeof g === "number") && (typeof b === "number"))
  {
    r = verifyRGB(r);
    g = verifyRGB(g);
    b = verifyRGB(b);

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

  } else {
    displayError("Erreur conversion couleur rgb à hexadecimal --- colorManager.js --- mauvais type(s) d'arguments");
  }
}

function verifyRGB(c)
{
  if( (c < 0) || (c > 255) )
  {
    console.warn("Avertissement conversion couleur rgb à hexadecimal --- colorManager.js --- RGB n'est pas compris entre 0 et 255");
    if(c < 0)
      c = 0;
    else
      c = 255;
  }

  return c;
}

function componentToHex(c)
{
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
