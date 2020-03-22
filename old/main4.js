//JSONPのURL
var url = /Users/araitatsuya/projects/vue.js/products.json
  // 非同期通信でJSONを読み込む
  $.ajax({
    url : 'products.json',  // 通信先URL
    type: 'GET',            // 使用するHTTPメソッド（デフォルトがGETなので省略可能）
    dataType: 'jsonp',      // レスポンスのデータタイプ
    jsonp: 'callback',      // クエリパラメータの名前
    jsonpCallback: 'products' // コールバック関数の名前
  })
  .done(function(data, textStatus, jqXHR) {
    console.log(data);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log('通信が失敗しました');
  });
