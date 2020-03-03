//コンポーネントのロード
var nodeApp = document.querySelector('#app');

//チェックボックスのイベントハンドラを登録
var nodeCheckbox = nodeApp.querySelectorAll('input[type="checkbox"]');
nodeCheckbox[0].addEventListener('change',onCheckChanged, false);
nodeCheckbox[1].addEventListener('change',onCheckChanged, false);

//チェック状態変更イベントハンドラ
function onCheckChangedz(event){

  var nodeItems = nodeApp.querySelectorAll('item');
  var nodeCount = nodeApp.querySelector('.count');
  var count     = nodeItems.length;

  //全ての商品ノードを一旦表示する
  for (var i=0; i<nodeItems.length; i++){
    showNode(nodeItems[i]);
  }

  //セール対象のチェックがついている場合
  if (nodeCheckbox[0].checked){
    //全ての商品ノードを捜査
    for (var i=0; i<nodeItems.length; i++){
      //セール対象の商品ではない場合
      if (!isSaleItem(nodeItems[i])){
        //この商品を非表示にする
        hideNode(nodeItems[i]);
        //件数のカウントを減らす
        count--;
      }
    }
  }
  //送料無料のチェックがついている場合
  if (nodeCheckbox[1].checked){
    //全ての商品ノードを捜査
    for (var i=0; i<nodeItems.length; i++){
      //送料無料の商品ではない場合
      
    }
  }
}
