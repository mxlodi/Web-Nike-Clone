const heroSection = (imgURL_1, imgURL_2, nameA, title, description, button) => {
  return `
    <!-- big image -->
    <div class="max-w-[1850px] mx-auto p-3 mt-4">
        <div class="w-full">
            <img src="${imgURL_1}" alt="" class="w-full lg:block hidden">
            <img src="${imgURL_2}" alt="" class="w-full lg:hidden block">
        </div>
    </div>


    <!-- big content -->

    <div class="p-4">
        <div class="mt-10 cursor-pointer mx-auto text-start sm:text-center">
            <h1 class="lg:text-lg text-base">${nameA}</h1>
            <h2 class="text-7xl passion-bold tracking-tight ">${title}</h2>
            <h2 class="my-6">${description}</h2>
            <a href="../../pages/newfeatured/newfeatured.html" class="bg-black text-white py-1 px-3 rounded-full hover:opacity-70">${button}</a>
        </div>
    </div>

    `;
};
export function createHeroSection(arr, componentName){

class HeroSection extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        arr.map((item)=>{
            this.innerHTML = heroSection(item.imgURL_1, item.imgURL_2, item.nameA, item.title, item.description, item.button);
        })
        // const imgURL_1 = this.getAttribute("imgURL_1"); 
        // const imgURL_2 = this.getAttribute("imgURL_2");
        // const name = this.getAttribute("name");
        // const title = this.getAttribute("title");
        // const description = this.getAttribute("description");
        // const button = this.getAttribute("customButton");

    }
}
customElements.define(componentName, HeroSection);
}
