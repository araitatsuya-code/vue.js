$('#load').on('click', function(event)){
  function clickHandler(event){
    //非同期通信でJSONを読みこむ
  $.ajax({
    url : 'products.json',  // 通信先URL
    type: 'GET',            // 使用するHTTPメソッド（デフォルトがGETなので省略可能）
    dataType: 'json'        // レスポンスのデータタイプ
  })
  .done(function(data, textStatus, jqXHR) {
    // ここに通信成功時の処理を記述する
    updateScreen(data);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    // ここに通信失敗時の処理を記述する
    console.log('通信が失敗しました');
  });
}