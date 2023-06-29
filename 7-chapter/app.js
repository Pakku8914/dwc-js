// this(クリックされた要素)
// $(function () {
//     $('.bg1').on('click', function () {
//         $('.bg1').slideUp();
//     });
//     $('.bg2').on('click', function () {
//         $('.bg2').slideUp();
//     });
//     $('.bg3').on('click', function () {
//         $('.bg3').slideUp();
//     });
//     $('.bg3').on('click', function () {
//         $('.bg3').slideUp();
//     });
// })
// ###### 上と同じ動作 #######
// $(function () {
//     $('.box1').on('click', function () {
//         $(this).slideUp();
//     });
// });

// children(選択した要素の子要素すべて)
$(function () {
    $('button').on('click', function () {
        $('ul').children().css('color', 'red');
    });
});