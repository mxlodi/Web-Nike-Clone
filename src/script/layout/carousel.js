const carousel = (data, title) => {
    return `
    <div class="max-w-[1850px] mx-auto p-3 mt-10"> 
        <div class="flex items-center justify-between"> 
            <h2 class="text-2xl">${title}</h2> 
            <div class="md:flex hidden gap-5"> 
                <button id="left-popular" class="bg-[#e5e5e5] size-10 rounded-full flex justify-center items-center" > 
                    <img src="../../images/home/trending/left-chevron.png" alt="" class="max-w-[20px]"> 
                </button> 
                <button id="right-popular" class="bg-[#e5e5e5] size-10 rounded-full flex justify-center items-center"> 
                    <img src="../../images/home/trending/chevron.png" alt="" class="max-w-[20px]"> 
                </button> 
            </div> 
        </div> 
    </div>

    <div id="popular" class="max-w-[1850px] mx-auto px-3 gap-3 cursor-pointer flex overflow-x-scroll">          
        <div class="w-full">
        ${data
            .map((items) => {
              return `
              <div  class="lg:w-[450px] md:w-[400px] w-[300px]">
                <img src="${items.img}" alt="" class="w-full">
                <h2 class="mt-3 text-xl">${items.}</h2>
                <h2 class="text-gray-400 mt-1">Women's Shoes</h2>
                <h2 class="mt-2 mb-14">$210</h2>
            </div>
              `;
            })
            .join("")}
        </div>
    </div>

    `
}

class CreateCarousel {
    connectedCallback() {
        const data = JSON.parse("")

    }
}

