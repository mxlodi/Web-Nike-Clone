const shopBySport = (arr) => {
    return `
    <div class="max-w-[1850px] mx-auto p-3 mt-10">
        <div class="flex items-center justify-between">
            <h2 class="text-2xl mb-4">Shop by Sport</h2>
            <div class="md:flex hidden gap-5 mb-5">
                <button id="left-shop"  class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center" >
                    <img src="../../images/home/trending/left-chevron.png" alt="" class="w-[20px]">
                </button>
                <button id="right-shop"  class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center">
                    <img src="../../images/home/trending/chevron.png" alt="" class="w-[20px]">
                </button>
            </div>
        </div>  
    </div>
    <div id="shop" class="max-w-[1850px] mx-auto px-3 gap-3 flex overflow-x-scroll">          
            ${arr.map((card) => {
                return `
                <div class="w-full">
                    <div class="min-[600px]:w-[610px] w-[310px]">
                        <img src="${card.imgURL}" alt="" class="w-full">
                        <h1 class="min-[600px]:mt-3 mt-1 min-[600px]:mb-8 mb-0 font-sans min-[600px]:text-xl text-base min-[600px]:text-black text-black/70 tracking-tight">${card.title}</h1>
                        <h1 class="mt-1 mb-8 text-lg font-sans min-[600px]:hidden block">${card.text}</h1>
                    </div>
                </div>
                `;
            }).join("")}
    </div>
    `;
};
const shopBySportArr = 
[
    {
        "imgURL" : "../../images/home/shop-by-sport/sport 1.jpeg",
        "title" : "Basketball",
        "text" : "Styles made for your game."
    },
    {
        "imgURL" : "../../images/home/shop-by-sport/sport 2.jpeg",
        "title" : "Running",
        "text" : "Everything you&#x27ll need for every mile."
    },
    {
        "imgURL" : "../../images/home/shop-by-sport/sport 3.jpeg",
        "title" : "Training",
        "text" : "Styles for gym workouts, bootcamps, spin & more."
    },
    {
        "imgURL" : "../../images/home/shop-by-sport/sport 4.jpeg",
        "title" : "Soccer",
        "text" : "Bring mad style to the pitch with the latest gear."
    },
    {
        "imgURL" : "../../images/home/shop-by-sport/nike-just-do-it(14).jpg",
        "title" : "Golf",
        "text" : "Conquer any course & every green in style."
    },
    {
        "imgURL" : "../../images/home/shop-by-sport/sport 6.jpeg",
        "title" : "Tennis",
        "text" : "Serve up in style."
    },
    {
        "imgURL" : "../../images/home/shop-by-sport/sport 5.jpeg",
        "title" : "Football",
        "text" : "Command the field in game-ready gear."
    },
    {
        "imgURL" : "../../images/home/shop-by-sport/nike-just-do-it(17).jpg",
        "title" : "Baseball",
        "text" : "Step up to the plate style."
    },
    {
        "imgURL" : "../../images/home/shop-by-sport/nike-just-do-it (2)-yoga.jpeg",
        "title" : "Yoga",
        "text" : "Essentials for every pose, bend, and stretch."
    }
]
class ShopBySport extends HTMLElement{
    connectedCallback(){
        this.innerHTML = shopBySport(shopBySportArr);

        // carousel
        const shop= document.querySelector("#shop");
        const leftShop = document.querySelector("#left-shop");
        const rightShop = document.querySelector("#right-shop");
       
          rightShop.addEventListener("click", () => {
            shop.scrollBy({
              left: 625,
              behavior: "smooth"
            })
          })
          leftShop.addEventListener("click", () => {
            shop.scrollBy({
              left: -625,
              behavior: "smooth"
            })
          })
        
    }
}
customElements.define("shop-by-sport-content", ShopBySport);