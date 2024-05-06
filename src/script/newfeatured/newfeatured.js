const grid = document.querySelector(".grid-newfeatured");
fetch("../../components/newfeatured/feature.html")
.then((res) => res.text())
.then((data) => {
  grid.innerHTML = data;


    // create array object
    const arrayItem = [
      {
        imgUrl: "../../images/newfeatured/products/air-max-plus-drift-mens-shoes-FKwJ7w.png",
        redText: "Just In",
        shoesBrand: "Nike Air Max Plus Drift",
        menWomen: "Men's Shoes",
        color: 2,
        price: 185,
      },
      {
        imgUrl: "../../images/newfeatured/products/air-vapormax-2023-flyknit-mens-shoes-vSm5p2.jpeg",
<<<<<<< HEAD
        redText: "Substainable Materials",
        shoesBrand: "Nike Air VaporMax 2023 Flyknit",
        menWomen: "Men's Shoes",
=======
        redText: "Just In",
        shoesBrand: "Nike Air VaporMax 2023 Flyknit",
        menWomen: "Men'a Shoes",
>>>>>>> dea830e (file : add new&featured page)
        color: 2,
        price: 210,
      },
      {
        imgUrl: "../../images/newfeatured/products/jordan-spizike-low-mens-shoes-LDT8cp.png",
<<<<<<< HEAD
        redText: "",
=======
        redText: "Just In",
>>>>>>> dea830e (file : add new&featured page)
        shoesBrand: "Jordan Spizike Low",
        menWomen: "Men's Shoes",
        color: 1,
        price: 160,
      },
      {
        imgUrl: "../../images/newfeatured/products/air-jordan-3-retro-womens-shoes-1KkgvW.png",
<<<<<<< HEAD
        redText: "",
=======
        redText: "Just In",
>>>>>>> dea830e (file : add new&featured page)
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
<<<<<<< HEAD
        redText: "",
=======
        redText: "Coming Soon",
>>>>>>> dea830e (file : add new&featured page)
        shoesBrand: "Nike Waffle Debut Vintage",
        menWomen: "Women's Shoes",
        color: 1,
        price: 80,
      },
      {
        imgUrl: "../../images/newfeatured/products/air-jordan-4-retro-mens-shoes-R20n6n.png",
<<<<<<< HEAD
        redText: "Just In",
=======
        redText: "Coming Soon",
>>>>>>> dea830e (file : add new&featured page)
        shoesBrand: "Air Jordan 4 Retro",
        menWomen: "Men's Shoes",
        color: 1,
        price: 215,
      },
      {
        imgUrl: "../../images/newfeatured/products/air-jordan-4-retro-big-kids-shoes-VqdnWF.png",
<<<<<<< HEAD
        redText: "Just In",
=======
        redText: "Coming Soon",
>>>>>>> dea830e (file : add new&featured page)
        shoesBrand: "Air Jordan 4 retro",
        menWomen: "Big Kids' Shoes",
        color: 1,
        price: 160,
      },
      {
        imgUrl: "../../images/newfeatured/products/jordan-4-retro-little-kids-shoes-kDKnwq.png",
<<<<<<< HEAD
        redText: "Just In",
=======
        redText: "Coming Soon",
>>>>>>> dea830e (file : add new&featured page)
        shoesBrand: "Jordan 4 Retro",
        menWomen: "Little Kids' Shoes",
        color: 1,
        price: 100,
      },
      {
        imgUrl: "../../images/newfeatured/products/jordan-4-retro-baby-toddler-shoes-8ndFBg.png",
<<<<<<< HEAD
        redText: "Just In",
=======
        redText: "Coming Soon",
>>>>>>> dea830e (file : add new&featured page)
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

<<<<<<< HEAD
    // function that will loop over the array card
    const cardComponent = () => {
      return `
      <div id="right-content" class="z-[3] grid  min-[960px]:grid-cols-3 grid-cols-2  gap-4 lg:px-4 px-0">
                    ${arrayItem
                      .map((card) => {
                        return `
                        <div class="pb-10">
                            <img class="mb-2" src="${card.imgUrl}" alt="">
                            <h1 class="text-[#9e3702] font-medium my-1">${card.redText}</h1>
                            <h1 class="font-medium my-1 text-black">${card.shoesBrand}</h1>
                            <p class="text-[#909092] font-light" >${card.menWomen}</p>
                            <p class="text-[#909092] font-light">${card.color} Color</p>
                            <h1 class="font-base my-2">$${card.price}</h1>
=======
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
>>>>>>> dea830e (file : add new&featured page)
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
<<<<<<< HEAD
        this.innerHTML = cardComponent();
=======
        this.innerHTML = createCardComponent();
>>>>>>> dea830e (file : add new&featured page)
      }
    }
    customElements.define("featured-component", CardComponent);

<<<<<<< HEAD

    // small letter responsive
    smallLetter("newftMenu", "newftLetter")


    // call function to use

    sideDropdown("genderBtn","genderContent","h-[80px]")
    sideDropdown("kidsBtn", "kidsContent", "h-[65px]")
    sideDropdown("saleBtn","saleContent", "h-[65px]")
    sideDropdown("colorBtn", "colorContent", "h-[290px]")
    sideDropdown("shopBtn", "shopContent", "h-[135px]")
    sideDropdown("brandBtn", "brandContent", "h-[140px]")
    sideDropdown("sportsBtn", "sportsContent", "h-[140px]")
    sideDropdown("bestBtn", "bestContent", "h-[120px]")

    function sideDropdown(btn,content,h){
      const Btn = document.querySelector(`#${btn}`);
      const Content = document.querySelector(`#${content}`);
    
      Btn.addEventListener("click",function(){
        Content.classList.toggle(`${h}`)
      })
    }

    // pick up button
    const outerBtn = document.querySelector("#outerBtn");
    const innerBtn = document.querySelector("#innerBtn");
    const outerBtnSmall = document.querySelector("#outerBtnSmall");
    const innerBtnSmall = document.querySelector("#innerBtnSmall");

    innerBtn.addEventListener("click", () => {
      innerBtn.classList.toggle("left-5")
    })

    innerBtnSmall.addEventListener("click", () => {
      innerBtnSmall.classList.toggle("left-5")
    })



    



=======
>>>>>>> dea830e (file : add new&featured page)
})
.catch((error) => console.error("Error fetching included file:", error));


// const header = document.querySelector(".header-newfeatured");
// fetch("../../components/newfeatured/header.html")
// .then((res) => res.text())
// .then((data) => {
//   header.innerHTML = data;
// })
// .catch((error) => console.error("Error fetching included file:", error));