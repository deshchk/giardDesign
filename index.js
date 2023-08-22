import Macy from 'https://cdn.jsdelivr.net/npm/macy@2.5.1/+esm'
import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.8/photoswipe-lightbox.esm.min.js'
import PhotoSwipe from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.3.8/photoswipe.esm.min.js'
import { heroHtml, heroNav, loadBtnHtml, collapseBtnHtml } from './js/templates.js'
import { heroData } from './js/data.js'



const id = DOMid => document.getElementById(DOMid)
const clickKlass = (el, klass) => el.classList.contains(klass) ? el.classList.remove(klass) : el.classList.add(klass)



// WEBSITE START
setTimeout(() => {
    id('start-overlay').classList.remove('opacity-100')
    id('start-overlay').classList.add('opacity-0')

    setTimeout(() => {
        document.body.classList.remove('overflow-hidden')
    }, 350)
    setTimeout(() => {
        id('start-overlay').remove()
    }, 800)
}, 300)
    


// MENU and SUBMENU _ON CLICK
id('menu-btn')?.addEventListener('click', () => {
    clickKlass(id('peer-menu'), 'open')
})

id('nav-oferta').addEventListener('click', () => {
    clickKlass(id('nav-oferta'), 'is-active')
})


// SEARCH _ON CLICK
id('nav-search-btn').addEventListener('click', () => {
    const btn = id('nav-search-btn')
    if (btn.classList.contains('is-searching')) {
        btn.classList.remove('is-searching')
    } else {
        btn.classList.add('is-searching')
        id('nav-search-input').focus()
    }
})


// MENU, SUBMENU and SEARCHnpm _ON CLICK OUTSIDE
document.addEventListener('click', e => {
    if (!id('navigation').contains(e.target) && !e.target.closest('#menu-btn')) { id('peer-menu').classList.remove('open') }
    if (!e.target.closest('#nav-oferta')) { id('nav-oferta').classList.remove('is-active') }
    if (!e.target.closest('#nav-search')) { id('nav-search-btn').classList.remove('is-searching') }
})



// RENDER HERO
function renderHeros() {
    heroData.forEach(hero => {
        document.getElementById('hero-inside').innerHTML += heroHtml(heroData.indexOf(hero), hero.headline, hero.text, hero.CTAs, hero.img)
    })
    document.getElementById('hero').innerHTML += heroNav
}


// HERO init
renderHeros()
let currentHero = 0


// SCROLL TO HERO
function heroScroll() {
    id('hero-inside').scroll({left: document.body.clientWidth * currentHero, behavior: 'smooth'})
}
const debounceHeroScroll = debounce(() => heroScroll())


// HERO SLIDER
id('hero').addEventListener('click', e => {
    if (id('previous-hero').contains(e.target)) {
        if (currentHero === 0) {
            currentHero = heroData.length - 1
        } else {
            currentHero--
        }
    }
    if (id('next-hero').contains(e.target)) {
        if (currentHero === heroData.length - 1) {
            currentHero = 0
        } else {
            currentHero++
        }
    }
    heroScroll()
})


window.addEventListener('resize', () => {
    debounceHeroScroll()
})




// REALIZACJE BUTTONS
function addLoadBtn() {
    id('realizacje').innerHTML += loadBtnHtml
}

function addCollapseBtn() {
    id('realizacje').innerHTML += collapseBtnHtml
}


// PHOTO GALLERY
const lightbox = new PhotoSwipeLightbox({
    gallery: '#projekty-imgs',
    children: 'a',
    pswpModule: PhotoSwipe
})


// UNSPLASH PHOTOS _FETCH and LOAD
async function renderPhotos(page, first) {
    const res = await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=9&query=garden&client_id=oDjgFo_gHrbw6HMcNj7ma34-ammpjHK6FDThYcqoyf4`)
    const data = await res.json()
    const photosHtml = data.results.map(result => {
        return `
            <a href="${result.urls.full}" 
                data-pswp-width="${result.width}"
                data-pswp-height="${result.height}"
            target="_blank" class="flex">
                <img src="${result.urls.small}" alt="Photo showing ${result.alt_description} by ${result.user.username} on Unsplash" id="photo-${data.results.indexOf(result)}" class="flex-1">
            </a>
        `
    }).join('')

    if (first) {
        id('projekty-imgs').innerHTML = photosHtml
    } else {
        id('projekty-imgs').innerHTML += photosHtml
    }
    
    const macy = Macy({
        container: '#projekty-imgs',
        trueOrder: false,
        waitForImages: false,
        margin: 43,
        columns: 3,
        breakAt: {
            940: {
                columns: 3,
                margin: 43,
            },
            720: {
                columns: 2,
                margin: 28,
            },
            400: {
                columns: 1,
                margin: 20,
            },
        }
    })

    if (!id('projekty-imgs').classList.contains('is-loaded')) {
        id('projekty-imgs').classList.add('is-loaded')
    }

    lightbox.init()
}

// render
renderPhotos(1, true)
addLoadBtn()


// REALIZACJE BUTTONS _ON CLICK
document.addEventListener('click', e => {
    if (id('load-realizacje-btn')?.contains(e.target)) {
        if (id('realizacje').children.length < 12) {
            renderPhotos(2)
        }
    
        id('realizacje').classList.remove('overflow-clip', 'xl:max-h-[1824px]', 'lg:max-h-[1200px]', 'md:max-h-[950px]', 'max-h-[780px]')
        id('realizacje').classList.add('max-h-[9999px]')
    
        id('gradient-btn').remove()
        addCollapseBtn()
    }
    if (id('collapse-realizacje-btn')?.contains(e.target)) {
        id('realizacje').classList.remove('max-h-[9999px]')
        id('realizacje').classList.add('overflow-clip', 'xl:max-h-[1824px]', 'lg:max-h-[1200px]', 'md:max-h-[950px]', 'max-h-[780px]')

        id('collapse-btn').remove()
        addLoadBtn()
        lightbox.init()
    }
})

// FUNCTION DEBOUNCE
function debounce(func, timeout = 50){
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}