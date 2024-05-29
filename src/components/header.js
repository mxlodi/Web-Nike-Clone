// Function to generate the HTML for the header section
const header = (data, marquee) => {
    return `
    <div class="bg-[#f5f5f5] h-[60px] flex justify-center gap-8 items-center">
        <button><img class="w-5" src="../../images/home/trending/left-chevron.png" alt=""></button>
        <a class="roboto underline hover:no-underline" href="">${marquee}</a>
        <button><img class="w-5" src="../../images/home/trending/chevron.png" alt=""></button>
    </div>

    <div class="w-full bg-white z-20 sticky top-0">
        <div class="max-w-[1850px] flex md:flex-row flex-col mx-auto p-3 mt-3 overflow-hidden">
            ${data.map((item) => `
                    <h2 class="text-2xl duration-500">${item.title}</h2>
                    <ul class="w-full flex gap-8 sm:justify-center justify-start items-center py-2 lg:mx-auto font-semibold">
                        <li class="hover:text-black/70 cursor-pointer text-nowrap">${item.text_1}</li> 
                        <li class="hover:text-black/70 cursor-pointer text-nowrap">${item.text_2}</li> 
                        <li class="hover:text-black/70 cursor-pointer text-nowrap">${item.text_3}</li> 
                        <li class="hover:text-black/70 cursor-pointer text-nowrap">${item.text_4}</li> 
                        <li class="hover:text-black/70 cursor-pointer text-nowrap">${item.text_5}</li> 
                        <li class="hover:text-black/70 cursor-pointer text-nowrap">${item.text_6}</li> 
                    </ul>

            `).join('')}
        </div>
    </div>
    `;
};
// Function to create and define a custom element
export function createHeader(data, marquee, componentName) {
    // Custom element class definition
        class Header extends HTMLElement {
        constructor() {
            super();
        }
        // Callback function when the element is connected to the DOM
        connectedCallback() {
            this.innerHTML = header(data, marquee);
        }
    }
    // Define the custom element with the specified name
    customElements.define(componentName, Header);
};
