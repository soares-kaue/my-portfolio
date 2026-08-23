window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPos', window.scrollY);
});

// Restaura a posição após carregar
window.addEventListener('load', () => {
    const scrollPos = localStorage.getItem('scrollPos');
    if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos));
    }
});