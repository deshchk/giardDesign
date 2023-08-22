// HERO TEMPLATE
export const heroHtml = (id, headline, text, CTAs, img) => {
    return `
        <div class="   
            flex-shrink-0 w-full

            relative bg-[#DCC1AB]

            xl:max-h-[737px] min-[900px]:max-h-[630px]
            overflow-hidden min-[901px]:grid

            grid-cols-[100%] grid-rows-[100%] min-[901px]:items-start
            flex flex-col

            xl:pl-[89px] lg:pl-16 min-[900px]:pl-8
        " id="hero-${id}">
            <div class="
                relative z-20
                row-span-full col-span-full
                flex-1

                min-[1151px]:w-[599px]
                min-[901px]:w-[41.597%]
                max-[900px]:pt-10 max-[900px]:pb-[50px] max-[900px]:px-14
                max-[400px]:pt-7 max-[400px]:pb-[40px]

                self-center flex flex-col justify-center
                xl:gap-[72px] gap-14
            " id="hero-content">
                <div>
                    <h2 class="
                        font-montserrat font-medium
                        min-[1150px]:text-6xl min-[531px]:text-[50px] min-[490px]:text-5xl min-[410px]:text-[40px] text-4xl
                        min-[1150px]:leading-[1.16] min-[531px]:leading-[1.16] min-[490px]:leading-[1.16] min-[410px]:leading-[1.16] leading-[1.16]
                        mb-11
                    ">${headline}</h2>
                    <p class="
                        min-[1000px]:max-w-[81.63%]
                        max-[900px]:max-w-[82%]
                        text-base max-[1150px]:text-sm max-[1150px]:leading-snug
                    ">${text}</p>
                </div>
                
                ${CTAs
                    ? `<div class="
                            flex flex-wrap
                            xl:gap-x-9 gap-x-6 gap-y-4
                        ">
                            ${CTAs}
                        </div>`
                    : ''
                }
            </div>

            <div class="
                relative z-10
                row-span-full col-span-full

                min-[900px]:ml-auto

                min-[900px]:w-[47.78%]
                max-[900px]:h-[600px] max-[700px]:h-[500px] h-full

                flex
            " id="hero-photo">
                <img src="${img}" alt="it's a hero image" class="
                    flex-1 scale-x-[-1]
                    object-cover object-center
                ">
            </div>
        </div>
    `
}


// HERO  NAVIGATION
export const heroNav = `
    <div class="
        absolute bottom-0 right-0
        py-6 px-8 bg-[#F5F0EC]
        flex gap-x-8 z-30
    " id="hero-nav">
        <button aria-label="previous slide" class="
            group outline-none

            grid place-items-center w-12 h-12
        " id="previous-hero" type="button">
            <svg class="group-hover:fill-[#666] group-focus:fill-[#666] transition-all"
                xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="black">
                    <path d="M0.795115 10.9393C0.209328 11.5251 0.209328 12.4749 0.795114 13.0607L10.3411 22.6066C10.9268 23.1924 11.8766 23.1924 12.4624 22.6066C13.0482 22.0208 13.0482 21.0711 12.4624 20.4853L3.97709 12L12.4624 3.51472C13.0482 2.92893 13.0482 1.97918 12.4624 1.3934C11.8766 0.80761 10.9268 0.80761 10.3411 1.3934L0.795115 10.9393ZM26.1442 10.5L1.85577 10.5L1.85577 13.5L26.1442 13.5L26.1442 10.5Z"/>
            </svg>
        </button>
        <button aria-label="next slide" class="
            group outline-none

            grid place-items-center w-12 h-12
        " id="next-hero" type="button">
            <svg class="group-hover:fill-[#666] group-focus:fill-[#666] transition-all"
                xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="black">
                    <path d="M26.2049 13.0607C26.7907 12.4749 26.7907 11.5251 26.2049 10.9393L16.6589 1.3934C16.0732 0.807611 15.1234 0.807611 14.5376 1.3934C13.9518 1.97919 13.9518 2.92893 14.5376 3.51472L23.0229 12L14.5376 20.4853C13.9518 21.0711 13.9518 22.0208 14.5376 22.6066C15.1234 23.1924 16.0732 23.1924 16.6589 22.6066L26.2049 13.0607ZM0.855774 13.5H25.1442V10.5H0.855774V13.5Z"/>
            </svg>
        </button>
    </div>
`


