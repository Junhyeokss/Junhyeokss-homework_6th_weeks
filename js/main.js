$(function () {
  $(".burger_slide").slick({
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: true,
  });
  $(".burger_slide").on("afterChange", function (e, s, c) {
    $(".slick-dots li").eq(c).addClass("on").siblings().removeClass("on");
  });
});
