// Function to generate HTML for subfooter section
const subFooter = () => {
    return `
    <div class="max-w-[900px] mx-auto md:block hidden p-3 mt-20 transition-all ease-in-out duration-300 flex-row h-[185px] overflow-y-hidden hover:h-full">
        <div class="flex flex-row gap-20 text-gray-500">
            <ul>
                <li class="text-black/95 mb-5">Featured</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Air Force 1</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jordan 1</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Metcon</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Air Max 270</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Air Max 97</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Blazer</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Pegasus</li>
            </ul>
            <ul>
                <li class="text-black/95 mb-5">Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">All Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jordan Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Running Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Basketball Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Tennis Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Training Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Custom Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sale Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Soccer Cleats</li>
            </ul>
            <ul>
                <li class="text-black/95 mb-5">Clothing</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">All Clothing</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Tops & T-Shirts</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Shorts</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Hoodies & Pullovers</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Joggers & Sweatpants</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sport Bras</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Pants & Tights</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Socks</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Yoga</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">NikeLab</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Plus Size</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Big & Tall</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sale Clothing</li>
            </ul>
            <ul>
                <li class="text-black/95 mb-5">Kids</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Infants & Toddler Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Basketball Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Running Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Jordan Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Clothing</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Backpacks</li>  
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Socks</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Sale</li>
            </ul>
        </div>
    </div>
    <!-- small screen -->
    <div class="max-w-[900px] md:hidden block mx-auto p-3 mt-14 mb-4 pl-4"> 
        <div class="flex flex-col gap-20 text-gray-500"> 
            <div>
                <div>
                    <button id="featuredBtn" class="text-black/95 mb-5">Featured</button>
                    <div id="featuredContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Air Force 1</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jordan 1</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Metcon</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Air Max 270</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Air Max 97</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Blazer</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Pegasus</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button id="shoesBtn" class="text-black/95 mb-5">Shoes</button>
                    <div id="shoesContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">All Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jordan Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Running Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Basketball Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Tennis Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Training Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Custom Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sale Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Soccer Cleats</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button id="clothingBtn" class="text-black/95 mb-5">Clothing</button>
                    <div id="clothingContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">All Clothing</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Tops & T-Shirts</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Shorts</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Hoodies & Pullovers</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Joggers & Sweatpants</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sport Bras</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Pants & Tights</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Socks</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Yoga</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">NikeLab</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Plus Size</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Big & Tall</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sale Clothing</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button id="kidsBtn" class="text-black/95 mb-5">Kids</button>
                    <div id="kidsContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Infants & Toddler Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Basketball Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Running Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Jordan Shoes</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Clothing</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Backpacks</li>  
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Socks</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Kids Sale</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    `
};
// Custom element class definition
    class SubFooter extends HTMLElement {
        constructor(){
            super()
        }
        // Callback function when the element is connected to the DOM
        connectedCallback(){
            this.innerHTML = subFooter();
            this.setUpEventListener();
        }
        setUpEventListener(){
            this.sideDropdown("featuredBtn", "featuredContent", "h-[220px]")
            this.sideDropdown("shoesBtn", "shoesContent", "h-[340px]")
            this.sideDropdown("clothingBtn", "clothingContent", "h-[490px]")
            this.sideDropdown("kidsBtn", "kidsContent", "h-[360px]")
        }
        // function for dropdown
        sideDropdown(btn,content,h){
        const Btn = this.querySelector(`#${btn}`);
        const Content = this.querySelector(`#${content}`);
      
        Btn.addEventListener("click",function(){
          Content.classList.toggle(`${h}`)
        })
        }
    };
    // Define the custom element with the specified name
    customElements.define("sub-footer-content", SubFooter);
