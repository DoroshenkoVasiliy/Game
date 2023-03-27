function func() {
  y = random(600);
  n = irandom(1);
  if ((n = 0)) {
    (x = -50), (hspeed = 10);
  } else {
    (x = 850), (hspeed = -10);
  }
}
$(function () {
  $(".slick-vertical").slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    autoplay: true,
  });
});
