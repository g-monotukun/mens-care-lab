// 広告リンクの置き場所。ASPの管理画面でコピーしたリンクのHTMLを、キーごとに貼り付ける。
// 空のままのキーは、記事上に何も表示されない（提携承認前でもページは壊れない）。
const AFF_LINKS = {
  ginkuri_aga: `<a href="https://px.a8.net/svt/ejp?a8mat=4BEHX8+51L922+211Q+631SX" rel="nofollow">
<img border="0" width="336" height="280" alt="" src="https://www29.a8.net/svt/bgt?aid=261016892305&wid=002&eno=01&mid=s00000009467001022000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4BEHX8+51L922+211Q+631SX" alt="">`, // 銀座総合美容クリニック AGA無料カウンセリング（A8.net）
  ginkuri_aga_text: ``,
};

document.querySelectorAll("[data-aff]").forEach((el) => {
  const html = AFF_LINKS[el.dataset.aff];
  if (html) el.innerHTML = html;
  else el.remove();
});
