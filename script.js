function mostrarMenu() {
    if (window.getComputedStyle(menu).display == 'none') {
        //mostre o menu
        menu.style.display = "flex";
        menu_barras.setAttribute("aria-expanded", "true")
        menu_barras.setAttribute("aria-label", "fechar o menu")

    } else {
        //esconda o menu
        menu.style.display = "none";
        menu_barras.setAttribute("aria-expanded", "true")
        menu_barras.setAttribute("aria-label", "fechar o menu")
    }

}
addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.style.display
    } else {
        menu.style.display = "none"
    }
    });