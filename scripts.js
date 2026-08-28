window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPos', window.scrollY)
})


window.addEventListener('load', () => {
    const scrollPos = localStorage.getItem('scrollPos')
    if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos))
    }
})