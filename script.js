// Элементы DOM
const toggle = document.getElementById('language-toggle');
const labelLeft = document.getElementById('language-label-left');
const labelRight = document.getElementById('language-label-right');
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

// Обновление текста подписей
function updateLabels(language) {
    if (language === 'en') {
        labelLeft.textContent = 'ENG';
        labelRight.textContent = 'RUS';
    } else {
        labelLeft.textContent = 'ENG';
        labelRight.textContent = 'RUS';
    }
}

// Переключение языка
function switchLanguage() {
    const language = toggle.checked ? 'ru' : 'en';
    updateLabels(language);
    loadContent(language);
}

// Начальная загрузка (английский по умолчанию)
loadContent('en');
updateLabels('en');

// Обработчик переключения
toggle.addEventListener('change', switchLanguage);
