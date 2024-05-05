const grid = document.querySelector(".grid-newfeatured");
fetch("../../components/newfeatured/feature.html")
.then((res) => res.text())
.then((data) => {
  grid.innerHTML = data;
  
    // create array object
    const arrayCard = [
      {
        imgUrl: "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(4).jpg",
        redText: "Just In",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 3,
        price: 290,
      },
      {
        imgUrl: "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(4).jpg",
        redText: "Just In",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 4,
        price: 390,
      },
      {
        imgUrl: "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(4).jpg",
        redText: "Just In",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 1,
        price: 150,
      },
      {
        imgUrl: "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(4).jpg",
        redText: "Just In",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 9,
        price: 130,
      },
      {
        imgUrl: "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(4).jpg",
        redText: "Coming Soon",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 6,
        price: 490,
      },
      {
        imgUrl: "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(4).jpg",
        redText: "Coming Soon",
        shoesBrand: "Air Jordan 1 Mid SE Craft",
        menWomen: "Men",
        color: 13,
        price: 190,
      },
    ];

    // create function to loop over the array card
    const createCardComponent = () => {
      return `
      <div id="right-content" class="z-[3] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:px-4 px-0">
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