$(function () {
  var isNav = $("#isNav"),
  nav = $("#nav"),
  slide = $("#slide"),
  slideItem = slide.find("li"),
  size = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
  nav.height(0);
  isNav.on("click", function () { //add click hanlder for navigation
    var navHeight = nav.height();
    if (isNav.is(".open")) {
      isNav.removeClass("open");
      nav.height(0);
      /*
      nav.stop(true, false)
      .animate({
        height : 0
      }, "fast", function () {
        nav.attr("style", "display: none");
      });*/
    } else {
      isNav.addClass("open");
      nav.height("auto");
      if(nav.height() !== 0) {
        nav.height(nav.height());
      }
      /*
      if(nav[0].clientHeight !== 0) {
        nav.height(nav[0].clientHeight);
      }*/
      /*
      nav.show()
      .height(0)
      .stop(true, false)
      .animate({
        height : navHeight
      }, "fast", function () {
        nav.attr("style", "display: block");
      });*/
    }
  });
  $(".slide_item").on("click", function (e) { // when each slide is clicked
    e.preventDefault();
  });
  slideItem.eq(0).addClass("currentSlide");

  if(size.indexOf('middlescreen') !== -1) {
    //console.info(size, size == "middlescreen");
    // Load some more content.
  }
  
});
