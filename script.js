document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const loadContent = (lang) => {
      fetch(`${lang}.html`)
        .then(response => response.text())
        .then(data => content.innerHTML = data)
        .catch(() => content.innerHTML = "<p>Error loading content</p>");
    };
  
    document.getElementById("lang-ru").addEventListener("click", () => loadContent("ru"));
    document.getElementById("lang-en").addEventListener("click", () => loadContent("en"));
  
    // Загрузка контента по умолчанию
    loadContent("en");
  });