// CTA BUTTON TEMPLATES
export const fullCTA = (href, inside) => {
    return `
        <a class="
            rounded-full bg-[#1B5B31]

            text-[#F5F0EC] lg:text-base text-sm

            flex items-center w-fit

            lg:px-6 px-5
            lg:pt-3 pt-[11px]
            lg:pb-[14px] pb-3

            hover:scale-105 focus:scale-105
            hover:bg-[#10371e] focus:bg-[#10371e]
            outline-none transition-all

            select-none
        " href="${href}">
        ${inside}
        </a>
    `
}

export const borderCTA = (href, inside) => {
    return `
        <a class="
            group
            rounded-full

            text-[#1B5B31] lg:text-base text-sm 

            flex gap-x-1.5 items-center w-fit

            lg:px-[22px] px-[18px]
            lg:pt-3 pt-[11px]
            lg:pb-[14px] pb-3

            border border-[#1B5B31]


            outline-none

            hover:bg-[#1B5B31] focus:bg-[#1B5B31]
            hover:text-[#F5F0EC] focus:text-[#F5F0EC]

            transition-colors

            select-none
        " href="${href}">
            ${inside}
        </a>
    `
}

// LOAD/COLLAPSE BUTTONS TEMPLATES
export const loadBtnHtml = `
        <div class="
            hidden
            absolute bottom-0
            w-full h-[50%]
            bg-[linear-gradient(to_top,_#DCC1AB_44px,_transparent)]
            justify-center items-end

            peer-[.is-loaded]:flex
        " id="gradient-btn">
            <button class="
                group outline-none
                rounded-full select-none
                text-base
                flex gap-x-2 items-center w-fit
                px-[22px] pt-3 pb-[14px]

                border border-1 border-[#111]
                hover:border-[#1B5B31] focus:border-[#1B5B31]
                hover:bg-[#1B5B31] focus:bg-[#1B5B31]
                hover:text-[#F5F0EC] focus:text-[#F5F0EC]

                mb-[89.5px] transition-all
            " id="load-realizacje-btn">
                <span>Rozwiń</span>
                <svg class="
                    flex-shrink-0 
                    group-hover:fill-[#F5F0EC] group-focus:fill-[#F5F0EC]
                    transition-all
                "
                    xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="#111">
                        <path d="M16 8.49529L15.1043 7.59959L8.63642 14.0769L8.63642 0.5L7.36358 0.5L7.36358 14.0675L0.895699 7.59959L9.54553e-08 8.49529L8.00471 16.5L16 8.49529Z"/>
                </svg>
            </button>
        </div>
    `

export const collapseBtnHtml = `
        <div class="
            absolute bottom-[89.5px]
            h-fit left-[50%] translate-x-[-50%]
            flex justify-center items-end
        " id="collapse-btn">
        <button class="
        group outline-none
        rounded-full select-none
        text-base
        flex gap-x-2 items-center w-fit
        px-[22px] pt-3 pb-[14px]

        bg-[#DCC1AB]

        border border-1 border-[#111]
        hover:border-[#1B5B31] focus:border-[#1B5B31]
        hover:bg-[#1B5B31] focus:bg-[#1B5B31]
        hover:text-[#F5F0EC] focus:text-[#F5F0EC]

        transition-all
    " id="collapse-realizacje-btn">
        <span>Zwiń</span>
        <svg class="
            flex-shrink-0 scale-y-[-1]
            group-hover:fill-[#F5F0EC] group-focus:fill-[#F5F0EC]
            transition-all
        "
            xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="#111">
                <path d="M16 8.49529L15.1043 7.59959L8.63642 14.0769L8.63642 0.5L7.36358 0.5L7.36358 14.0675L0.895699 7.59959L9.54553e-08 8.49529L8.00471 16.5L16 8.49529Z"/>
        </svg>
    </button>
        </div>
    `