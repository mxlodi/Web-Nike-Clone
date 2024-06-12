// Function to generate the HTML for the classics spotlight section
const classicsSpotlight = (data) => {
    return `
    <!-- Classics -->

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
                        <button id="leftClassic" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center"> 
                            <img src="../../images/home/trending/left-chevron.png" alt="" class="w-[20px] "> 
                        </button> 
                    </div> 
                    <div class="pr-12"> 
                        <button id="rightClassic" class="bg-[#e5e5e5] w-10 h-10 rounded-full flex justify-center items-center"> 
                            <img src="../../images/home/trending/chevron.png" alt="" class="w-[20px]"> 
                        </button> 
                    </div> 
                </div>
            </div>
        </div>
    </div>

    `
};
// Array containing data for the "Classics Spotlight" items
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
];
// Function to create and define a custom element for classics spotlight section
export function createClassicSpotlight(data,componentName){
     // Custom element class definition
        class ClassicsSpotlight extends HTMLElement {
        // Callback function when the element is connected to the DOM
        connectedCallback(){
            // Set the inner HTML using the classicsSpotlight function
            this.innerHTML = classicsSpotlight(data);
             // Query selectors for the carousel element and navigation buttons
            const classic= this.querySelector("#classic");
            const leftClassic = this.querySelector("#leftClassic");
            const rightClassic = this.querySelector("#rightClassic");
             // Function to implement carousel functionality
            function carousel(carousel_element, nextBtn, backBtn){
                // Event listener for the next button
              nextBtn.addEventListener("click", () => {
                carousel_element.scrollBy({
                  left: 625,
                  behavior: "smooth"
                })
              })
              // Event listener for the back button
              backBtn.addEventListener("click", () => {
                carousel_element.scrollBy({
                  left: -625,
                  behavior: "smooth"
                })
              })
            }
            carousel(classic,rightClassic, leftClassic)
        }
    }
    customElements.define(componentName ? componentName : "classics-spotlight-content", ClassicsSpotlight);
};
createClassicSpotlight(classicSpotlightArr);