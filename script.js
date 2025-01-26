// Элементы DOM
const toggle = document.getElementById('language-toggle');
const label = document.getElementById('language-label');
const content = document.getElementById('content');

// URL страниц
const pages = {
    en: 'en.html',
    ru: 'ru.html',
};

// Загрузка контента
function loadContent(language) {
    fetch(pages[language])
        .then((response) => {
            if (!response.ok) throw new Error('Ошибка загрузки контента');
            return response.text();
        })
        .then((html) => {
            content.innerHTML = html;
        })
        .catch((error) => {
            content.innerHTML = `<p style="color: red;">Не удалось загрузить контент: ${error.message}</p>`;
        });
}

// Переключение языка
function switchLanguage() {
    const language = toggle.checked ? 'ru' : 'en';
    loadContent(language);
}

// Начальная загрузка (английский по умолчанию)
loadContent('en');

// Обработчик переключения
toggle.addEventListener('change', switchLanguage);
