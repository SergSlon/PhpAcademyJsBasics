���������� �� �������� ����������� �����(div) - 50�� � �������(1px)
� �������������� ���������(200x150px),

������ ������� - ����������� �� ������ display:none (����� ����� �������� ������ http://dummyimage.com/200x100),

� ���� ��� �������� �����������(������), c ������� 50px.

�� ��������� �� ���� � ������������ � ��������� - ����� ��� ����������� ��������� �� display:block/inline-block,

� �������� ��� ����������� ������������ � ������� AJAX � http://www.randomtext.me/api/lorem/h2/2-4


(function($) {

$(function() {
  $(".block").hover(function() {
    $(".picture").css("display", "block");

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
