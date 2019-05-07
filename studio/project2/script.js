//check if document is ready
$(document).ready(function(){

var colors = ["#DEFFE2","#e6f7ff","#B6DAFE","#FFE6C8","#FEE6F0","#FFCBC5","#E6BEEE","#B7F1FF","#B5FDD0","#FFFAB6","#FFB6D5","#EFA0F5",
"#ffff80", "#ff9999","#ffccff","#d9b3ff","#b3ffff","#ffcc99","#99ddff","#c6ffb3","#ffb3b3"]
var colors2 = ["#0180F0","#0001F0","#7800F0","#CA01F0","#F001D1","#F0005B","#F04600","#ff0000","#F08F01","#006A14","#00306B","#3D006B","#6B0064","#6B0101",
"#b300b3", "#993366","#ff3300", "#FFA400","#99cc00","##80ff00","#007399","#003399","#330080"]

setInterval(function(){
//create random number
var randomColor = Math.floor(Math.random(10)*colors.length);
var randomColor2 = Math.floor(Math.random(20)*colors2.length);

console.log(randomColor)

//change the css
$(".mybox").css("background-color", colors[randomColor])
$(".box1").css("background-color", colors[randomColor])
$(".box2").css("background-color", colors[randomColor])
$(".box3").css("background-color", colors[randomColor])
$(".box4").css("background-color", colors[randomColor])
$(".box5").css("background-color", colors[randomColor])
$(".box6").css("background-color", colors[randomColor])
$(".box7").css("background-color", colors[randomColor])
$(".box8").css("background-color", colors[randomColor])
$(".box9").css("background-color", colors[randomColor])
$(".box10").css("background-color", colors[randomColor])
$(".box11").css("background-color", colors[randomColor])
$(".box12").css("background-color", colors[randomColor])
$(".box13").css("background-color", colors[randomColor])
$(".box14").css("background-color", colors[randomColor])
$(".box15").css("background-color", colors[randomColor])
$(".box16").css("background-color", colors[randomColor])
$(".box17").css("background-color", colors[randomColor])
$(".box18").css("background-color", colors[randomColor])
$(".box19").css("background-color", colors[randomColor])
$(".box20").css("background-color", colors[randomColor])
$(".box21").css("background-color", colors[randomColor])
$(".box22").css("background-color", colors[randomColor])
$(".box23").css("background-color", colors[randomColor])
$(".box24").css("background-color", colors[randomColor])
$(".box25").css("background-color", colors[randomColor])

$(".mybox").css("border-color", colors2[randomColor2])
$(".box1").css("border-color", colors2[randomColor2])
$(".box2").css("border-color", colors2[randomColor2])
$(".box3").css("border-color", colors2[randomColor2])
$(".box4").css("border-color", colors2[randomColor2])
$(".box5").css("border-color", colors2[randomColor2])
$(".box6").css("border-color", colors2[randomColor2])
$(".box7").css("border-color", colors2[randomColor2])
$(".box8").css("border-color", colors2[randomColor2])
$(".box9").css("border-color", colors2[randomColor2])
$(".box10").css("border-color", colors2[randomColor2])
$(".box11").css("border-color", colors2[randomColor2])
$(".box12").css("border-color", colors2[randomColor2])
$(".box13").css("border-color", colors2[randomColor2])
$(".box14").css("border-color", colors2[randomColor2])
$(".box15").css("border-color", colors2[randomColor2])
$(".box16").css("border-color", colors2[randomColor2])
$(".box17").css("border-color", colors2[randomColor2])
$(".box18").css("border-color", colors2[randomColor2])
$(".box19").css("border-color", colors2[randomColor2])
$(".box20").css("border-color", colors2[randomColor2])
$(".box21").css("border-color", colors2[randomColor2])
$(".box22").css("border-color", colors2[randomColor2])
$(".box23").css("border-color", colors2[randomColor2])
$(".box24").css("border-color", colors2[randomColor2])
$(".box25").css("border-color", colors2[randomColor2])

},6000)
//end document ready function
})
// add lines using javascript..
//fading in fading out.