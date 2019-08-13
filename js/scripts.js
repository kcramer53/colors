$(document).ready(function() {
  //light switch button function
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").toggleClass("light-background");
  });


//methods for colored buttons
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").toggleClass("green-background");
  });
  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  //highlight function (makeItAbox)
  $("p#highlight").click(function() {
    $("p#highlight").toggleClass("makeItAbox");
  });
});
