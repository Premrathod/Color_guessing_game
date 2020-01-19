var sq=document.querySelectorAll(".square");
var colors=generateRandomcolors(6);
var reset=document.getElementById("reset");
var massage=document.querySelector("#try");
var pickedcolor=pickcolor();
var tt=document.getElementById("tt");
var rgbdisplay=document.getElementById("special");
rgbdisplay.textContent=pickedcolor;
reset.addEventListener("click",function () {
  colors=generateRandomcolors(6);
  var pickedcolor=pickcolor();
  rgbdisplay.textContent=pickedcolor;
  for(var i=0;i<sq.length;i++)
  {
    sq[i].style.background=colors[i];
  }
});
for(var i=0;i<sq.length;i++)
{
  sq[i].style.background=colors[i];
  sq[i].addEventListener("click",function () {
    var clickedcolor=this.style.background;
    console.log(pickedcolor,clickedcolor);
    if(pickedcolor===clickedcolor){
      massage.textContent="correct";
      winningcolor(pickedcolor);
      tt.style.background=pickedcolor;
    }
    else{
      this.style.background="#232323";
      massage.textContent="try again";
    }
  });
}
function winningcolor(color){
  for(var i=0;i<sq.length;i++)
  {
    sq[i].style.background=color;
  }
}
function pickcolor() {
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomcolors(num){
  var arr=[];
  for(var i=0;i<num;i++)
  {
    arr.push(randomcolor());
  }
  return arr;
}
function randomcolor(){
  var r= Math.floor(Math.random()*256);
  var g= Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b +")";
}
