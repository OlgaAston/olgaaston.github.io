
// Получаем элементы
const toggle = document.getElementById('language-toggle');
const label = document.getElementById('language-label');
const content = document.getElementById('content');

// Функция для загрузки контента
function loadContent(language) {
    fetch(contentMap[language])
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Инициализация
let currentLanguage = 'ENG'; // Язык по умолчанию
loadContent(currentLanguage);

// Событие переключения
toggle.addEventListener('change', () => {
    currentLanguage = toggle.checked ? 'RUS' : 'ENG';
    label.textContent = currentLanguage;
    loadContent(currentLanguage);
});
