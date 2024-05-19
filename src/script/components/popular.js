const popularRightNow = (data) => {
    return `
    
    <!-- Popular --> 
        <div class="max-w-[1850px] mx-auto p-3 mt-10"> 
            <div class="flex items-center justify-between"> 
                <h2 class="text-2xl">Popular Right Now</h2> 
                <div class="md:flex hidden gap-5"> 
                    <button id="left-kid-popular" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center" > 
                        <img src="../../images/home/trending/left-chevron.png" alt="" class="w-[20px]"> 
                    </button> 
                    <button id="right-kid-popular" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center"> 
                        <img src="../../images/home/trending/chevron.png"alt="" class="w-[20px]"> 
                    </button> 
                </div> 
            </div> 
        </div> 
    <!-- Popular photos --> 

        <div id="kid-popular" class="max-w-[1850px] mx-auto px-3 gap-3 w-full flex overflow-x-scroll">   
        ${data.map((card) => {

            return `
            <div class="w-full"> 
                <div  class="lg:w-[610px] md:w-[400px] w-[300px]"> 
                    <img src="${card.imgURL}" alt="" class="w-full"> 
                    <h2 class="mt-3 text-xl">${card.title}</h2> 
                    <h2 class="text-gray-400 mt-1">${card.description}</h2> 
                    <h2 class="mt-2 mb-14">${card.price}</h2> 
                </div> 
            </div> 
            `
        }).join("")}        
            
        </div> 
    `

};

class PopularRightNow extends HTMLElement {

    connectedCallback(){

        const Items = JSON.parse(this.getAttribute("Items"));
        this.innerHTML = popularRightNow(Items);
    }
}

customElements.define("popular-component", PopularRightNow);
