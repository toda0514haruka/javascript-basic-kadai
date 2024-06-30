// btn idを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// text idを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');


// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました！');
  text.textContent = 'ボタンをクリックしました';
});