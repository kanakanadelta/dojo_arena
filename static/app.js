$(document).ready(function(){
  // ${"#wrapper"}

  $("#arena_buttons button").hover(
    function(){
      var databg = $(this).attr('data-bg')
      console.log(databg)
      $("#wrapper").css("backgroundImage", `url(${databg})`)
    }
  )
  $("#arena_buttons button").click(
    function(){
      console.log('clicked arena select button')
      $("#arena_select").hide();
      $("#select_players").show();
    }
  )

  // END OF jQUERY;
});