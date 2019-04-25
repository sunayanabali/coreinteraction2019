//check if document is ready
$(document).ready(function(){

var colors = ["lightgreen", "lightbrown", "lightblue", "pink", "orange"]

setInterval(function(){
//create random number
var randomColor = Math.floor(Math.random()*colors.length);

console.log(randomColor)

//change the css
$(".box1").css("background-color", colors[randomColor])

},950)
//end document ready function
})
// add lines using javascript..