// Functiion to generate HTML for subfooter section
const subFooter = () => {
    return `
    <div class="max-w-[900px] mx-auto md:block hidden p-3 mt-20 transition-all ease-in-out duration-300 flex-row h-[185px] overflow-y-hidden hover:h-full">
        <div class="flex flex-row gap-20 text-gray-500">
            <ul>
                <li class="text-black/95 mb-5">Kid's Shoes</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">$70 & Under</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">easy On & Off</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jordan</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Basketball</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Running</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Soccer</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Football</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Baseball</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Skateboarding</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Lifestyle</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">New Releases</li>
            </ul>
            <ul>
                <li class="text-black/95 mb-5">Kid's Clothing</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Joggers & Sweatpants</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Swimwear</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jackets & Vests</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">T-Shirts & Tops</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Hoodies & Sweatshirts</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Shorts</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Pants & Tights</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Compression & Nike Pro</li>
            </ul>
            <ul>
                <li class="text-black/95 mb-5">Kid's Gear</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">All Kids' Gear</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Backpacks & Bags</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Gloves</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Hats & Headbands</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Socks</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sleeve & Arm Bands</li>
            </ul>
            <ul>
                <li class="text-black/95 mb-5">Featured</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">All Kids' Products</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Baby & Toddler</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Pre-School</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Grade School</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jordan</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Clothing Size Guide</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Shoes Size Guide</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Clearance</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">New Releases</li>
                <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Best Sellers</li>
            </ul>
        </div>
    </div>
    <!-- Small screen -->
    <div class="max-w-[900px] md:hidden block mx-auto p-3 mt-14 mb-4 pl-4"> 
        <div class="flex flex-col gap-20 text-gray-500"> 
            <div>
                <div>
                    <button id="kidsShoesBtn" class="text-black/95 mb-5">Kid's Shoes</button>
                    <div id="kidsShoesContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">$70 & Under</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">easy On & Off</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jordan</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Basketball</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Running</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Soccer</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Football</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Baseball</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Skateboarding</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Lifestyle</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">New Releases</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button id="kidsClothingBtn" class="text-black/95 mb-5">Kid's Clothing</button>
                    <div id="kidsClothingContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Joggers & Sweatpants</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Swimwear</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jackets & Vests</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">T-Shirts & Tops</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Hoodies & Sweatshirts</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Shorts</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Pants & Tights</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Compression & Nike Pro</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button id="kidsGearBtn" class="text-black/95 mb-5">Kid's Gear</button>
                    <div id="kidsGearContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">All Kids' Gear</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Backpacks & Bags</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Gloves</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Hats & Headbands</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Socks</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Sleeve & Arm Bands</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button id="kidsFeaturedBtn" class="text-black/95 mb-5">Featured</button>
                    <div id="kidsFeaturedContent" class="h-0 overflow-hidden duration-500">
                        <ul class="pl-4">
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">All Kids' Products</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Baby & Toddler</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Pre-School</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Grade School</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Jordan</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Clothing Size Guide</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Shoes Size Guide</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Clearance</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">New Releases</li>
                            <li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">Best Sellers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </div> 

    `
}
// Custom element class definition
class SubFooter extends HTMLElement {
    constructor() {
        super();
    }
    // Callback function when the element is connected to the DOM
    connectedCallback() {
        this.innerHTML = subFooter();
        this.setUpEventListener();
    }
    setUpEventListener() {
    this.sideDropdown("kidsShoesBtn", "kidsShoesContent", "h-[420px]")
    this.sideDropdown("kidsClothingBtn", "kidsClothingContent", "h-[310px]")
    this.sideDropdown("kidsGearBtn", "kidsGearContent", "h-[240px]")
    this.sideDropdown("kidsFeaturedBtn", "kidsFeaturedContent", "h-[380px]")
    }
    // Function for dropdown
    sideDropdown(btn, content, h) {
        const Btn = this.querySelector(`#${btn}`);
        const Content = this.querySelector(`#${content}`);

        Btn.addEventListener("click", function () {
            Content.classList.toggle(`${h}`)
        })
    }
}
// Define the custom element with the specified name
customElements.define("sub-footer-content", SubFooter);
