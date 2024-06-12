const explore = (arr,arr2) => {
    return `
    <!-- explore title -->
    <div class="max-w-[1850px] mx-auto p-3 mt-16">
        <h2 class="text-2xl mb-6 ml-3">More to Explore</h2>
        </div>
            <!-- explore card -->
            <div class="max-w-[1850px] mx-auto p-3 gap-3 min-[600px]:flex hidden md:overflow-hidden overflow-x-scroll">
            ${arr.map((item) => {
                return `
                <!-- card 1 -->
                <div class="w-full">
                    <div class="md:w-full w-[400px] relative">
                        <img src="${item.img}" alt="Member Product"
                            class="w-full h-full  object-cover">
                        <div>
                            <p class="text-[19.5px] text-black/90 mt-4">${item.text}</p>
                            <h1 class="text-black roboto hover:text-black/80 cursor-pointer underline underline-offset-4 decoration-2 text-sm py-7">
                            Shop</h1>
                        </div>
                    </div>
                </div>
                `
                }).join("")}
            </div>
        </div>
    </div>
    <!-- small screen -->
    <div class="max-w-[1850px] mx-auto p-3 min-[600px]:hidden block w-full ">
    <hr class="my-6">
        <div class="w-full flex flex-col gap-4">
            ${arr2.map((item) => {
                return `
                <div class="flex w-full items-center  ">
                    <div class="w-full">
                        <h1 class=" text-black/70 text-sm tracking-tight">${item.text_1}</h1>
                        <h2 class="text-black/95 text-[14px]">${item.text_2}</h2>
                    </div>
                    <div class=" w-[110px] h-[110px] rounded-xl bg-black overflow-hidden ">
                        <img class="w-[110px] h-full object-cover"
                        src="${item.img}" alt="">
                    </div>
                </div>
                `
            }).join("")}
        </div>
    </div>
    `
};

const exploreArr1 = [
    {
        img: "../../images/women/explore/women-s-shoes-clothing-accessories (1).png",
        text : "Shoes $70 & Under"

    },
    {
        img: "../../images/women/explore/women-s-shoes-clothing-accessories (7).jpg",
        text : "New from Nike Basketball"

    },
    {
        img: "../../images/women/explore/women-s-shoes-clothing-accessories (6).jpg",
        text : "Easy On & Off Shoes"

    }
];

const exploreArr2 = [
    {
        text_1 : "New from Nike Running",
        text_2 : "Enjoy every stride in the Nike Journey Run.",
        img : "../../images/women/explore/women-s-shoes-clothing-accessories (2)-small.png"

    },
    {
        text_1 : "Killshot from Day to Night",
        text_2 : "Get the kicks that go seamlessly from day to night.",
        img : "../../images/women/explore/women-s-shoes-clothing-accessories (9)-small.jpeg"

    },
    {
        text_1 : "Spring Golf Essentials",
        text_2 : "Everything you'll need for any course.",
        img : "../../images/women/explore/women-s-shoes-clothing-accessories (8)-small.jpeg"

    }
];

class Explore extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = explore(exploreArr1, exploreArr2);
    }
};

customElements.define("explore-content", Explore);