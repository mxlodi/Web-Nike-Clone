const grid = document.querySelector(".grid-newfeatured");
fetch("../../components/newfeatured/feature.html")
.then((res) => res.text())
.then((data) => {
  grid.innerHTML = data;
  
    // create array object
    const arrayCard = [
      {
        imgUrl: "../../images/newfeatured/products/air-max-plus-drift-mens-shoes-FKwJ7w.png",
        redText: "Just In",
        shoesBrand: "Nike Air Max Plus Drift",
        menWomen: "Men's Shoes",
        color: 3,
        price: 185,
      },
      {
        imgUrl: "../../images/newfeatured/products/air-vapormax-2023-flyknit-mens-shoes-vSm5p2.jpeg",
        redText: "Just In",
        shoesBrand: "Nike Air VaporMax 2023 Flyknit",
        menWomen: "Men'a Shoes",
        color: 2,
        price: 210,
      },
      {
        imgUrl: "../../images/newfeatured/products/jordan-spizike-low-mens-shoes-LDT8cp.png",
        redText: "Just In",
        shoesBrand: "Jordan Spizike Low",
        menWomen: "Men's Shoes",
        color: 1,
        price: 160,
      },
      {
        imgUrl: "../../images/newfeatured/products/air-jordan-3-retro-womens-shoes-1KkgvW.png",
        redText: "Just In",
        shoesBrand: "Air Jordan 3 Retro",
        menWomen: "Women's Shoes",
        color: 1,
        price: 200,
      },
      {
        imgUrl: "../../images/newfeatured/products/zoom-vomero-5-womens-shoes-81TPKW.png",
        redText: "Just In",
        shoesBrand: "Nike Zoom Vomero 5",
        menWomen: "Women's Shoes",
        color: 1,
        price: 160,
      },
      {
        imgUrl: "../../images/newfeatured/products/waffle-debut-vintage-womens-shoes-rfRkv2.png",
        redText: "Coming Soon",
        shoesBrand: "Nike Waffle Debut Vintage",
        menWomen: "Women's Shoes",
        color: 1,
        price: 80,
      },
      {
        imgUrl: "../../images/newfeatured/products/air-jordan-4-retro-mens-shoes-R20n6n.png",
        redText: "Coming Soon",
        shoesBrand: "Air Jordan 4 Retro",
        menWomen: "Men's Shoes",
        color: 1,
        price: 215,
      },
      {
        imgUrl: "../../images/newfeatured/products/air-jordan-4-retro-big-kids-shoes-VqdnWF.png",
        redText: "Coming Soon",
        shoesBrand: "Air Jordan 4 retro",
        menWomen: "Big Kids' Shoes",
        color: 1,
        price: 160,
      },
      {
        imgUrl: "../../images/newfeatured/products/jordan-4-retro-little-kids-shoes-kDKnwq.png",
        redText: "Coming Soon",
        shoesBrand: "Jordan 4 Retro",
        menWomen: "Little Kids' Shoes",
        color: 1,
        price: 100,
      },
      {
        imgUrl: "../../images/newfeatured/products/jordan-4-retro-baby-toddler-shoes-8ndFBg.png",
        redText: "Coming Soon",
        shoesBrand: "Jordan 4 Retro",
        menWomen: "Baby/Toddler Shoes",
        color: 1,
        price: 85,
      },
      {
        imgUrl: "../../images/newfeatured/products/acg-wolf-tree-polartec-mens-full-zip-top-DwxmXv.png",
        redText: "Coming Soon",
        shoesBrand: 'Nike ACG "Wolf Tree" Polartec',
        menWomen: "Men's Full-Zip Top",
        color: 1,
        price: 175,
      },
      {
        imgUrl: "../../images/newfeatured/products/sportswear-tech-pack-mens-woven-lined-pants-QFp6Pk.png",
        redText: "Coming Soon",
        shoesBrand: "Nike Sportswear Tech Pack",
        menWomen: "Men's Woven Lined Pants",
        color: 1,
        price: 155,
      },
    ];

    // create function to loop over the array card
    const createCardComponent = () => {
      return `
      <div id="right-content" class="z-[3] grid  min-[960px]:grid-cols-3 grid-cols-2  gap-4 lg:px-4 px-0">
                    ${arrayCard
                      .map((card) => {
                        return `
                        <div class="pb-10">
                            <img src="${card.imgUrl}" alt="">
                            <h1 class="text-red-700 font-medium">${card.redText}</h1>
                            <h1 class="font-medium">${card.shoesBrand}</h1>
                            <p class="text-gray-300" >${card.menWomen}</p>
                            <p class="text-gray-300">${card.color} Color</p>
                            <h1 class="font-medium">$${card.price}</h1>
                        </div>
                        `;
                      })
                      .join("")}
                      </div>        
        `;
    };

    // create component name to use it
    class CardComponent extends HTMLElement {
      connectedCallback() {
        this.innerHTML = createCardComponent();
      }
    }
    customElements.define("featured-component", CardComponent);

})
.catch((error) => console.error("Error fetching included file:", error));


// const header = document.querySelector(".header-newfeatured");
// fetch("../../components/newfeatured/header.html")
// .then((res) => res.text())
// .then((data) => {
//   header.innerHTML = data;
// })
// .catch((error) => console.error("Error fetching included file:", error));