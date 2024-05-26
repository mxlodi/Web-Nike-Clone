const heroSectionMen = () => {
  return `
    <div class="max-w-[1850px] mx-auto p-3 mt-10">
        <div class="flex gap-3">
            <div class="w-full relative h-[680px]">
                <img src="../../images/men/poster/men-s-shoes-clothing-accessories.png" alt="" class="w-full h-full object-cover ">
                <div class="absolute bottom-8 min-[600px]:max-w-[700px] max-w-[600px] my-4 left-8 text-white">
                    <p class="md:text-7xl text-6xl passion-bold tracking-tight">FEEL THE UNREAL</p>
                    <h2 class="min-[600px]:text-xl text-base mb-5">Elevate your style with the new Air Max DN.</h2>
                    <button class="bg-white px-4 py-1.5 rounded-full hover:bg-gray-200 text-black mt-4">Shop All Air</button>
                </div>     
            </div>
        </div>
    </div> 

    `;  
};
// 
class HeroSectionMen extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        
        this.innerHTML = heroSectionMen();
    }
}
customElements.define("hero-section-men", HeroSectionMen);