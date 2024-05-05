
// create component name
class CardComponent extends HTMLElement {
    connectedCallback() {
        const customArray = JSON.parse(this.getAttribute("customArray"));
        const title = this.getAttribute('title')
        // Render the card container HTML
        this.innerHTML = createCardContainer(customArray, title);
    }
}
customElements.define("card-component", CardComponent);

const createCardContainer = (cardArray, title) => {
    return `
        <div>
            <div class="max-w-[1850px] mx-auto p-3 mt-10">
                <div class="flex items-center justify-between">
                    <h2 class="text-2xl">${title}</h2>
                    <div class="flex gap-5">
                        <button id="prev-btn" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center" >
                            <img src="../../images/home/trending/left-chevron.png" alt="" class="w-[20px]">
                        </button>
                        <button id="next-btn" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center">
                            <img src="../../images/home/trending/chevron.png"alt="" class="w-[20px]">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-[1850px] mx-auto px-3  cursor-pointer  overflow-x-scroll">  
            
            <div class="w-full flex gap-3 "> 
                ${cardArray.map(card => {
                    return `
                    <div class="w-full ">
                        <div  class="md:w-[600px] w-[300px]">
                            <img src="${card.imageUrl}" alt="" class="w-full">
                            <h2 class="mt-3 text-xl">${card.brand}</h2>
                            <h2 class="text-gray-400 mt-1">${card.type}</h2>
                            <h2 class="mt-2 mb-14">$${card.price}</h2>
                        </div>
                    </div>       
                    `
                }).join("")}        
            </div>
        </div>
    `
}


// {/* <card-component customArray='[
//     {"brand": "Air Jordan 4 Retro", "imageUrl": "../../images/home/popular/air-jordan-4-retro-womens-shoes-s1LPnh.png", "type": "Women&#34s Shoes", "price": 210},

//     {"brand": "Nike Air Max 1", "imageUrl": "../../images/home/popular/air-max-1-mens-shoes-Z12HrC.png", "type": "Men&#34s Shoes", "price": 160},

//     {"brand": "Nike G.T. Cut 3", "imageUrl": "../../images/home/popular/gt-cut-3-basketball-shoes-GLHCGc.png", "type": "Basketball Shoes", "price": 190},

//     {"brand": "Ja 1 "Vacation", "imageUrl": "../../images/home/popular/ja-1-vacation-basketball-shoes-bCx2W3.png", "type": "Basketball Shoes", "price": 120},

//     {"brand": "Sabrina 1 "Excalmation"", "imageUrl": "../../images/home/popular/sabrina-1-exclamaton-basketball-shoes-f8jr2H.png", "type": "Basketball Shoes", "price": 130},

//     {"brand": "Nike Xoom Vomero 5", "imageUrl": "../../images/home/popular/zoom-vomero-5-mens-shoes-MgsTqZ.png", "type": "Men&#34s Shoes", "price": 160},
    
//     {"brand": "Nike Zoom Vomero 5", "imageUrl": "../../images/home/popular/zoom-vomero-5-womens-shoes-81TPKW.png", "type": "Women&#34s Shoes", "price": 160}
// ]'></card-component> */}




