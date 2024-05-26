// create function that input the code
const shopTheEssential = (data) => {
    return data.map((section) => {
        return `
        <!-- shop the essentials section -->
        <div>
            <div class="max-w-[1850px] mx-auto p-3 mt-10">
                <div class="flex items-center justify-between">
                    <h2 class="text-2xl">${section.title}</h2>
                    <div class="gap-5 mb-3 md:flex hidden">
                        <button id="left-button" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center">
                            <img src="../../images/home/trending/left-chevron.png" alt="" class="w-[20px]">
                        </button>
                        <button id="right-button" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center">
                            <img src="../../images/home/trending/chevron.png" alt="" class="w-[20px]">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- shop the essentials photos -->
        <div>
            <div id="shop-the-essential" class="max-w-[1850px] cursor-pointer mx-auto px-3 gap-3 flex overflow-x-auto">
                ${section.cards.map((card) => {
                    return `
                    <div class="w-full">
                        <div class="min-[600px]:w-[605px] min-[600px]:h-full w-[410px] h-[520px]">
                            <img src="${card.imgURL}" alt="" class="w-full">
                            <h1 class="min-[600px]:mt-3 mt-1 min-[600px]:mb-8 mb-0 font-sans min-[600px]:text-xl text-base min-[600px]:text-black text-black/70 tracking-tight">${card.title}</h1>
                            <h2 class="mt-1 mb-8 text-lg font-sans min-[600px]:hidden block">${card.text}</h2>
                        </div>
                    </div>
                    `;
                }).join("")}
            </div>
        </div>
        `;
    }).join("");
};

export function createCarouselEssential(data, componentName){
    class ShopTheEssentail extends HTMLElement {
        constructor(){
            super();
        }
        connectedCallback() {
            this.innerHTML = shopTheEssential(data);
            this.setUpEventListener();
        }
        setUpEventListener (){
            // call id to use for carousel
            const leftButton = this.querySelector("#left-button");
            const rightButton = this.querySelector("#right-button");
            const shopTheEssentailSlider = this.querySelector("#shop-the-essential");
              // call the carousel function to use by inputing the name
            this.carousel(shopTheEssentailSlider,rightButton ,leftButton);
    
        }
        // carousel function
        carousel(carousel_element, nextBtn, backBtn){
            nextBtn.addEventListener("click", () => {
              carousel_element.scrollBy({
                left: 625,
                behavior: "smooth"
              })
            })
            backBtn.addEventListener("click", () => {
              carousel_element.scrollBy({
                left: -625,
                behavior: "smooth"
              })
            })
        }
    }
    customElements.define(componentName, ShopTheEssentail);
}