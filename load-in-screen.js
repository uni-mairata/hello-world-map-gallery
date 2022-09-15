$("body").append(
  '<div style="" id="loadingDiv"><div class="loader"></div></div>'
);

$(window).on("load", function() {
  setTimeout(removeLoader, 400); //wait for page load
});

function removeLoader() {
  $("html,body").scrollTop(0);
  $("#loadingDiv").fadeOut(400, function() {
    // fadeOut complete. Remove the loading div
    $("#loadingDiv").remove(); //makes page more lightweight
  });
}