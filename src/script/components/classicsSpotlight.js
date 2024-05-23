const classicsSpotlight = (data) => {
    return `
    <!-- classics -->

    <div class="max-w-[1850px] mx-auto p-3 mt-16 relative overflow-hidden">
        <h2 class="text-2xl my-8">Classics Spotlight</h2> 
        <div id="classic"  class="md:overflow-hidden overflow-x-auto">
            <div class="flex gap-4 items-center cursor-pointer py-2 mb-10">
            ${data.map((item) => {
                return `
                <div class="w-full">
                <div class="min-[600px]:w-[450px] min-[600px]:h-[480px] w-[320px] h-[340x]">
                    <img src="${item.img}" alt="">
                </div>
            </div>
                `
            }).join("")}

             
                <div class="md:flex hidden absolute justify-between items-center w-full"> 
                    <div class="pl-6"> 
                        <button id="left-classic" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center"> 
                            <img src="../../images/home/trending/left-chevron.png" alt="" class="w-[20px] "> 
                        </button> 
                    </div> 
                    <div class="pr-12"> 
                        <button id="right-classic" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center"> 
                            <img src="../../images/home/trending/chevron.png" alt="" class="w-[20px]"> 
                        </button> 
                    </div> 
                </div>
            </div>
        </div>
    </div>

    `
}
// create function to store data
const classicSpotlightArr = [
    {
        img : "../../images/home/classics/nike-just-do-it(5).jpg"
    },
    {
        img : "../../images/home/classics/nike-just-do-it(6).jpg"
    },
    {
        img : "../../images/home/classics/nike-just-do-it(7).jpg"
    },
    {
        img : "../../images/home/classics/nike-just-do-it(8).png"
    },
    {
        img : "../../images/home/classics/nike-just-do-it(9).jpg"
    }
]

export function createClassicSpotlight(data,componentName){
    class ClassicsSpotlight extends HTMLElement {
        connectedCallback(){
            this.innerHTML = classicsSpotlight(data);
            const classic= this.querySelector("#classic");
            const left_classic = this.querySelector("#left-classic");
            const right_classic = this.querySelector("#right-classic");
            // carousel
            function carousel(carousel_element, nextBtn, backBtn){
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
            carousel(classic,right_classic, left_classic)
        }
    }
    customElements.define(componentName ? componentName : "classics-spotlight-content", ClassicsSpotlight);
}
createClassicSpotlight(classicSpotlightArr)