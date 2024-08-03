function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.title = translations[lang].title;
    document.querySelector('h1').textContent = translations[lang].title;
    document.querySelector('p').textContent = translations[lang].description;
    // 他の要素の翻訳を更新
}

// ブラウザの言語設定を検出して初期言語を設定
function detectLanguage() {
    const lang = navigator.language.split('-')[0];
    return translations[lang] ? lang : 'en'; // デフォルトは英語
}

// ページ読み込み時に言語を設定
window.onload = function() {
    changeLanguage(detectLanguage());
};
