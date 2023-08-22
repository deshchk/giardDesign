const id = DOMid => document.getElementById(DOMid)

function onVisible(element, callback, on = 0) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        callback(element)
        observer.disconnect()
      }
    })
  }, {threshold: on}).observe(element)
}

onVisible(id('oferta'), () => {
    setTimeout(() => {
        id('oferta-text').dataset.visible = true
    }, 200)
    setTimeout(() => {
        id('oferta-cards').dataset.visible = true
    }, 500)
}, .32)

onVisible(id('o-firmie'), () => {
    let time = 700

    if(window.matchMedia(('(min-width: 901px)')).matches) {
        time = 100
    }

    setTimeout(() => {
        id('o-firmie-text').dataset.visible = true
    }, time)
}, .25)

onVisible(id('instagram'), () => {
    setTimeout(() => {
        id('instagram-inside').dataset.visible = true
    }, 100)
}, .15)