const subFooter = () => {
    return `
    <div class="max-w-[900px] mx-auto md:block hidden p-3 mt-20 transition-all ease-in-out duration-300 flex-row h-[185px] overflow-y-hidden hover:h-full"> 
        <div class="flex flex-row gap-20 text-gray-500"> 
            <ul> 
                <li class="text-black/95 mb-5">Men's Shoes</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Running</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Basketball</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Golf</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Tennis Shoes</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Jordan</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Football</li> 
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Soccer</li> 
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Training</li> 
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Nike Sportwear</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Customize with Nike By You</li> 
            </ul> 
            <ul> 
                <li class="text-black/95 mb-5">Men's Clothing</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Tops & T-Shirts</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Jackets</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Hoodies</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Pants</li> 
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Joggers & Sweatpants</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Shorts</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jerseys</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Compression & Nike Pro</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Tights & Leggings</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Tanks & Sleeveless Shirts</li>
            </ul> 
            <ul> 
                <li class="text-black/95 mb-5">Men's Gear</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">All Men's Gear</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Socks</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Bags & Backpacks</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Balls</li> 
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Hats & Caps</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Gloves & Mitts</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sunglasses</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Belts</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Drawstring Bags</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Duffel Bags</li>
            </ul>   
            <ul> 
                <li class="text-black/95 mb-5">Featured</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">New Releases</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Clearance</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Metcon</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">NFL</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Men's Essentials</li> 
                <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Best Sellers</li> 
            </ul> 
        </div> 
    </div> 

    <!-- small screen -->
    <div class="max-w-[900px] md:hidden block mx-auto p-3 mt-14 mb-4 pl-4"> 
        <div class="flex flex-col gap-20 text-gray-500"> 
            <div>
                <div>
                    <button id="menShoesBtn" class="text-black/95 mb-5">Men's Shoes</button>
                    <div id="menShoesContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Running</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Basketball</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Golf</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Tennis Shoes</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Jordan</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Football</li> 
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Soccer</li> 
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Training</li> 
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Nike Sportwear</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Customize with Nike By You</li> 
                        </ul> 
                    </div>
                </div>
                <div>
                    <button id="menClothingBtn" class="text-black/95 mb-5">Men's Clothing</button>
                    <div id="menClothingContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Tops & T-Shirts</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Jackets</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Hoodies</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Pants</li> 
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Joggers & Sweatpants</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Shorts</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jerseys</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Compression & Nike Pro</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Tights & Leggings</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Tanks & Sleeveless Shirts</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button id="menGearBtn" class="text-black/95 mb-5">Men's Gear</button>
                    <div id="menGearContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">All Men's Gear</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Socks</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Bags & Backpacks</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Balls</li> 
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Hats & Caps</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Gloves & Mitts</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sunglasses</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Belts</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Drawstring Bags</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Duffel Bags</li>
                        </ul>       
                    </div>
                </div>
                <div>
                    <button id="menFeaturedBtn" class="text-black/95 mb-5">Featured</button>
                    <div id="menFeaturedContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4"> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">New Releases</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Clearance</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Metcon</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">NFL</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Men's Essentials</li> 
                            <li class="mb-3 text-black/55 cursor-pointer hover:text-black/80">Best Sellers</li> 
                        </ul>  
                    </div>
                </div>
            </div>
        </div> 
    </div> 
    `
}

class SubFooter extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = subFooter();
    
        // function for dropdown
        function sideDropdown(btn,content,h){
            const Btn = document.querySelector(`#${btn}`);
            const Content = document.querySelector(`#${content}`);
        
            Btn.addEventListener("click",function(){
            Content.classList.toggle(`${h}`)
            })
        }
        sideDropdown("menShoesBtn", "menShoesContent", "h-[380px]")
        sideDropdown("menClothingBtn", "menClothingContent", "h-[380px]")
        sideDropdown("menGearBtn", "menGearContent", "h-[380px]")
        sideDropdown("menFeaturedBtn", "menFeaturedContent", "h-[250px]")

    }
};
customElements.define("sub-footer-content", SubFooter);