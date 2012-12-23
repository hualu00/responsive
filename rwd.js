$(function () {
  var isNav = $("#isNav"),
  nav = $("#nav"),
  slide = $("#slide"),
  slideItem = slide.find("li");
  isNav.on("click", function () { //add click hanlder for navigation
    var navHeight = nav.height();
    if (isNav.is(".open")) {
      isNav.removeClass("open");
      nav.stop(true, false)
      .animate({
        height : 0
      }, "fast", function () {
        nav.attr("style", "display: none");
      });
    } else {
      isNav.addClass("open");
      nav.show()
      .height(0)
      .stop(true, false)
      .animate({
        height : navHeight
      }, "fast", function () {
        nav.attr("style", "display: block");
      });
    }
  });
  $(".slide_item").on("click", function (e) { // when each slide is clicked
    e.preventDefault();
  });
  slideItem.eq(0).addClass("currentSlide");
});
