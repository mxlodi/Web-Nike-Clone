// Function to generate the footer HTML 
const footer = () => {
    return `
    <footer class="bg-black md:mt-20 mt-0  text-[#ccc]">
        <div class="max-w-[1400px] mx-auto py-10">
            <div class="flex w-full justify-between">
            <div
                class="w-full flex flex-wrap justify-between text-[#ccc] tracking-tight px-8">
                <ul class="oswald-bold tracking-wider md:translate-y-0 translate-y-10 text-[13px] text-white/80">
                <li class="md:mb-3 mb-6 ">RESOURCES</li>
                <li class="md:mb-3 mb-6 ">GIFT CARDS</li>
                <li class="md:mb-3 mb-6 ">FIND A STORE</li>
                <li class="md:mb-3 mb-6 ">BECOME A MEMBER</li>
                <li class="md:mb-3 mb-6 ">NIKE X NBA</li>
                <li class="md:mb-3 mb-6 ">NIKE JOURNAL</li>
                <li class="md:mb-3 mb-6 ">Site Feedback</li> 
                </ul>
                <ul class="md:block hidden">
                <li class="mb-3 hover:text-white text-[13px] text-white/80 oswald-bold tracking-wider"><a href="">HELP</a></li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Get Help</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Order Status</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Shipping and Delivery</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Returns</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Order Collection</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Payment Options</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Gift Card Balance</li>
                </ul>
                <ul class="md:block hidden">
                <li class="mb-3 hover:text-white text-[13px] text-white/80 oswald-bold tracking-wider"><a href="">COMPANY</a></li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">About Nike</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">News</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Careers</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Investors</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Purpose</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Substainability</li>
                </ul>
                <ul class="md:block hidden">
                <li class="mb-3 hover:text-white text-[13px] text-white/80 oswald-bold tracking-wider">
                    <a href="">PROMOTIONS & DISCOUNTS</a>
                </li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Student</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Military</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Teacher</li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">
                    First Responders & Medical Professionals
                </li>
                <li class="text-[#7e7e7e] mb-3 text-[13.5px] hover:text-white font-sans">Birthday</li>
                </ul>
            </div>
            <!-- icons in big screen -->
            <div class="md:block hidden p-3">
                <div class="flex gap-4 ">
                <button class="p-1 rounded-full w-8 h-8 bg-[#7e7e7e] hover:bg-white/80">
                    <a href=""
                    ><img src="../../images/home/footer/social.png" alt=""
                    /></a>
                </button>
        
                <button class="p-1 rounded-full w-8 h-8 bg-[#7e7e7e] hover:bg-white/80">
                    <a href=""
                    ><img src="../../images/home/footer/facebook.png" alt=""
                    /></a>
                </button>
        
                <button class="p-1 rounded-full w-8 h-8 bg-[#7e7e7e] hover:bg-white/80">
                    <a href=""
                    ><img src="../../images/home/footer/social (1).png" alt=""
                    /></a>
                </button>
        
                <button class="p-1 rounded-full w-8 h-8 bg-[#7e7e7e] hover:bg-white/80">
                    <a href=""
                    ><img src="../../images/home/footer/instagram.png" alt=""
                    /></a>
                </button>
                </div>
            </div>
            </div>
        </div>
        <div>
            <div class="p-5 md:hidden block text-[13px] text-white/80">
            <div id="helpBtn" class=" oswald-bold cursor-pointer flex justify-between tracking-wider pl-3 mb-2 ">
                <h1>HELP</h1>
                <button class=" "><img id="openIconHelp" src="../../images/home/footer/icons8-plus (1).svg" class="w-4 h-4 block" alt=""></button> 
                <button id="closeIconHelp" class="w-4 h-4 hidden" ><img  src="../../images/home/footer/icons8-minus-24.png"  alt=""></button>
            </div>
            <div id="helpBtnContent" class="hidden cursor-pointer">
                <ul class="pl-3 text-[#7e7e7e]">
                    <li class="mb-3 hover:text-white">Get Help</li>
                    <li class="mb-3 hover:text-white">Order Status</li>
                    <li class="mb-3 hover:text-white">Shipping and Delivery</li>
                    <li class="mb-3 hover:text-white">Returns</li>
                    <li class="mb-3 hover:text-white">Order Cancellation</li>
                    <li class="mb-3 hover:text-white">Payment Options</li>
                    <li class="mb-3 hover:text-white">Gift Card Balance</li>
                    <li class="mb-3 hover:text-white">Contact Us</li>
                </ul>
            </div>
            <div class="py-6">
                <div id="companyBtn" class="transition duration-150 ease-in-out oswald-bold cursor-pointer flex justify-between tracking-wider pl-3 mb-2">
                <h1>COMPANY</h1> 
                <button class=" "><img id="openIconCompany" src="../../images/home/footer/icons8-plus (1).svg" class="w-4 h-4 block" alt=""></button> 
                <button id="closeIconCompany" class="w-4 h-4 hidden" ><img src="../../images/home/footer/icons8-minus-24.png"alt=""></button>
                </div>
                <div id="companyBtnContent" class="hidden cursor-pointer">
                    <ul class="pl-3 text-[#7e7e7e]">
                        <li class="mb-3 hover:text-white">About Nike</li>
                        <li class="mb-3 hover:text-white">News</li>
                        <li class="mb-3 hover:text-white">Careers</li>
                        <li class="mb-3 hover:text-white">Investors</li>
                        <li class="mb-3 hover:text-white">Purpose</li>
                        <li class="mb-3 hover:text-white">Sustainability</li>
                    </ul>
                </div>
            </div>
            <div id="promotionBtn" class="oswald-bold cursor-pointer flex justify-between tracking-wider pl-3 mb-2">
                <h1>PROMOTIONS & DISCOUNTS</h1> 
                <button class=" "><img id="openIconPromotion" src="../../images/home/footer/icons8-plus (1).svg" class="w-4 h-4 block" alt=""></button>
                <button id="closeIconPromotion" class="w-4 h-4 hidden"><img src="../../images/home/footer/icons8-minus-24.png" alt=""></button> 
            </div>
            <div id="promotionBtnContent" class="hidden cursor-pointer">
                <ul class="pl-3 text-[#7e7e7e]">
                    <li class="mb-3 hover:text-white">Student</li>
                    <li class="mb-3 hover:text-white">Military</li>
                    <li class="mb-3 hover:text-white">Teacher</li>
                    <li class="mb-3 hover:text-white">First Responders & Medical Professionals</li>
                    <li class="mb-3 hover:text-white">Birthday</li>
                </ul>
            </div>
            </div>
            <!-- Icon in small screen -->
            <div class="pl-8 md:hidden block">
                <div class="flex gap-4 ">
                <button class="p-1 rounded-full w-8 h-8 bg-[#7e7e7e] hover:bg-white/80">
                    <a href=""
                    ><img src="../../images/home/footer/social.png" alt=""
                    /></a>
                </button>
                <button class="p-1 rounded-full w-8 h-8 bg-[#7e7e7e] hover:bg-white/80">
                    <a href=""
                    ><img src="../../images/home/footer/facebook.png" alt=""
                    /></a>
                </button>

                <button class="p-1 rounded-full w-8 h-8 bg-[#7e7e7e] hover:bg-white/80">
                    <a href=""
                    ><img src="../../images/home/footer/social (1).png" alt=""
                    /></a>
                </button>
                <button class="p-1 rounded-full w-8 h-8 bg-[#7e7e7e] hover:bg-white/80">
                    <a href=""
                    ><img src="../../images/home/footer/instagram.png" alt=""
                    /></a>
                </button>
                </div>
            </div>
            <!-- U.S.'s icons -->
            <div class="max-w-[1400px] w-full gap-10 mx-auto p-8 flex md:flex-row flex-col justify-between md:items-end">
                <div class="flex md:flex-row flex-col md:items-end gap-6">
                <a class="flex gap-1 font-sans text-[13.5px]" href="">
                    <button class="w-4 h-4">
                    <img src="../../images/home/footer/location-bw.png" alt="" />
                    </button>
                    <img src="" alt="" />
                    United State
                </a>
                <p class="text-[#7e7e7e] text-[13.5px]">
                    © 2024 Nike, Inc. All Rights Reserved
                </p>
                </div>
                <ul class="md:w-[630px] flex md:flex-row flex-wrap flex-col justify-end gap-7">
                    <li class="text-[#7e7e7e] text-[13.5px]"><a href="#">Guides</a></li>
                    <li class="text-[#7e7e7e] hover:text-white text-[13.5px]"><a href="#">Terms of Sale</a></li>
                    <li class="text-[#7e7e7e] hover:text-white text-[13.5px]"><a href="#">Terms of Use</a></li>
                    <li class="text-[#7e7e7e] hover:text-white text-[13.5px]">
                    <a href="#">Nike Privacy Policy</a>
                    </li>
                    <li class="text-[#7e7e7e] hover:text-white text-[13.5px]">
                    <a href="#"><button>
                        <img src="../../images/home/footer/image.png" alt="" /></button
                        >Your Privacy Choices</a >
                    </li>
                    <li>
                    <a href="" class="text-[#7e7e7e] hover:text-white text-[13.5px]">CA Supply Chains Act</a>
                    </li>
                </ul>
            </div>
        </div>
        </footer>
    `
};
// Custom element class definition
class Footer extends HTMLElement{
    // Method called when the element is added to the DOM
    connectedCallback(){
        // Set the inner HTML of the custom element to the footer HTML
        this.innerHTML = footer ();
        // Get references to the buttons for the accordion sections
        const helpBtn = document.getElementById("helpBtn");
        const companyBtn = document.getElementById("companyBtn");
        const promotionBtn = document.getElementById("promotionBtn");
        // Add event listeners to the accordion buttons to toggle their respective sections
        helpBtn.addEventListener("click", function() {
            const content = document.getElementById("helpBtnContent");
            const openIcon = document.getElementById("openIconHelp");
            const closeIcon = document.getElementById("closeIconHelp");

            content.classList.toggle("hidden");
            content.classList.toggle("accordion-content");
            helpBtn.classList.toggle("active");
            // Toggle visibility of the open/close icons
            if (openIcon.classList.contains("hidden")) {
                openIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
            } else {
                openIcon.classList.add("hidden");
                closeIcon.classList.remove("hidden");
            }
        });

        companyBtn.addEventListener("click", function() {
            const content = document.getElementById("companyBtnContent");
            const openIcon = document.getElementById("openIconCompany");
            const closeIcon = document.getElementById("closeIconCompany");

            content.classList.toggle("hidden");
            content.classList.toggle("accordion-content");
            companyBtn.classList.toggle("active");
            // Toggle visibility of the open/close icons
            if (openIcon.classList.contains("hidden")) {
                openIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
            } else {
                openIcon.classList.add("hidden");
                closeIcon.classList.remove("hidden");
            }
        });

        promotionBtn.addEventListener("click", function() {
            const content = document.getElementById("promotionBtnContent");
            const openIcon = document.getElementById("openIconPromotion");
            const closeIcon = document.getElementById("closeIconPromotion");

            content.classList.toggle("hidden");
            content.classList.toggle("accordion-content");
            promotionBtn.classList.toggle("active");
            // Toggle visibility of the open/close icons
            if (openIcon.classList.contains("hidden")) {
                openIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
            } else {
                openIcon.classList.add("hidden");
                closeIcon.classList.remove("hidden");
            }
        });
    }
};
// Define the custom element 
customElements.define("footer-component", Footer);