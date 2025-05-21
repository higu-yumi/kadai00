// トップへ戻る

const pagetop = document.querySelector(".pagetop");

if (pagetop) {
  // pagetop.style.display = 'none';  ページ読み込み時は非表示

  window.addEventListener("scroll", () => {
    // スクロール位置が130px超えたら表示、showクラス追加、そうでなければ非表示
    if (window.scrollY > 130) {
      pagetop.classList.add("show");
      pagetop.style.display = "flex";
    } else {
      pagetop.classList.remove("show");
      setTimeout(() => {
        if (!pagetop.classList.contains("show")) {
          pagetop.style.display = "none"; // 非表示にする
        }
      }, 300);
      // トランジションが終わる時間に合わせて少し遅らせて非表示に
    }
  });
  // クリックでページトップに戻る
  pagetop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ハンバーガーメニュー

const hmbBtn = document.getElementById("hmb");
const header = document.getElementById("header");
const navContainer = document.querySelector(".nav_container"); // 追加

hmbBtn.addEventListener("click", function () {
  header.classList.toggle("active");
  navContainer.classList.toggle("active"); // 追加
});