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
    products: [
      {name: 'Michael<br>スマホケース',price: 1580, image: 'image/01.jpg',
      delv: 0, isSale: true },
      {name: 'Raphael<br>スマホケース',price: 1580, image: 'image/02.jpg',
      delv: 0, isSale: true },
      {name: 'Gabriel<br>スマホケース',price: 1580, image: 'image/03.jpg',
      delv: 240, isSale: true },
      {name: 'Uriel<br>スマホケース',price: 980, image: 'image/04.jpg',
      delv: 0, isSale: true },
      {name: 'Ariel<br>スマホケース',price: 980, image: 'image/05.jpg',
      delv: 0, isSale: false },
      {name: 'Michael<br>スマホケース',price: 1580, image: 'image/06.jpg',
      delv: 0, isSale: false },
    ]
  }, //オプションを","で区切る
  watch:{
    //「セール対象」チェックボックスの状態を監視するウォッチャ
    showSaleItem: function(newVal, oldVal){
      //ここでproductsの配列を置き換える
      console.log('showSaleItemウォッチャが呼び出されました。');
    },
    //「送料無料」チェックボックスの状態を監視するウォッチャ
    showDelvFree: function(newVal, oldVal){
      //ここでproductsの配列を書き換える
      console.log('showDelvFreeウォッチャが呼び出されました');
    }
    }
  }
});