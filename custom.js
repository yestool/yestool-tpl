document.addEventListener('DOMContentLoaded', function() {
    // 检查 localStorage 中是否存储了模式
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // 切换模式按钮点击事件
    document.getElementById('toggle-mode').addEventListener('click', function() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
    });

    // 多语言切换菜单
    const languageToggle = document.getElementById('language-toggle');
    const languageMenu = document.getElementById('language-menu');

    if (languageToggle && languageMenu) {
        languageToggle.addEventListener('click', function() {
            languageMenu.classList.toggle('hidden');
        });

        document.addEventListener('click', function(event) {
            if (!languageToggle.contains(event.target)) {
                languageMenu.classList.add('hidden');
            }
        });
    }

    // 回到顶部按钮
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 复制当前网址
    const copyUrlButton = document.getElementById('copy-url');
    const currentUrlInput = document.getElementById('current-url');

    if (copyUrlButton && currentUrlInput) {
        copyUrlButton.addEventListener('click', function() {
            currentUrlInput.select();
            document.execCommand('copy');
            alert('网址已复制到剪切板');
        });
    }
});