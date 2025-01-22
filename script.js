// Карта языков с соответствующими файлами
const contentMap = {
    RUS: './ru.html', // Путь к русскому резюме
    ENG: './en.html', // Путь к английскому резюме
};

// Получение элементов
const toggle = document.getElementById('language-toggle');
const label = document.getElementById('language-label');
const content = document.getElementById('content');

// Функция для загрузки содержимого
function loadContent(language) {
    const filePath = contentMap[language];
    fetch(filePath)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки файла: ${filePath}`);
            }
            return response.text();
        })
        .then((data) => {
            content.innerHTML = data;
        })
        .catch((error) => {
            console.error('Ошибка загрузки контента:', error);
            content.innerHTML = `<p>Не удалось загрузить резюме. Попробуйте позже.</p>`;
        });
}

// Инициализация
let currentLanguage = 'ENG'; // Язык по умолчанию
loadContent(currentLanguage);

// Событие переключения языка
toggle.addEventListener('change', () => {
    currentLanguage = toggle.checked ? 'RUS' : 'ENG';
    label.textContent = currentLanguage;
    loadContent(currentLanguage);
});
