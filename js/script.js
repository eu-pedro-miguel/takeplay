const btnMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("categorias-navbar");

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Carregar tema salvo
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    html.setAttribute("data-theme", savedTheme);
    atualizarIcone(savedTheme);
}

// Clique no botão
themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark-reverse" ? "light" : "dark-reverse";

    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    atualizarIcone(newTheme);
});

// Trocar ícone
function atualizarIcone(theme) {
    themeToggle.innerHTML =
        theme === "dark-reverse"
            ? '<i class="bi bi-moon-fill"></i>'
            : '<i class="bi bi-sun-fill"></i>';
}