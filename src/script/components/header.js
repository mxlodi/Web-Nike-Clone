const header = (marquee, data, title) => {
    return `
    <div class="bg-[#f5f5f5] h-[60px] flex justify-center gap-8 items-center">
        <button><img class="w-5" src="../../images/home/trending/left-chevron.png" alt=""></button>
        <a class="roboto underline hover:no-underline" href="">${marquee}</a>
        <button><img class="w-5" src="../../images/home/trending/chevron.png" alt=""></button>
    </div>

    <div id="menMenu" class="w-full bg-white z-20 sticky top-0">
        <div class="max-w-[1850px] flex md:flex-row flex-col mx-auto p-3 mt-3 overflow-hidden">
            <h2 id="letterMen" class="text-2xl duration-500">${title}</h2>
            <ul class="w-full flex gap-8 sm:justify-center justify-start items-center py-2 lg:mx-auto max-w-[700px] font-semibold">
                <li class="hover:text-black/70 cursor-pointer text-nowrap">${data.small_menu_1}</li>
                <li class="hover:text-black/70 cursor-pointer text-nowrap">${data.small_menu_2}</li>
                <li class="hover:text-black/70 cursor-pointer text-nowrap">${data.small_menu_3}</li>
                <li class="hover:text-black/70 cursor-pointer text-nowrap">${data.small_menu_4}</li>
                <li class="hover:text-black/70 cursor-pointer text-nowrap">${data.small_menu_5}</li>
                <li class="hover:text-black/70 cursor-pointer text-nowrap">${data.small_menu_6}</li>
            </ul>
        </div>
    </div>
    `;
}

class Header extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        this.innerHTML = header(marquee, data, title);
    } 
}

customElements.define("header-component", Header);
