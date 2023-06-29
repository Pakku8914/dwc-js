const swiper = new Swiper('.swiper', {
    // オプション設定
    loop: true, // 最後までスライドしたら最初に戻る

    // ページネーション表示の設定
    pagination: {
        el: '.swiper-pagination', // ページネーションの要素
    },

    // ナビゲーションボタン(矢印)表示の設定
    navigator: {
        nextEl: '.swiper-button-next', // 「次へボタン」要素の指定
        prevEl: '.swiper-button-prev', // 「前へボタン」要素の指定
    }
});