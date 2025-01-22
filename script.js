// Получение элементов
const toggle = document.getElementById('language-toggle');
const label = document.getElementById('language-label');
const ruContent = document.getElementById('resume-ru');
const enContent = document.getElementById('resume-en');

// Функция для переключения языка
function switchLanguage() {
    if (toggle.checked) {
        label.textContent = 'RUS';
        ruContent.classList.add('active');
        enContent.classList.remove('active');
    } else {
        label.textContent = 'ENG';
        enContent.classList.add('active');
        ruContent.classList.remove('active');
    }
}

// Инициализация (по умолчанию английский язык)
switchLanguage();

// Событие переключения
toggle.addEventListener('change', switchLanguage);
