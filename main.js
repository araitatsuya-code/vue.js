//数値を通過書式[#,###,###]円などに変換するフィルター
Vue.filter('number_format',function(val){
  return val.toLocaleString();
});
//商品一覧コンポーネント
var app = new Vue({
  el: '#app',
  data: {
    //表示中の商品数
    count: 0,
    //「セール対象」のチェック状態（true:チェック有り、false:チェック無し）
    showSaleItem: false,
    //「送料無料」のチェック状態（true:チェック有り、false:チェック無し）
    showDelvFree: false,
    //「並び替え」の選択値（1:標準、2:価格が安い順）
    sortOrder: 1,
    //商品リスト
    products: []
  }, 
  // ライフサイクルハック
  created: function(){
    //JSONPのURL（サーバーに配置する）
    var url = '/Users/araitatsuya/projects/vue.js/products.js'
    // 非同期通信でJSONPを読みこむ
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
  
  },
  computed: {

    //絞り込み後の商品リストを返す算出プロパティ
    filteredList: function() {
      //絞り込み後の商品リストを格納する新しい配列
      var newList = [];
      for (var i=0; i<this.products.length; i++){
        //表示対象かどうかを判定するフラグ
        var isShow = true;
        //i番目の商品が表示対象かどうかを判定する
        if (this.showSaleItem && !this.products[i].isSale){
          //「セール対象チェック有りで、セール対象商品ではない場合」
          isShow = false; //この商品は表示しない
        }
        if (this.showDelvFree && this.products[i].delv > 0){
          //「送料無料」チェック有りで、送料有りの商品の場合
          isShow = false; //この商品は表示しない
        }
        //表示対象の商品だけを新しい配列に追加する
        if (isShow){
          newList.push(this.products[i]);
        }
      }
      //新しい配列を並び替える
      if (this.sortOrder == 1){
        //元の順番にpushしているので並び替え済み
      }
      else if (this.sortOrder == 2){
        //価格が安い順に並び替える
        newList.sort(function(a,b){
          return a.price - b.price;
        });
      }
    //絞り込み後の商品リストを返す
    return newList;
    }
  },
  // //絞り込み後の商品リストの件数を返す算出プロパティ
  //  count: function(){
  //   return this.filteredList.length;
  // }

  });