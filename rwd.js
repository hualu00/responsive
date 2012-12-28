$(function () {
  var isNav = $("#isNav"),
  nav = $("#nav"),
  slide = $("#slide"),
  slideItem = slide.find(".slideUl > li"),
  size = window.getComputedStyle(document.body, ':after').getPropertyValue('content'),
  prevSlide = $(".slide_prev"),
  nextSlide = $(".slide_next");
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
    console.info("clicked");
    e.preventDefault();
  });
  slideItem.eq(0).addClass("currentSlide");

  if(size.indexOf('middlescreen') !== -1) {
    //console.info(size, size == "middlescreen");
    // Load some more content.
  }

  var i = 0;
  prevSlide.on("click", function (e) {
    //
    if(i > 0) {
      i -= 1;
      slideItem.removeClass('currentSlide');
      slideItem.eq(i).addClass('currentSlide');  
      $(".slide_Mcontrol li").removeClass("currentLi");
      $(".slide_Mcontrol li").eq(i).addClass("currentLi");
    }
  });

  nextSlide.on("click", function (e) {
    if(i < slideItem.length - 1) {
      i += 1;
      slideItem.removeClass('currentSlide');
      slideItem.eq(i).addClass('currentSlide');
      $(".slide_Mcontrol li").removeClass("currentLi");
      $(".slide_Mcontrol li").eq(i).addClass("currentLi");
    }
  });i

  var length = slideItem.length;
  var height = (100 / length) + "%";
  var slide_Mcontrol = $(".slide_Mcontrol");
  for(var j = 0; j < length; j += 1) {
    var li = "<li style='height:"+height+";'>" + (j + 1) + "</li>";
    $(li).appendTo(slide_Mcontrol.find('ul'));
  }


  $(".slide_Mcontrol li").eq(0).addClass("currentLi");
  $(".slide_Mcontrol li").on("click", function () {
    $(".slide_Mcontrol li").removeClass("currentLi");
    slideItem.removeClass('currentSlide');
    slideItem.eq($(this).index()).addClass('currentSlide');
    $(this).addClass("currentLi");
    i = $(this).index();
  })
  
});
