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
    }, 100)
    setTimeout(() => {
        id('oferta-cards').dataset.visible = true
    }, 300)
}, .32)


onVisible(id('o-firmie'), () => {
    setTimeout(() => {
        id('o-firmie-text').dataset.visible = true
    }, 100)
}, .4)


onVisible(id('instagram'), () => {
    setTimeout(() => {
        id('instagram-inside').dataset.visible = true
    }, 100)
}, .15)