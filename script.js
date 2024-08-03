function changeLanguage(lang) {
  document.documentElement.lang = lang;
  document.title = translations[lang].title;
  document.querySelector('h1').textContent = translations[lang].title;
  document.querySelector('p').textContent = translations[lang].description;
  // 他の要素の翻訳を更新
  
  // アクティブな言語ボタンにスタイルを適用
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
}

// ページ読み込み時に言語を設定し、対応するボタンをアクティブにする
window.onload = function() {
  const initialLang = detectLanguage();
  changeLanguage(initialLang);
};

// 言語ボタンにイベントリスナーを追加
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    changeLanguage(this.dataset.lang);
  });
});
