$(function () {
  $('.sel-portfolio').on('click', function () {
    $('#content-title').html("Portfolio");
    $(".responsive-tools").css("display", "none");
    $(".faqs").css("display", "none");
    $(".portfolio").css("display", "inherit");
    $(".sel-responsive").removeClass("active");
    $(".sel-faq").removeClass("active");
    $(".sel-portfolio").addClass("active");
  });
});
$(function () {
    $('.sel-responsive').on('click', function () {
      $('#content-title').html("Responsive Tools");
      $(".responsive-tools").css("display", "inherit");
      $(".faqs").css("display", "none");
      $(".portfolio").css("display", "none");
      $(".sel-responsive").addClass("active");
      $(".sel-faq").removeClass("active");
      $(".sel-portfolio").removeClass("active");
    });
  });
  $(function () {
    $('.sel-faq').on('click', function () {
      $('#content-title').html("FAQ's");
      $(".responsive-tools").css("display", "none");
      $(".faqs").css("display", "inherit");
      $(".portfolio").css("display", "none");
      $(".sel-responsive").removeClass("active");
      $(".sel-faq").addClass("active");
      $(".sel-portfolio").removeClass("active");
    });
  });

