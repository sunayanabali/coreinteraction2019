//check if document is ready
$(document).ready(function(){
	var doc = $(document);

var width = $(document).width() - 100;
var height = $(document).height() - 100;

var shapes = [ $(".dog1"),$(".dog2"),$(".dog3")]

function randomStuff(){
var randomShape = shapes[ Math.floor(Math.random() * shapes.length ) ]
var clone = randomShape.clone().appendTo('body');

var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00,#FFE33B"]
var rand = [Math.floor(Math.random() * colors.length)];
$("body").css("background-color", colors[rand]);

clone.last().css('left', Math.random() * width ) 
clone.last().css('top', Math.random() * height )
clone.last().css('opacity', Math.random() * 1 )

}

randomStuff();

setInterval(function(){

randomStuff();
},90)
//end doucment ready function
})