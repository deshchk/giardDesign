import { fullCTA, borderCTA } from "./templates.js"

const full = fullCTA
const bordered = borderCTA

export const heroData = [
    {
        headline: 'Nowoczesna aranżacja Twojego ogrodu',
        text: 'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
        CTAs: `
            ${full('#kontakt', 'Skontaktuj się z nami')}
            ${bordered('#realizacje', `
                <span>Zobacz nasze realizacje</span>
                <svg class="flex-shrink-0 xl:w-4 lg:w-[14px] group-hover:fill-[#F5F0EC] group-focus:fill-[#F5F0EC]"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="#1B5B31">
                        <path d="M16 8.49529L15.1043 7.59959L8.63642 14.0769L8.63642 0.5L7.36358 0.5L7.36358 14.0675L0.895699 7.59959L9.54553e-08 8.49529L8.00471 16.5L16 8.49529Z"/>
                </svg>
            `)}
        `,
        img: '../imgs/hero.jpeg',
    },
    {
        headline: 'Zajefajny aranż Twojego ogrodu',
        text: 'Marka GiardDesign to wysoka estetyka realizacji i wieloletnie doświadczenie. Oferujemy bardzo różne usługi z indywidualnym podejściem do każdego projektu.',
        CTAs: `
            ${full('#kontakt', 'Napisz do nas')}
            ${bordered('#realizacje', `
                <span>Zobacz nasze projekty</span>
                <svg class="flex-shrink-0 xl:w-4 lg:w-[14px] group-hover:fill-[#F5F0EC] group-focus:fill-[#F5F0EC]"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="#1B5B31">
                        <path d="M16 8.49529L15.1043 7.59959L8.63642 14.0769L8.63642 0.5L7.36358 0.5L7.36358 14.0675L0.895699 7.59959L9.54553e-08 8.49529L8.00471 16.5L16 8.49529Z"/>
                </svg>
            `)}
        `,
        img: '../imgs/hero2.jpeg',
    },
    {
        headline: 'Nazywam się Daniel Leszczak',
        text: 'Dziękuję Wam za poświęony czas na obejrzenie mojego projektu! Świetnie się bawiłem i cieszę się na pracę z Wami :D',
        CTAs: `
            ${full('https://deszczak.work', 'Napisz do mnie')}
        `,
        img: '../imgs/hero3.jpeg',
    },
]