// Function to generate the HTML for the navbar section
const createNavbar = ()=>{
    return `
    
<!-- Header -->
<div class="bg-[#f5f5f5] max-[960px]:hidden">
    <div class="max-w-[1850px] mx-auto p-3">
        <div class="flex justify-between">
            <div class="flex items-center">
                <a href="#">
                    <img src="../../images/home/header/jordan.png" alt="Jordan's Logo"
                        class="w-[30px] hover:opacity-50">
                </a>
                <a href="#">
                    <img src="../../images/home/header/converse.png" alt="Converse's Logo"
                        class="w-[30px]  hover:opacity-50">
                </a>
            </div>
            <div class="divide-x relative z-40 font-medium flex items-center font-sans text-[12px]">
                <div class="divide-x divide-black">
                    <button class="px-2 hover:text-gray-500">Find a Store</button>
                    <button id="helpBtn" class="px-2 hover:text-gray-500">Help</button>
                    <button class="px-2 hover:text-gray-500">Join Us</button>
                    <button class="px-2 hover:text-gray-500">Sign In</button>
                </div>
                <!-- help dropdown -->
                <div id="helpDropdown" class="absolute items-start hidden top-8 right-36 bg-white border w-[240px] h-[386px] p-6 py-2 rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                    <h1 class="my-4 text-[17px]">Help</h1>
                    <ul class="space-y-2 text-gray-500 text-[15px]">
                        <li class="hover:text-black">Order Status</li>
                        <li class="hover:text-black">Shipping & Delivery</li>
                        <li class="hover:text-black">Returns</li>
                        <li class="hover:text-black">Order Cancellation</li>
                        <li class="hover:text-black">Size Charts</li>
                        <li class="hover:text-black">Contact Us</li>
                        <li class="hover:text-black">Membership</li>
                        <li class="hover:text-black">Promotions & Discounts</li>
                        <li class="hover:text-black">Product Advice</li>
                        <li class="hover:text-black">Send Us Feedback</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Navbar -->
<nav id="navBar" class="bg-white z-[100] top-0">
    <div class="max-w-[1850px] mx-auto text-black h-full flex items-center justify-between relative">
        <a class="pl-2" href="../../pages/home/home.html">
            <img src="../../images/home/nav-bar/nike2.png" alt="" class="w-[70px] hover:opacity-50">
        </a>
        <ul class="md:flex h-[70px] items-center  text-center gap-4 hidden ml-[200px] robotobold text-black/85 text-[17px] tracking-wide">
                <li class="min-[955px]:flex items-center justify-center hidden hover:text-gray-500  h-full" id="newfeaturedHover"><a href="../../pages/newfeatured/newfeatured.html">New & Featured</a></li>
                <li class="min-[960px]:flex items-center justify-center hidden  hover:text-gray-500 h-full " id="menHover">
                <a href="../../pages/men/men.html">Men</a></li>
                <li class="min-[972px]:flex items-center justify-center hidden hover:text-gray-500  h-full" id="womenHover">
                <a href="../../pages/women/women.html">Women
                </a></li>
                <li class="min-[1032px]:flex items-center justify-center hidden hover:text-gray-500  h-full" id="kidsHover">
                <a href="../../pages/kids/kids.html">Kids
                </a></li>
            <li class="cursor-pointer min-[1090px]:flex items-center justify-center hidden hover:text-gray-500  h-full" id="accessoriesHover">Accessories</li>
            <li class="cursor-pointer min-[1155px]:flex items-center justify-center hidden hover:text-gray-500  h-full" id="saleHover">Sale</li>
        </ul>
        <div class="relative flex items-center pr-3">
            <input type="text"
                class="border border-[#f5f5f5] rounded-full p-1.5 pl-10 bg-[#f5f5f5] block max-[960px]:hidden"
                placeholder="Search">
            <img src="../../images/home/nav-bar/glass.png" alt=""
                class="absolute w-[22px]  rounded-full hover:bg-gray-200 left-[10px] opacity-90 block max-[960px]:hidden">
            <button class="size-10 rounded-full hover:bg-gray-200 min-[960px]:hidden flex">
                <img src="../../images/home/nav-bar/glass.png" alt=""
                class="absolute w-[25px] top-2 left-2">
            </button>
            <div class="flex items-center gap-1">
                <button class="size-10 min-[960px]:flex hidden items-center justify-center rounded-full hover:bg-gray-200">
                    <img src="../../images/home/nav-bar/heart.png" alt="" class="w-[20px]">
                </button>
                <button  class="size-10 flex items-center justify-center rounded-full hover:bg-gray-200">
                    <img src="../../images/home/nav-bar/market.png" alt="" class="w-[22px]">
                </button>
                <button class="size-10 min-[960px]:hidden flex items-center justify-center rounded-full hover:bg-gray-200">
                    <img src="../../images/home/nav-bar/user.png" alt=""
                    class="size-5 hidden  max-[960px]:block">
                </button>
                <button id="hamburgerBtn" class="items-center size-10 min-[960px]:hidden flex justify-center rounded-full hover:bg-gray-200">
                    <img src="../../images/home/nav-bar/hamburger (1).png" alt=""
                    class="w-[20px]">
                </button>
            </div>
        </div>
    </div>

    <!-- Drop down -->
    <div class="absolute w-full ">
        <!-- newfeatured dropdown -->
        <div id="newfeaturedDropdown" class="hidden md:flex  bg-white cursor-pointer left-0 text-black duration-300 z-50  
            h-0 w-full opacity-100 ">
            <div id="newfeaturedBelow" class="flex opacity-0 delay-200 pointer-events-none justify-center max-w-full mx-auto">
                <div class="flex gap-20">
                    <ul>
                        <li class="font-semibold mb-2.5 text-base  ">Jordan Family Days</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shop the
                            collection</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shop All
                            Jordan</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">New
                            Releases</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Men</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Women
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Kids
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Basketball</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base">New & Featured</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">New
                            Arrivals</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Best
                            Sellers</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Member
                            Product</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">New &
                            Upcoming Drops</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">SNKRS
                            Launch Calendar</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Mother's
                            Day Shop</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Add to
                            bag to See Price</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Sales:
                            Up tp 50% off</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base">Shop Classics</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Air
                            Force</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Dunk
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Air Max
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Blazer
                        </li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base">New For Men</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shoes
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Clothing
                        </li>
                        <li class="mb-2 font-semibold">New For Women</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shoes
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Clothing
                        </li>
                        <li class="mb-2 font-semibold">New For Kids</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shoes
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Clothing
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Men dropdown -->
        <div id="menDropdown" class="hidden md:flex bg-white cursor-pointer left-0 text-black duration-300 z-50  
        h-[0px] w-full opacity-100 ">
            <div id="menBelow" class="flex opacity-0 delay-200 pointer-events-none justify-center max-w-full mx-auto">
                <div class="flex gap-20">
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Jordan Family Days</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shop the
                            collection</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base">New & Featured</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">New
                            Arrivals</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Best
                            Sellers</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Customize with Nike by You</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Trending: Nike Life</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">New in
                            Basketball</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Add to
                            Bag to See Price</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Sales:
                            Up to 50% off</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">All Shoes</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Lifestyle</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Jordan
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Dunk
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Lifestyle Running</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Air Max
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Air
                            Force 1</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Training
                            & Gym</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Basketball</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Running
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Nike SB
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Sandals
                            & Slides</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Nike By
                            You</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shoes
                            $100 & Under</li>
                    </ul>
                    <ul>
                        <li class="mb-2 font-semibold">All Clothing</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Jordan
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Matching
                            Sets</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Big &
                            Tall</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Hoodies
                            & Sweatshirts</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Pants &
                            Tights</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Jackets
                            & Vests</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Tops &
                            T-Shirts</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shorts
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Underwear</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Socks
                        </li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Shop by Sport</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Basketball</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Soccer
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Running
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Tennis
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Baseball
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Football
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Training
                            & Gym</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Trail
                            Running</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Swimming
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Pickleball</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Women dropdown -->
        <div id="womenDropdown" class="hidden md:flex bg-white cursor-pointer left-0 text-black duration-300 z-50  
        h-[0px] w-full opacity-100 ">
            <div id="womenBelow" class="flex opacity-0 delay-200 pointer-events-none justify-center max-w-full mx-auto">
                <div class="flex gap-20">
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Jordan Family Days</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shop the
                            collection</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">New & Featured</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">New
                            Arrivals</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Best
                            Sellers</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Customize with Nike by You</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Trending: Nike Life</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">New in
                            Basketball</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Add to
                            Bag to See Price</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Sales:
                            Up to 50% off</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">All Shoes</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Lifestyle</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Jordan
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Dunk
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Lifestyle Running</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Air Max
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Air
                            Force 1</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Training
                            & Gym</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Basketball</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Running
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Nike SB
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Sandals
                            & Slides</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shoes
                            $100 & Under</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">All Clothing</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Jordan
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Matching
                            Sets</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Plus
                            Size</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Hoodies
                            & Sweatshirts</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Pants
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Skirts &
                            Dresses</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Bras
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Jackets
                            & Vests</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Tops &
                            T-Shirts</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Short
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Socks
                        </li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Shop by Sport</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Basketball</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Golf
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Soccer
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Running
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Tennis
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Fitness
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Yoga
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Track &
                            Field</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Softball
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Swimming
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Pickleball</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Kids dropdown -->
        <div id="kidsDropdown"  class="hidden md:flex bg-white cursor-pointer left-0 text-black duration-300 z-50  
        h-[0px] w-full opacity-100 ">
            <div id="kidsBelow" class="flex opacity-0 delay-200 pointer-events-none justify-center max-w-full mx-auto">
                <div class="flex gap-20">
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Jordan Family Days</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Shop the
                            collection</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">New & Featured</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Teen
                            Essentials</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Skate X
                            Lifestyle</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">New in
                            Basketball</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Add to
                            Bag to See Price</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Sales:
                            Up to 50% off</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Shoes by Size</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Bigs
                            Kids(1 - 7Y)</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Little
                            Kids(8C - 3Y)</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Baby &
                            Toddler(1C - 10C)</li>
                        <li class="font-semibold text-base mb-2 mt-4 ">All Shoes</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Lifestyle</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Jordan
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Dunk
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Air Max
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Air
                            Force 1</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Basketball</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Running
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Sandals
                            & Slides</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Clothing by Size</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Big
                            Kids(XS -XL)</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Little
                            Kids(4 - 7)</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Baby &
                            Toddler(0M - 4T)</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Extended
                            Sizing</li>
                        <li class="font-semibold text-base mb-2 mt-4">All Clothing</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Jordan
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Matching
                            Sets</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Tops &
                            T-Shirts</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Short
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Hoodies
                            & Sweatshirts</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Jackets
                            & Vests</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Pants &
                            Tights</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Skirts &
                            Dresses</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Socks
                        </li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Shop by Sport</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Basketball</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Golf
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Soccer
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Running
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Baseball
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Softball
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Tennis
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Dance
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Swimming
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Skateboarding</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Accessories dropdown -->
        <div id="accessoriesDropdown"  class="hidden md:flex bg-white cursor-pointer left-0 text-black duration-300 z-50  
        h-[0px] w-full opacity-100 ">
            <div id="accessoriesBelow" class="flex opacity-0 delay-200 pointer-events-none justify-center max-w-full mx-auto">
                <div class="flex gap-20">
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Featured</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">New
                            Summer Styles</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Sale: Up
                            to 50% Off</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">All Accessories</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Socks
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Bags &
                            Backpacks</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Hats &
                            Headwear</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Sunglasses & Eyewear</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Water
                            Bottles & Hydration</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Gloves
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Jordan
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Belts
                        </li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Shop by Sport</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">
                            Basketball</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Golf
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Soccer
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Running
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Tennis
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Baseball
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Football
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px] hover:text-black">Training
                            & Gym</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Sale dropdown -->
        <div id="saleDropdown" class="hidden md:flex bg-white cursor-pointer left-0 text-black duration-300 z-50  
        h-[0px] w-full opacity-100 ">
            <div id="saleBelow" class="flex opacity-0 delay-200 pointer-events-none justify-center max-w-full mx-auto">
                <div class="flex gap-20">
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Sale: Up to 50% Off</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Sales
                            Shoes</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Sales
                            Clothing</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Sales
                            Accessories</li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Men</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Shoes
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">
                            Accessories</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Shop All
                        </li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Women</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Shoes
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Clothing
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">
                            Accessories</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Shop All
                        </li>
                    </ul>
                    <ul>
                        <li class="font-semibold mb-2.5 text-base ">Kids</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Shoes
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Clothing
                        </li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">
                            Accessories</li>
                        <li class="mb-2.5 font-sans tracking-tight text-[#7d7d7d] text-[15px]">Shop All
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>

<!-- Hamburger -->
<div id="hamburgerContent" class="hidden fixed z-[100] top-0 right-0 w-full bg-black/20 backdrop-blur-sm h-screen">
    <div class=" max-w-[320px] w-full  fixed h-screen bg-white  right-0 z-[300] top-0 p-8">
            <div class="flex justify-end pr-2 mb-5 " id="crossBtn">
                <button class="size-10 flex items-center justify-center rounded-full hover:bg-gray-200">
                    <img class="w-4" src="../../images/home/nav-bar/close.png" alt="">
                </button>
            </div>
        <div class="pl-3">
            <div class="flex justify-between mb-5 cursor-pointer">
                <a href="../../pages/newfeatured/newfeatured.html" class="roboto text-[22px] ">New & Featured</a>
                <a href="../../pages/newfeatured/newfeatured.html">
                    <img class="w-8" src="../../images/home/nav-bar/chevron (1).png" alt="" >
                </a>
            </div>
            <div class="flex justify-between mb-5 cursor-pointer">
                <a href="../../pages/men/men.html" class="roboto text-[22px]">Men</a>
                <a href="../../pages/men/men.html">
                    <img class="w-8" src="../../images/home/nav-bar/chevron (1).png" alt="">
                </a>
            </div>
            <div class="flex justify-between mb-5 cursor-pointer">
                <a href="../../pages/women/women.html" class="roboto text-[22px]">Women</a>
                <a href="../../pages/women/women.html">
                    <img class="w-8" src="../../images/home/nav-bar/chevron (1).png" alt="">
                </a>
            </div>
            <div class="flex justify-between mb-5 cursor-pointer">
                <a href="../../pages/kids/kids.html" class="roboto text-[22px]">Kids</a>
                <a href="../../pages/kids/kids.html">
                    <img class="w-8" src="../../images/home/nav-bar/chevron (1).png" alt="">
                </a>
            </div>
            <div class="flex justify-between mb-5 cursor-pointer">
                <h1 class="roboto text-[22px]">Accessories</h1>
                <img class="w-8" src="../../images/home/nav-bar/chevron (1).png" alt="">
            </div>
            <div class="flex justify-between mb-5 cursor-pointer">
                <h1 class="roboto text-[22px]">Sale</h1>
                <img class="w-8" src="../../images/home/nav-bar/chevron (1).png" alt="">
            </div>
        </div>
        <div class="p-3 cursor-pointer">
            <div class="flex mb-5 justify-between w-[90px]">
                <img class="w-8" src="../../images/home/header/jordan.png" alt="">
                <h1 class="text-black/95">Jordan</h1>
            </div>
            <div class="flex justify-between w-[110px]">
                <img class="w-8" src="../../images/home/header/converse.png" alt="">
                <h1 class="text-black/95">Converse</h1>
            </div>
        </div>
        <div class="mt-20">
            <p class="roboto text-[#7d7d7d] text-medium text-xl">Become a Nike Member for the best products, inspiration and stories in
                sport. <span class="text-black/80 robotobold cursor-pointer">Learn more</span></p>
            <div class="mt-7">
                <button class="rounded-full mr-3 bg-black text-white border px-4 py-[7px] hover:bg-black/80 border-black roboto">Join
                    Us</button>
                <button class="rounded-full text-black border px-4 py-[7px] border-slate-400 hover:border-black/95 roboto">Sign In</button>
            </div>
        </div>
        <div class="mt-16 p-3">
            <div class="flex w-[75px] cursor-pointer justify-between mb-5">
                <img class="w-6" src="../../images/home/nav-bar/market.png" alt="">
                <h1>Bag</h1>
            </div> 
            <div class="flex w-[95px] cursor-pointer justify-between mb-5">
                <img class="w-6" src="../../images/home/nav-bar/delivery-box.png" alt="">
                <h1>Orders</h1>
            </div>
            <div class="flex w-[130px] cursor-pointer justify-between mb-5">
                <img class="w-6" src="../../images/home/nav-bar/shop.png" alt="">
                <h1>Find a Store</h1>
            </div>
            <div class="flex w-[75px] cursor-pointer justify-between mb-5">
                <img class="w-6" src="../../images/home/nav-bar/question-mark-outline-in-a-circle-hand-drawn-button.png"
                    alt="">
                <h1>Help</h1>
            </div>
        </div>
    </div>
</div>



    `
};
// Custom element class definition
class Navbar extends HTMLElement{

