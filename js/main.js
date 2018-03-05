$(document).ready(function() {
	$(".wrapper a").lightBox();
});



//this is where im currently stuck
$("#search").keypress(function(){
  var current_query = $("#search").val();

  $(".image a").hide();

  $(".image a").each(function(){

    var current_keyword = $(this).attr("data-title");

    if (current_keyword.indexOf("current_query") >= 0){

      $(this).show();
    }
  });
});
