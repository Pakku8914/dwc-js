// API_KEY
const API_KEY = "d57d6a5b2fe443f0d7da148a706e121c";

$(function () {
    // btnがクリックされたとき
    $('#btn').on('click', function () {
        // ajaxを実装
        $.ajax({
            // APIにリクエストするURL
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY + "&lang=ja",
            // レスポンスとして取得したいデータ型を指定
            // JSONで受け取りたいので、jsonpを指定
            dataType: 'jsonp',
        }).done(function (data) {
            // 通信成功
            $('#place').text(data.name);
            // 最高気温
            $('#temp_max').text(data.main.temp_max);
            // 最低気温
            $('#temp_min').text(data.main.temp_min);
            //湿度
            $('#humidity').text(data.main.humidity);
            //風速
            $('#speed').text(data.wind.speed);
            // 天気
            $('#weather').text(data.weather[0].main);
            // 天気アイコン
            $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            $('img').attr("alt",data.weather[0].main);
        }).false(function (data) {
            // 通信失敗
            alert('通信に失敗しました。');  
        })
    });
});