    constructor(){
        super();
    }
    // Callback function when the element is connected to the DOM
    connectedCallback(){
        this.innerHTML = createNavbar();
         // New & featured dropdown
    const navBar = document.querySelector("#navBar");

    const newfeaturedHover = document.getElementById("newfeaturedHover");
    const newfeaturedDropdown = document.getElementById("newfeaturedDropdown");
    const newfeaturedBelow = document.querySelector("#newfeaturedBelow");

    const menHover = document.querySelector("#menHover");
    const menDropdown = document.querySelector("#menDropdown");
    const menBelow = document.querySelector("#menBelow");

    const womenHover = document.querySelector("#womenHover");
    const womenDropdown = document.querySelector("#womenDropdown");
    const womenBelow = document.querySelector("#womenBelow");


    const kidsHover = document.querySelector("#kidsHover");
    const kidsDropdown = document.querySelector("#kidsDropdown");
    const kidsBelow = document.querySelector("#kidsBelow");


    const accessoriesHover = document.querySelector("#accessoriesHover");
    const accessoriesDropdown = document.querySelector("#accessoriesDropdown");
    const accessoriesBelow = document.querySelector("#accessoriesBelow");

    const saleHover = document.querySelector("#saleHover");
    const saleDropdown = document.querySelector("#saleDropdown");
    const saleBelow = document.querySelector("#saleBelow");


  dropdownMenu(newfeaturedHover,newfeaturedDropdown,newfeaturedBelow,"h-[340px]")
  dropdownMenu(menHover, menDropdown, menBelow, "h-[500px]" )
  dropdownMenu(womenHover, womenDropdown, womenBelow, "h-[490px]")
  dropdownMenu(kidsHover, kidsDropdown, kidsBelow, "h-[550px]")
  dropdownMenu(accessoriesHover, accessoriesDropdown, accessoriesBelow, "h-[340px]")
  dropdownMenu(saleHover, saleDropdown, saleBelow, "h-[330px]")


  //Function dropdown menu
    function dropdownMenu(btn,dropdown,text,h){
    // Mouseover the button
      btn.addEventListener("mouseover", () => {
        // Blur background
        const bgBlur = document.querySelector("#bgBlur");

        dropdown.classList.add(h);
        navBar.classList.add("sticky");
        text.classList.add("delay-200");
        text.classList.add("opacity-100","hover:text-black");
        text.classList.remove("pointer-events-none");
        bgBlur.classList.add("blur-sm");
        
      });
    //   Mouse over the dropdown container
      dropdown.addEventListener("mouseover", () => {
        dropdown.classList.add(h);
        text.classList.add("delay-200");
        text.classList.add("opacity-100");
        navBar.classList.add("sticky");
        text.classList.remove("pointer-events-none");
        bgBlur.classList.add("blur-sm");
      });

    //   Mouse out of the dropdown container
      dropdown.addEventListener("mouseout", () => {
        text.classList.add("pointer-events-none");
        dropdown.classList.remove(h);
        navBar.classList.remove("sticky");
        text.classList.remove("delay-200");
        text.classList.remove("opacity-100");
        bgBlur.classList.remove("blur-sm");
        
      });
    //   Mouse out of the button
      btn.addEventListener("mouseout", () => {
        text.classList.add("pointer-events-none");
        dropdown.classList.remove(h);
        navBar.classList.remove("sticky");
        text.classList.remove("delay-200");
        text.classList.remove("opacity-100");
        bgBlur.classList.remove("blur-sm");

      });
    }

    // Hamburger
    const hamburgerBtn = document.querySelector("#hamburgerBtn")
    const hamburgerContent = document.querySelector("#hamburgerContent")
    const crossBtn = document.querySelector("#crossBtn")
    // Add event listeners to the hamburger button to toggle hidden
    hamburgerBtn.addEventListener("click", () => {
      hamburgerContent.classList.toggle("hidden");
    
    })
    crossBtn.addEventListener("click", () => {
      hamburgerContent.classList.add("hidden");
    
    })


    // Help dropdown
    const helpBtn = document.querySelector("#helpBtn");
    const helpDropdown = document.querySelector("#helpDropdown");

    helpBtn.addEventListener("mouseover", () => {
      helpDropdown.classList.remove("hidden");
    })

    helpDropdown.addEventListener("mouseover", () => {
      helpDropdown.classList.remove("hidden");
    })

    helpBtn.addEventListener("mouseout", () => {
      helpDropdown.classList.add("hidden");
    })

    helpBtn.addEventListener("mouseout", () => {
      helpDropdown.classList.add("hidden");
    })


    }
};
// Define the custom element with the specified name
customElements.define('navbar-component', Navbar);