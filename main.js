canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
color="red";


widthofline=1;
var last_position_of_x,last_position_of_y;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    widthofline=document.getElementById("widthofline").value;
    mouseEvent="mousedown";
    console.log(color);
   
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    
    mouseEvent="mouseup"; 
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    
    mouseEvent="mouseleave"; 
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentpositionofmousex=e.clientX-canvas.offsetLeft;
    currentpositionofmousey=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
        ctx.stroke();
    }
    last_position_of_x=currentpositionofmousex;
    last_position_of_y=currentpositionofmousey;
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
