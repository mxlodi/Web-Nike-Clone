

const createCardsContainer = (picArray) => {
    console.log(picArray);
    return `
    <div class="max-w-[1850px] mx-auto p-3 mt-10">
        ${picArray.map(card => {
            return `
            <div class="md:flex hidden gap-4 my-7">
                <div class="w-full"> 
                    <div class="w-full relative"> 
                        <img src="${card.img}" alt="" class="w-full h-full  object-cover"> 
                        <div class="absolute bottom-8 left-8 text-white/90"> 
                            <p class="text-2xl">${card.brand}</p> 
                            <button class="bg-white px-4 py-1.5 rounded-full text-black/90 mt-4 font-semibold">${card.btn}</button> 
                        </div> 
                    </div> 
                </div>
            </div>

           
            <div class="md:hidden flex-col my-8">
                <div class="w-full my-2"> 
                    <div class="w-full relative"> 
                        <img src="${card.imgSmall}" alt="" class="w-full h-full  object-cover"> 
                        <div class="absolute bottom-8 left-8 text-white/90"> 
                            <p class="text-2xl">${card.brand}</p> 
                            <button class="bg-white px-4 py-1.5 rounded-full text-black/90 mt-4 font-semibold">${card.btn}</button> 
                        </div> 
                    </div> 
                </div>             
            </div>
            `;
        }).join(" ")}
    </div>
    `;
};

class PicComponent extends HTMLElement {
    connectedCallback() {
        const customArray = JSON.parse(this.getAttribute("customArray"));
        this.innerHTML = createCardsContainer(customArray);
    }
}

customElements.define("pic-component", PicComponent);
