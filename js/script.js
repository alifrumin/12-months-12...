// A $( document ).ready() block.
$(document).ready(function() {
  console.log("ready!");
  $(".feb").on("click", function() {
    $(".feb").html('<div class="febshow"><h4>February</h4><p>Valentines Day with Monica, Ben and Joey. Homemade pizza and pasta</p></div>')
  })
  $(".mar").click(function() {
alert("March: Pancake Tuesday with Jophie")
  });
  $(".apr").click(function(){
    $(".apr").toggleClass("clicked")
    $(".apr").removeClass("apr")
  })

  $('[data-toggle="tooltip"]').tooltip()
});
