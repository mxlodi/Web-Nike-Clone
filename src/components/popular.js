const popularRightNow = (data) => {
    return `
      <div class="max-w-[1850px] mx-auto p-3 mt-10"> 
          <div class="flex items-center justify-between"> 
              <h2 class="text-2xl">Popular Right Now</h2> 
              <div class="md:flex hidden gap-5"> 
                  <button id="left-popular" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center" > 
                      <img src="../../images/home/trending/left-chevron.png" alt="Left Chevron" class="w-[20px]"> 
                  </button> 
                  <button id="right-popular" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center"> 
                      <img src="../../images/home/trending/chevron.png" alt="Right Chevron" class="w-[20px]"> 
                  </button> 
              </div> 
          </div> 
      </div> 
      <div id="popular" class="max-w-[1850px] mx-auto px-3 gap-3 w-full flex overflow-x-scroll">   
        ${data.map((card) => {
          return `
            <div class="w-full"> 
              <div class="lg:w-[610px] md:w-[400px] w-[300px]"> 
                  <img src="${card.imgURL}" alt="${card.title}" class="w-full"> 
                  <h2 class="mt-3 text-xl">${card.title}</h2> 
                  <h2 class="text-gray-400 mt-1">${card.description}</h2> 
                  <h2 class="mt-2 mb-14">${card.price}</h2> 
              </div> 
            </div> 
          `;
        }).join("")}
      </div>
    `;
  };


export function createPopular(arr, componentName){
  class PopularRightNow extends HTMLElement {
    constructor(){
      super();
    }
    connectedCallback() {
    
      this.innerHTML = popularRightNow(arr);
      // carousel
        const popular= document.querySelector("#popular");
        const leftPopular = document.querySelector("#left-popular");
        const rightPopular = document.querySelector("#right-popular");

          rightPopular.addEventListener("click", () => {
            popular.scrollBy({
              left: 625,
              behavior: "smooth"
            })
          })
          leftPopular.addEventListener("click", () => {
            popular.scrollBy({
              left: -625,
              behavior: "smooth"
            })
          })
    }
  }
  customElements.define(componentName, PopularRightNow);
}