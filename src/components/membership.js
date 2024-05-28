const membership = (arr) => {
    return `
    <!-- Nike Membership --> 
    <div class="max-w-[1850px] mx-auto p-3 mt-10"> 
        <div class="flex items-center justify-between"> 
            <h2 class="text-2xl">Member Benefits</h2> 
            <div class="flex items-center gap-4">
                <button class="hover:text-gray-500">
                    Sign Up
                </button>
                <div class="md:flex hidden gap-5"> 
                    <button id="left-membership" class="bg-[#e5e5e5] size-10 rounded-full flex justify-center items-center" > 
                        <img src="../../images/home/trending/left-chevron.png" alt="" class="max-w-[20px]"> 
                    </button> 
                    <button id="right-membership" class="bg-[#e5e5e5] size-10 rounded-full flex justify-center items-center"> 
                        <img src="../../images/home/trending/chevron.png" alt="" class="max-w-[20px]"> 
                    </button> 
                </div> 
            </div>
        </div> 
    </div>
    <div id="membership" class="max-w-[1850px] mx-auto p-3 mt-2 cursor-pointer flex gap-3 overflow-x-scroll"> 
    ${arr.map((item) => {

        return `
            <!-- CARD 1 --> 
            <div class="w-full mb-8"> 
                <div class="min-[600px]:w-[610px] min-[600px]:h-[748px] w-[412px] h-[515px] relative"> 
                    <img src="${item.img}" alt="Member Interests" class="w-full h-full  object-cover"> 
                    <div class="absolute bottom-8 left-8 text-white"> 
                        <p class="font-light">${item.text1}</p> 
                        <h2 class="text-2xl mb-5 font-light">${item.text2}</h2> 
                        <button class="bg-white px-4 py-1.5 rounded-full text-black/90 mt-3 hover:bg-gray-200">${item.button}</button> 
                    </div> 
                </div> 
            </div>
        `
    }).join("")}
    </div>
    `
}

const membershipArr = [
{
    img : "../../images/home/membership/nike-just-do-it(20).jpg",
    text1 : "Member Product",
    text2 : "Your Exclusive Access",
    button : "Shop"
},
{
    img : "../../images/home/membership/nike-just-do-it(21).jpg",
    text1 : "Member Rewards",
    text2 : "How We Say Thank You",
    button : "Celebrate"
},
{
    img : "../../images/home/membership/nike-just-do-it(22).jpg",
    text1 : "Sports & Wellness Apps",
    text2 : "Movement Where You're At",
    button : "Move"
},
{
    img : "../../images/home/membership/nike-just-do-it(23).jpg",
    text1 : "Nike By You",
    text2 : "Your Customization Service",
    button : "Customize"
},
{
    img : "../../images/home/membership/nike-just-do-it(24).jpg",
    text1 : "SNKRS",
    text2 : `Your Ultimate <br> Sneaker Community`,
    button : "Explore"
},
{
    img : "../../images/home/membership/nike-just-do-it(25).jpg",
    text1 : "Member Interests",
    text2 : "Shop Your Way",
    button : "Add Interests"
},
];

export function createMembership (arr, componentName){

    class Membership extends HTMLElement {
        connectedCallback(){
            this.innerHTML = membership(arr);
            // call id to use
            const leftMembershipButton = this.querySelector("#left-membership");
            const rightMembershipButton = this.querySelector("#right-membership");
            const membershipSlider = this.querySelector("#membership");
            // carousel function
            function  carousel(carousel_element, nextBtn, backBtn){
                nextBtn.addEventListener("click", () => {
                  carousel_element.scrollBy({
                    left: 625,
                    behavior: "smooth"
                  })
                })
                backBtn.addEventListener("click", () => {
                  carousel_element.scrollBy({
                    left: -625,
                    behavior: "smooth"
                  })
                })
            }
            // call the function to use
            carousel(membershipSlider,rightMembershipButton ,leftMembershipButton);
        }
    }

    customElements.define(componentName ? componentName : "membership-benefits-content" ,Membership);
};
createMembership(membershipArr);