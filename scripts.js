<<<<<<< HEAD
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPos', window.scrollY);
});

// Restaura a posição após carregar
window.addEventListener('load', () => {
    const scrollPos = localStorage.getItem('scrollPos');
    if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos));
    }
=======
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPos', window.scrollY);
});

// Restaura a posição após carregar
window.addEventListener('load', () => {
    const scrollPos = localStorage.getItem('scrollPos');
    if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos));
    }
>>>>>>> fedf7a21f9a6a1cd2c745b01736d2749e6f9bc19
});