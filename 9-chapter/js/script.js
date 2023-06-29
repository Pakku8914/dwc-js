$(function () {
    // #back内のaタグが押されたとき
    $('#back a').on('click', function (event) { // event引数には、clickイベントが発生した際の様々な情報をevent引数に渡す
        // $('セレクタ名').animate({ 変化対象のプロパティ名: 変化値 }, アニメーションの動作時間ms);
        $('body, html').animate({ // animateはアニメーション効果を設定する
            scrollTop: 0 // 最上部に移動
        }, 800);
        event.preventDefault(); // aタグの機能を無効にするメソッド
    });
});