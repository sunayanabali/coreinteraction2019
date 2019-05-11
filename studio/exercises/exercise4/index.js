//check if document is ready
$(document).ready(function(){

    //Declare some stuff 
    var ticker = 0;
    var ticker2 = 0;
    var colors1 = ["orange", "red", "pink", "green"]
    var colors1 = ["purple", "blue", "yellow", "green"]

    //Change some html      
    $("#ticker").text(ticker)    

    //Change some css
    $("p").css("font-size", "80px")    
    $("p").css("color", "white")    

    //Create your own function
    function getTime() {
        time = new Date();    
        //change html   
        $("#ticker").text(ticker)    
        $("#ticker2").text(ticker2) 


        //change css
        var rotate = "rotate(" + ticker + "deg)";
        console.log(rotate);
        $("#clock").css("transform", rotate)    
        $("#clock").css("background-color", colors1[ticker2])  
        $("#ticker2").css("color", colors1[ticker2])  
        $("#ticker").css("font-size", "80px")  
          


        //update variables  
        ticker+=10; 
        ticker2+=1; 

        //check if ticker2 is over 4  
        if(ticker2 >= 4){
            ticker2 =0;
        }

    //end function
    }  

    //call function initially
    getTime()  

    //call function every second
    setInterval(function(){
      getTime()
    },1000)

 
//end document ready function
})