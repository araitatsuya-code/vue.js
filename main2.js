var btnLoad = document.querySelector('#load');
//読み込みボタンのクリックイベントハンドラを定義
btnLoad.addEventListener('click', function(){
  //ここにjsonを読みこむ処理を記述する
  //1xmlオブジェクトのインスタンス生成
  var xmlHttpRequest = new XMLHttpRequest();
  //2通信状態の変化を監視する
  xmlHttpRequest.onreadystatechange = function(){
    //レスポンスの受信が正常に完了
    if (this.readyState == 4 /*&& this.status == 200*/){
      //受信したJSONを変数に格納する
      var products = this.response;
      //商品リストのノードを全て削除する
      var result = document.querySelector('#result');
      result.texrContent = '';
      //商品の子ノードをDOMに挿入する
      for (var i=0; i<products.length; i++){
        var text = '商品ID:' + products[i].id;
        text += ' 商品名:' + products[i].name;
        text += ' 料金:' + products[i].price;
        text += ' 画像パス:' + products[i].image;
        text += ' 送料:' + products[i].delv;
        text += ' セール対象:' + products[i].isSale;
        var div = document.createElement('div');
        div.textContent = text;
        result.appendChild(div);
      }
    }
  };
  //3レスポンスの形式を指定する
  xmlHttpRequest.responseType = 'json';
  //4リクエストメソッドと読みこむファイルのパスを指定する
  xmlHttpRequest.open('GET', 'products.json');
  //5リクエストを送信する（非同期通信を開始する）
  xmlHttpRequest.send();
});