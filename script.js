const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


ctx.fillStyle = "#FF0000"; //set fill style of the drawing object to red 

ctx.fillRect(0, 0, 150, 75); // draw rectangle (x,y,width,height)
//Draw a line
ctx.moveTo(0, 0); // defines starting point of the line
ctx.lineTo(200, 100); // defines ending point of the line
ctx.lineWidth = 10 // Defines linewidth 
ctx.stroke(); // draws line (ink method)

//Draw a circle
ctx.beginPath();// begins path 
ctx.arc(95, 50, 30, 0, 2 ** Math.PI); // create arc/curve arc(x,y,r,startangle, endangle)
ctx.stroke();//draws the circle

//Canvas Text 
ctx.font = "30px Arial";// fontsize, fontstyle
ctx.fillStyle = "white";
ctx.fillText("Hello world", 10, 50) // text, x,y
//////////////////////


