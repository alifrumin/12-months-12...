// A $( document ).ready() block.
$(document).ready(function() {
  console.log("ready!");
  $(".feb").on("click", function() {
    $(".feb").html('<div class="febshow">adfa</div>')
  })
  $(".mar").click(function() {
    $(".mar").html("");
    $(".mar").toggle(".marshow");

  });
  $(".apr").click(function(){
    $(".apr").toggleClass("clicked")
  })
});
