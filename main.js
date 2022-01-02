canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var last_x;
var last_y;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("input2").value;
    line_width = document.getElementById("input3").value;
    radius=document.getElementById("input1").value;
    mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUP";
   
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
   
  
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        
        ctx.stroke();
        
       
    }

       
    last_x = current_x;
    last_y = current_y;

    

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

   
    screen_width = screen.width;

    var new_height = screen.height - 300;
    var new_width = screen.width - 70;
   
    if (screen_width < 992){
        document.getElementById("canvas1").width = new_width;
        document.getElementById("canvas1").height = new_height;
        document.body.style.overflow = "hidden";
   
       
      
        
    }
   var last_x;
   var last_y;
    
   canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e){
        console.log("my_touchstart");
        last_x = e.touches[0].clientX - canvas.offsetLeft;
        last_y = e.touches[0].clientY - canvas.offsetTop;
   
   
        
        
    }
   
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e){
        console.log("my_touchmove");
         current_x = e.touches[0].clientX - canvas.offsetLeft;
         current_y = e.touches[0].clientY - canvas.offsetTop;
   ctx.beginPath();
   ctx.lineWidth = line_width;
   ctx.strokeStyle = color;
   ctx.moveTo(last_x, last_y);
   ctx.lineTo(current_x, current_y);
   ctx.stroke();
   last_x = current_x;
   last_y = current_y; 
    }
        
    
   
   
   
  
    
   
   
      
}
