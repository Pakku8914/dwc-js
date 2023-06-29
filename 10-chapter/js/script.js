$(function() {
    $('.menu-trigger').on('click', function (event) {
        // menu-triggerクラスが適用されている部分にactiveクラスがない場合、追加する。
        // activeクラスがある場合、削除する
        $(this).toggleClass('active');
        $('#sp-menu').fadeToggle();
        event.preventDefault();
    });
  });