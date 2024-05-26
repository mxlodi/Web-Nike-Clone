const header = (marquee, data) => {
    return `
    <div class="bg-[#f5f5f5] h-[60px] flex justify-center gap-8 items-center">
        <button><img class="w-5" src="../../images/home/trending/left-chevron.png" alt=""></button>
        <a class="roboto underline hover:no-underline" href="">${marquee}</a>
        <button><img class="w-5" src="../../images/home/trending/chevron.png" alt=""></button>
    </div>

    <div id="menMenu" class="w-full bg-white z-20 sticky top-0">
        <div class="max-w-[1850px] flex md:flex-row flex-col mx-auto p-3 mt-3 overflow-hidden">
            ${data.map((item) => `
                <div>
                    <h2 id="letterMen" class="text-2xl duration-500">${item.title}</h2>
                    <ul class="w-full flex gap-8 sm:justify-center justify-start items-center py-2 lg:mx-auto font-semibold">
                        ${[item.text_1, item.text_2, item.text_3, item.text_4, item.text_5, item.text_6].map(text => text ? `<li class="hover:text-black/70 cursor-pointer text-nowrap">${text}</li>` : '').join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    </div>
    `;
}

export function createHeader(data, marquee, componentName) {
    class Header extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = header(marquee, data);
        }
    }

    customElements.define(componentName, Header);
}
