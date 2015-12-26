// A $( document ).ready() block.
$(document).ready(function() {
  console.log("ready!");
  $(".feb").on("click", function() {
    $(".feb").html('<div class="febshow"><h4>February</h4>Valentines Day with Monica, Ben and Joey. Homemade pizza and pasta</div>')
  })
  $(".mar").click(function() {
    $(".mar").html("");
    $(".mar").toggle(".marshow");

  });
  $(".apr").click(function(){
    $(".apr").toggleClass("clicked")
  })
});
