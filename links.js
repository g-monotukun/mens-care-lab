// 広告リンクの置き場所。ASPの管理画面でコピーしたリンクのHTMLを、キーごとに貼り付ける。
// 空のままのキーは、記事上に何も表示されない（提携承認前でもページは壊れない）。
const AFF_LINKS = {
  ginkuri_aga: `<a href="https://px.a8.net/svt/ejp?a8mat=4BEHX8+51L922+211Q+631SX" rel="nofollow">
<img border="0" width="336" height="280" alt="" src="https://www29.a8.net/svt/bgt?aid=261016892305&wid=002&eno=01&mid=s00000009467001022000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4BEHX8+51L922+211Q+631SX" alt="">`, // 銀座総合美容クリニック AGA無料カウンセリング（A8.net）
  ginkuri_aga_text: ``,
  bidan: `<a href="https://t.afi-b.com/visit.php?a=t13659U-O453239t&p=k997771v" rel="nofollow"><img src="https://www.afi-b.com/upload_image/13659-1647936734-3.jpg" width="300" height="250" style="border:none;" alt="男性向け" /></a><img src="https://t.afi-b.com/lead/t13659U/k997771v/O453239t" width="1" height="1" style="border:none;" />`, // BIDAN 発毛・育毛専門メディカルサロン（afb）※社名・商流関連ワードでのリスティング出稿NG
  bidan_text: ``,
  gorilla_skin: `<a href="https://t.afi-b.com/visit.php?a=58658u-S293343J&p=k997771v" rel="nofollow"><img src="https://www.afi-b.com/upload_image/8658-1501989767-3.gif" width="320" height="100" style="border:none;" alt="ゴリラクリニック" /></a><img src="https://t.afi-b.com/lead/58658u/k997771v/S293343J" width="1" height="1" style="border:none;" />`, // ゴリラクリニック メンズスキンケア 初回来院（afb）※社名・商品名でのリスティング誘導NG
  gorilla_skin_text: ``,
  sbc_mens_hair: `<a href="https://t.afi-b.com/visit.php?a=966543-4222760M&p=k997771v" rel="nofollow"><img src="https://www.afi-b.com/upload_image/6654-1415466978-3.gif" width="200" height="200" style="border:none;" alt="オトコの根こそぎレーザー脱毛" /></a><img src="https://t.afi-b.com/lead/966543/k997771v/4222760M" width="1" height="1" style="border:none;" />`, // 湘南美容クリニック メンズ脱毛 来院・施術（afb）※クリニック名でのリスティングNG／起用タレントの肖像・名前の使用禁止／PR表記必須
  sbc_mens_hair_text: ``,
  sbc_aga: `<a href="https://t.afi-b.com/visit.php?a=B35183-K482366M&p=k997771v" rel="nofollow"><img src="https://www.afi-b.com/upload_image/3518-1696126552-3.png" width="500" height="500" style="border:none;" alt="湘南美容外科クリニック" /></a><img src="https://t.afi-b.com/lead/B35183/k997771v/K482366M" width="1" height="1" style="border:none;" />`, // 湘南美容クリニック AGA治療・自毛植毛（afb）※PR表記必須
  sbc_aga_text: ``,
};

document.querySelectorAll("[data-aff]").forEach((el) => {
  const html = AFF_LINKS[el.dataset.aff];
  if (html) el.innerHTML = html;
  else el.remove();
});

// 広告のクリックを、案件のキーと記事ごとに Google アナリティクスへ記録する（GA_ID が未設定なら何もしない）
document.addEventListener("click", (e) => {
  const a = e.target.closest("[data-aff] a");
  if (!a || typeof gtag !== "function") return;
  gtag("event", "aff_click", {
    program: a.closest("[data-aff]").dataset.aff,
    page_path: location.pathname,
    transport_type: "beacon",
  });
});
