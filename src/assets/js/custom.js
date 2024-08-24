import $ from "jquery";

$(window).scroll(function () {
  if ($(this).scrollTop() > 90) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});
