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

    <div>
        <div class="max-w-[1850px] p-3 mt-10 cursor-pointer mx-auto text-start sm:text-center">
            <h1 class="lg:text-lg text-base">${nameA}</h1>
            <h2 class="md:text-7xl text-6xl passion-bold break-normal tracking-tight">${title}</h2>
            <h2 class="my-6">${description}</h2>
            <a href="../../pages/newfeatured/newfeatured.html" class="bg-black text-white py-2 px-3 rounded-full hover:opacity-70">${button}</a>
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
        }
    }
    customElements.define(componentName, HeroSection);
};
