

const newFeaturedCategories = () => {
    return `
    <!-- Marquee -->
    <div class="bg-[#f5f5f5] h-[60px] flex justify-center items-center">
        <a class="roboto underline hover:no-underline" href="">Members : Free Shipping on Orders $50+</a>
    </div>
    <div class="max-w-[1850px] mx-auto px-3 duration-300">
        <!-- Header -->
        <header class="bg-white flex py-4 z-10 sticky top-0 items-center justify-between">
            <h2 class="text-black text-2xl hidden lg:flex tracking-wide">New Releases (1678)</h2>
            <h1 class="text-black/95 text-xl flex lg:hidden tracking-wide">New Releases</h1>
            <div class="flex items-center gap-4">
                <button class="flex items-center gap-2 text-black/95 text-[16px] tracking-wide py-6">Hide Filters <span><img class="size-6" src="../../images/newfeatured/icons/filter.png" alt=""></span></button>
                <button class="flex items-center gap-1 text-black/95 text-[16px] tracking-wide">Sort By <span><img class="size-6" src="../../images/newfeatured/icons/down-arrow.svg" alt=""></span></button>
            </div>
        </header>
        <div class="min-[960px]:hidden block">
            <ul class="flex gap-4 roboto flex-nowrap overflow-hidden text-nowrap">
                <li>Shoes</li>
                <li >Tops & T-Shirts</li>
                <li>Shorts</li>
                <li >Hoodies & Pullovers</li>
                <li >Jackets & Vests</li>
                <li >Pants & Tights</li>
                <li>Swimming</li>
                <li>Socks</li>
                <li>Accessories & Equipment</li>
            </ul>
            <!-- Small screen button-->
            <div  class="flex items-center my-7 justify-between gap-4 mb-4">
                <h1>Pick Up Today</h1>
                <div class="bg-gray-300 rounded-full w-11 h-6 relative flex items-center pl-1">
                    <div id="innerBtnSmall" class="bg-white/90 left-1 duration-500 rounded-full size-5 absolute" ></div>
                </div>
            </div>
        </div>
        <main class="flex">
            <div class="min-[960px]:block hidden sticky top-10 px-4 py-8 w-[260px]  bg-white overflow-y-scroll">
                <div class="flex items-center justify-between gap-4 mb-2">
                    <!-- big screen button-->
                    <h1>Pick Up Today</h1>
                    <div class="bg-gray-300 rounded-full w-11 h-6 relative flex items-center pl-1">
                        <div id="innerBtn" class="bg-white/90 left-1 duration-500 rounded-full size-5 absolute" ></div>
                    </div>
                </div>
                <hr class="my-7"/>
                <button class="roboto text-left">
                    <ul>
                        <li class="my-1.5">Shoes</li>
                        <li class="my-1.5">Tops & T-Shirts</li>
                        <li class="my-1.5">Shorts</li>
                        <li class="my-1.5">Hoodies & Pullovers</li>
                        <li class="my-1.5">Jackets & Vests</li>
                        <li class="my-1.5">Pants & Tights</li>
                        <li class="my-1.5">Swimming</li>
                        <li class="my-1.5">Socks</li>
                        <li class="my-1.5">Accessories & Equipment</li>
                    </ul>
                    <hr class="mt-7 ">
                </button>
                <!-- Accordion -->
                <div class="divide-y-2 divide-gray-200 ">
                    <div class="py-2">
                        <button class="w-full" id="genderBtn">
                            <h3 class="items-center flex justify-between gap-4 bg-white">
                                Gender
                                <span><img class="size-8" src="../../images/newfeatured/icons/down-arrow.svg" alt="" /></span>
                            </h3>
                        </button>
                        <div id="genderContent" class="h-0 overflow-hidden duration-500">
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Men
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Women
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Unisex
                            </h1>
                        </div>
                    </div>
                    <div class="py-2">
                        <button class="w-full" id="kidsBtn">
                            <h3 class="flex items-center justify-between gap-4 bg-white">
                                Kids
                                <span><img class="size-8" src="../../images/newfeatured/icons/down-arrow.svg" alt="" /></span>
                            </h3>
                        </button>
                        <div id="kidsContent" class="h-0 overflow-hidden duration-500">
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Boys
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Girls
                            </h1>
                        </div>
                    </div>
                    <div class="py-2">
                        <button class="w-full" id="saleBtn">
                            <h3 class="flex items-center justify-between gap-4 bg-white">
                                Sale & Offers
                                <span><img class="size-8" src="../../images/newfeatured/icons/down-arrow.svg" alt="" /></span>
                            </h3>
                        </button>
                        <div id="saleContent" class="h-0 overflow-hidden duration-500">
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Price in
                                Bag
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Sale
                            </h1>
                        </div>
                    </div>
                    <div class="py-2">
                        <button class="w-full" id="colorBtn">
                            <h3 class="flex items-center justify-between gap-4 bg-white">
                                Color
                                <span><img class="size-8" src="../../images/newfeatured/icons/down-arrow.svg" alt="" /></span>
                            </h3>
                        </button>
                        <div id="colorContent" class="grid grid-cols-3 items-center w-[196px] h-0 overflow-hidden duration-500">
                            <div>
                                <button class="size-7 bg-black rounded-full"></button>
                                <h1 class="text-sm">Black</h1>
                            </div>
                            <div>
                                <button class="size-7 bg-[#1890c8] rounded-full"></button>
                                <h1 class="text-sm">Blue</h1>
                            </div>
                            <div>
                                <button class="size-7 bg-[#825d41] rounded-full"></button>
                                <h1 class="text-sm">Brown</h1>
                            </div>
                            <div>
                                <button class="size-7 bg-[#7bba3b] rounded-full"></button>
                                <h1 class="text-sm">Green</h1>
                            </div>
                            <div>
                                <button class="size-7 bg-[#808080] rounded-full"></button>
                                <h1 class="text-sm">Grey</h1>
                            </div>
                            <div>
                                <button class="relative size-7">
                                    <img class="absolute bottom-3 top-1.5 rounded-full size-7 " src="../../images/newfeatured/icons/seamless-abstract-geometric-pattern-with-stickers-of-rhombus-shape-2C56WC5.jpg" alt="">
                                </button>
                                <h1 class="text-sm my-3">Multi-Color</h1>
                            </div>
                            <div>
                                <button class="size-7 bg-[#f36b26] rounded-full"></button>
                                <h1 class="text-sm">Orange</h1>
                            </div>
                            <div>
                                <button class="size-7 bg-[#f0728f] rounded-full"></button>
                                <h1 class="text-sm">Pink</h1>
                            </div>
                            <div>
                                <button class="size-7 bg-[#8d429f] rounded-full"></button>
                                <h1 class="text-sm">Purple</h1>
                            </div>
                            <div>
                                <button class="size-7 bg-[#e7352a] rounded-full"></button>
                                <h1 class="text-sm">Red</h1>
                            </div>
                            <div>
                                <button class="size-7 bg-white border border-solid border-gray-200 rounded-full"></button>
                                <h1 class="text-sm">White</h1>
                            </div>
                            <div>
                                <button class="size-7 bg-[#fed533] rounded-full"></button>
                                <h1 class="text-sm">Yellow</h1>
                            </div>
                        </div>
                    </div>
                    <div class="py-2">
                        <button class="w-full" id="shopBtn">
                            <h3 class="flex items-center justify-between gap-4 bg-white">
                                Shop by Price
                                <span><img class="size-8" src="../../images/newfeatured/icons/down-arrow.svg" alt="" /></span>
                            </h3>
                        </button>
                        <div id="shopContent" class="h-0 overflow-hidden duration-500">
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" />
                                </span>$0 - $
                                25
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" />
                                </span>$25 -
                                $50
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" />
                                </span>$50 -
                                $150
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" />
                                </span>$100 -
                                $150
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/plus (3).png" alt="" />
                                </span>More
                            </h1>
                        </div>
                    </div>
                    <div class="py-2">
                        <button class="w-full" id="brandBtn">
                            <h3 class="flex items-center justify-between gap-4 bg-white">
                                Brand
                                <span><img class="size-8" src="../../images/newfeatured/icons/down-arrow.svg" alt="" /></span>
                            </h3>
                        </button>
                        <div id="brandContent" class="h-0 overflow-hidden duration-500">
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Nike
                                Sportswear
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Jordan
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Nike By
                                You
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" /></span>Converse
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span><img class="size-4" src="../../images/newfeatured/icons/plus (3).png" alt="" /></span>More
                            </h1>
                        </div>
                    </div>
                    <div class="py-2">
                        <button class="w-full" id="sportsBtn">
                            <h3 class="flex items-center justify-between text-nowrap gap-4 bg-white">
                                Sports & Activities
                                <span><img class="size-8" src="../../images/newfeatured/icons/down-arrow.svg" alt="" /></span>
                            </h3>
                        </button>
                        <div id="sportsContent" class="h-0 overflow-hidden duration-500">
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/square.png"
                                        alt="" />
                                </span>Lifestyle
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" />
                                </span>Running
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" />
                                </span>Training
                                & Gym
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/square.png"
                                        alt="" />
                                </span>Basketball
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/plus (3).png" alt="" />
                                </span>More
                            </h1>
                        </div>
                    </div>
                    <div class="py-2">
                        <button class="w-full" id="bestBtn">
                            <h3 class="flex items-center justify-between gap-4 bg-white">
                                Best For
                                <span>
                                    <img class="size-8" src="../../images/newfeatured/icons/down-arrow.svg" alt="" />
                                </span>
                            </h3>
                        </button>
                        <div id="bestContent" class="h-0 overflow-hidden duration-500">
                            <h1 class="flex gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" />
                                </span>Wet
                                Weather Conditions
                            </h1>
                            <h1 class="flex items-center gap-2">
                                <span>
                                    <img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" />
                                </span>Cold
                                Weather
                            </h1>
                            <h1 class="flex gap-2">
                            <span>
                                <img class="size-4" src="../../images/newfeatured/icons/square.png" alt="" />
                            </span>Dry
                            Weather     Conditions
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <!-- New featured card content -->
            <div class="w-full h-auto">
                <card-content></card-content>
            </div>
        </main>
    </div>
    `
};
// Custom element class
class NewFeaturedCategories extends HTMLElement{
    constructor(){
        super();
    }
    // Callback function when the element is connected to the DOM
    connectedCallback(){
        this.innerHTML = newFeaturedCategories();
        // Call function to use
        sideDropdown("genderBtn","genderContent","h-[80px]")
        sideDropdown("kidsBtn", "kidsContent", "h-[65px]")
        sideDropdown("saleBtn","saleContent", "h-[65px]")
        sideDropdown("colorBtn", "colorContent", "h-[290px]")
        sideDropdown("shopBtn", "shopContent", "h-[135px]")
        sideDropdown("brandBtn", "brandContent", "h-[140px]")
        sideDropdown("sportsBtn", "sportsContent", "h-[140px]")
        sideDropdown("bestBtn", "bestContent", "h-[120px]")
        // Function to implement dropdown functionality
        function sideDropdown(btn,content,h){
        const button = document.querySelector(`#${btn}`);
        const contents = document.querySelector(`#${content}`);
        
        button.addEventListener("click",function(){
            contents.classList.toggle(`${h}`)
        })
        }

        // Pick up button
        const innerBtn = document.querySelector("#innerBtn");
        const innerBtnSmall = document.querySelector("#innerBtnSmall");

        innerBtn.addEventListener("click", () => {
        innerBtn.classList.toggle("left-5")
        })

        innerBtnSmall.addEventListener("click", () => {
        innerBtnSmall.classList.toggle("left-5")
        })

    }
};
// Define the custom element with the specified name
customElements.define("newfeatured-categories-content", NewFeaturedCategories);