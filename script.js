$(document).ready(function(){

var audio = new Audio('http://www.freesound.org/data/previews/209/209990_2417953-lq.mp3');

$("#one").mouseenter(function() {
    audio.play();
  });
$("#one").mouseleave(function(){
    audio.pause();
    });
    
$("#two").click(function(){
    $("#two").hide();
    });
    
$("#three").click(function(){
    $("#three").css("background-color", "black");
    });

$("#four").click(function(){
    $("#hidden").html("I SAID DON'T CLICK IT!!!");
    });
});
