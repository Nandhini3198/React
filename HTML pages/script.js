function smily()
{
     myFace();
     myEye();
     mySmile();

}
function myFace() {    
   var c = document.getElementById("mycanvas");    
    
   //to draw a surface on canvas element pass 2d as an argument in the getContext function    
   var draw = c.getContext("2d");    
    
   //to start a new path invoke BeginPath function.    
   //Call this function when you want to create a new path    
   draw.beginPath();    
    
   //to specify a color or style for your canvas use fillStyle property    
   draw.fillStyle = "yellow";    
    
   //to create a full circle invoke the arc method and in that method    
   //pass the value for x and y, radius, start point,    
   draw.arc(75, 75, 50, 0, Math.PI * 2, true);    
    
   //to close the path invoke the closePath function    
   draw.closePath();    
    
   //invoke fill function to fill the canvas with a circle and in that circle a color of yellow    
draw.fill();    
}   
function myEye() {    
    var c = document.getElementById("mycanvas");    
    var eye = c.getContext("2d");    
    //moveTo function is used to move the starting point of the canvas to a new point    
    //x value is 55 and y value is 50    
    eye.moveTo(55, 50);    
     
    //from the new point, begin a new path    
    eye.beginPath();    
     
    //fill the style with color black    
    eye.fillStyle = "black";    
     
    //left round eye    
    eye.arc(50, 50, 4, 0, Math.PI * 2, true);    
    eye.closePath();    
    eye.fill();    
     
    //move to the new sub path from the current point and create a right eye    
    eye.moveTo(103, 49);    
     
    eye.beginPath();    
    eye.fillStyle = "black";    
    //right round eye    
    eye.arc(100, 50, 4, 0, Math.PI * 2, true);    
    eye.closePath();    
    eye.fill();    
 }   

 function mySmile() {    
    var c = document.getElementById("mycanvas");    
    var smile = c.getContext("2d");    
    //105 means x it will go the left side and 75 means y it will go upward of //downward    
    smile.moveTo(105, 75);    
    smile.beginPath();    
    smile.strokeStyle = "red";    
    smile.arc(75, 75, 30, 0, Math.PI, false);    
    //to draw a half rounded circle with a line stroke we can invoke the stroke function    
    smile.stroke();    
 }    