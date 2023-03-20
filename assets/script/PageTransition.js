console.log('PageTransition.js werkt')
// Navigation
const nav = document.querySelector('nav')
const menuItems = nav.querySelectorAll('a')
window.addEventListener('load', () => {
    nav.classList.add('loaded')
})

// Page-Transition
const pageTransitionContainer = document.querySelector('.page-transition-container')
const pageTransition = document.querySelectorAll('.page-transition')

window.addEventListener('load', () => {
    pageTransition[0].classList.add('first')
    gsap.to(pageTransition, {
        y: '100%',
        stagger: 0.2,
        onComplete() {
            pageTransitionContainer.classList.add('done')
            pageTransition[0].classList.remove('first')
        }
    })
})

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        pageTransitionContainer.classList.remove('done')
        pageTransition[1].classList.add('first')
        gsap.fromTo(pageTransition, {
            y: '-100%'
        },{
            y: '0%',
            stagger: 0.2,
            onComplete() {
                location.replace(item.href)
            }
        })
    })
})