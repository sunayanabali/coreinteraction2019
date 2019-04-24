//check if document is ready
$(document).ready(function(){
	var doc = $(document);

var width = $(document).width() - 100;
var height = $(document).height() - 100;

var shapes = [ $(".dog1"),$(".dog2"),$(".dog3")]

function randomStuff(){
var randomShape = shapes[ Math.floor(Math.random() * shapes.length ) ]
var clone = randomShape.clone().appendTo('body');

clone.last().css('left', Math.random() * width ) 
clone.last().css('top', Math.random() * height )
clone.last().css('opacity', Math.random() * 1 )

}

randomStuff();

setInterval(function(){

randomStuff();
},100)
//end doucment ready function
})