// Function that will loop over the array card for new featured card section
const cardContent = (arr) => {
    return `
    <div id="rightContent" class="z-[3] grid  min-[960px]:grid-cols-3 grid-cols-2  gap-4 lg:px-4 px-0">
        ${arr.map((item) => {
            return `
            <div class="pb-10">
                <img class="mb-2" src="${item.img}" alt="">
                <h1 class="text-[#9e3702] font-medium my-1">${item.text}</h1>
                <h1 class="font-medium my-1 text-black">${item.brand}</h1>
                <p class="text-[#909092] font-light" >${item.type}</p>
                <p class="text-[#909092] font-light">${item.color} Color</p>
                <h1 class="font-base my-2">$${item.price}</h1>
            </div>
            `;
        }).join("")}
    </div>        
    `;
};

// Create array that contain data
const cardArr = [
    {
        img: "../../images/newfeatured/products/air-max-plus-drift-mens-shoes-FKwJ7w.png",
        text: "Just In",
        brand: "Nike Air Max Plus Drift",
        type: "Men's Shoes",
        color: 2,
        price: 185,
    },
    {
        img: "../../images/newfeatured/products/air-vapormax-2023-flyknit-mens-shoes-vSm5p2.jpeg",
        text: "Substainable Materials",
        brand: "Nike Air VaporMax 2023 Flyknit",
        type: "Men's Shoes",
        color: 2,
        price: 210,
    },
    {
        img: "../../images/newfeatured/products/jordan-spizike-low-mens-shoes-LDT8cp.png",
        text: "",
        brand: "Jordan Spizike Low",
        type: "Men's Shoes",
        color: 1,
        price: 160,
    },
    {
        img: "../../images/newfeatured/products/air-jordan-3-retro-womens-shoes-1KkgvW.png",
        text: "",
        brand: "Air Jordan 3 Retro",
        type: "Women's Shoes",
        color: 1,
        price: 200,
    },
    {
        img: "../../images/newfeatured/products/zoom-vomero-5-womens-shoes-81TPKW.png",
        text: "Just In",
        brand: "Nike Zoom Vomero 5",
        type: "Women's Shoes",
        color: 1,
        price: 160,
    },
    {
        img: "../../images/newfeatured/products/waffle-debut-vintage-womens-shoes-rfRkv2.png",
        text: "",
        brand: "Nike Waffle Debut Vintage",
        type: "Women's Shoes",
        color: 1,
        price: 80,
    },
    {
        img: "../../images/newfeatured/products/air-jordan-4-retro-mens-shoes-R20n6n.png",
        text: "Just In",
        brand: "Air Jordan 4 Retro",
        type: "Men's Shoes",
        color: 1,
        price: 215,
    },
    {
        img: "../../images/newfeatured/products/air-jordan-4-retro-big-kids-shoes-VqdnWF.png",
        text: "Just In",
        brand: "Air Jordan 4 retro",
        type: "Big Kids' Shoes",
        color: 1,
        price: 160,
    },
    {
        img: "../../images/newfeatured/products/jordan-4-retro-little-kids-shoes-kDKnwq.png",
        text: "Just In",
        brand: "Jordan 4 Retro",
        type: "Little Kids' Shoes",
        color: 1,
        price: 100,
    },
    {
        img: "../../images/newfeatured/products/jordan-4-retro-baby-toddler-shoes-8ndFBg.png",
        text: "Just In",
        brand: "Jordan 4 Retro",
        type: "Baby/Toddler Shoes",
        color: 1,
        price: 85,
    },
    {
        img: "../../images/newfeatured/products/acg-wolf-tree-polartec-mens-full-zip-top-DwxmXv.png",
        text: "Coming Soon",
        brand: 'Nike ACG "Wolf Tree" Polartec',
        type: "Men's Full-Zip Top",
        color: 1,
        price: 175,
    },
    {
        img: "../../images/newfeatured/products/sportswear-tech-pack-mens-woven-lined-pants-QFp6Pk.png",
        text: "Coming Soon",
        brand: "Nike Sportswear Tech Pack",
        type: "Men's Woven Lined Pants",
        color: 1,
        price: 155,
    }
];
// Custom element class definition
class CardContent extends HTMLElement{
    constructor(){
        super();
    }
    // Callback function when the element is connected to the DOM
    connectedCallback(){
        this.innerHTML = cardContent(cardArr);
    }
};
// Define the custom element with the specified name
customElements.define("card-content", CardContent);