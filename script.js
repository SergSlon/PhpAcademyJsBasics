(function($) {

$(function() {
   var $cop = $(".block");
   for(var i=0; i < 50; i++) {
    $cop.clone().appendTo("body");
  }
  $(".block").hover(function() {
    // $(".picture").css("display", "block");

      $.ajax({
        url: "http://www.randomtext.me/api/lorem/h2/2-4",
        // jsonp: "callback",
        dataType: "json",
        success: function (data) {
          $('.block h2').html(data.text_out);
        }
      });
  });
});
})(jQuery);
