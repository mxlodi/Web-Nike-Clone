const explore = (arr) => {
    return `
    <div class="max-w-[1850px] mx-auto p-3 mt-10">
        <p class="text-2xl">More to Explore</p>
    </div>
    <div class="max-w-[1850px] mx-auto p-3 flex gap-3 md:overflow-hidden overflow-x-scroll">

    ${arr.map((item) => {
        return `
        <div class="w-full"> 
            <div class="md:w-full w-[400px] relative"> 
                <img src="${item.img}" alt="" class="w-full h-full  object-cover"> 
                <div> 
                    <p class="text-[19.5px] text-black/90 mt-4">${item.title}</p> 
                    <h1 class="text-black roboto underline underline-offset-4 hover:text-black/70 decoration-2 text-sm py-7">${item.button}</h1>
                </div> 
            </div> 
        </div>
        `
    }).join("")}
    </div>
    `
}
const exploreArr = [
{
    img : "../../images/kids/explore/pink-nike.jpeg",
    title : "Shoes $70 & Under",
    button : "Shop"
},
{
    img : "../../images/kids/explore/red-nike.jpeg",
    title : "New from Nike Basketball",
    button : "Shop"
},
{
    img : "../../images/kids/explore/small-nike.jpeg",
    title : "Easy On & Off Shoes",
    button : "Shop"
}
]

class Explore extends HTMLElement{
    connectedCallback(){
        this.innerHTML = explore (exploreArr);
    }
}

customElements.define("explore-content", Explore);