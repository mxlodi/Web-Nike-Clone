//import global component "subFooter.js"
import { subFooter } from "../../components/subFooter.js";

//array content for men's footer
const menSubFooter = [
    {
      category: "Men's Shoes",
      items: [
        "Running",
        "Basketball",
        "Golf",
        "Tennis Shoes",
        "Jordan",
        "Football",
        "Soccer",
        "Training",
        "Nike Sportwear",
        "Customize with Nike By You"
      ]
    },
    {
      category: "Men's Clothing",
      items: [
        "Tops & T-Shirts",
        "Jackets",
        "Hoodies",
        "Pants",
        "Joggers & Sweatpants",
        "Shorts",
        "Jerseys",
        "Compression & Nike Pro",
        "Tights & Leggings",
        "Tanks & Sleeveless Shirts"
      ]
    },
    {
      category: "Men's Gear",
      items: [
        "All Men's Gear",
        "Socks",
        "Bags & Backpacks",
        "Balls",
        "Hats & Caps",
        "Gloves & Mitts",
        "Sunglasses",
        "Belts",
        "Drawstring Bags",
        "Duffel Bags"
      ]
    },
    {
      category: "Featured",
      items: [
        "New Releases",
        "Clearance",
        "Metcon",
        "NFL",
        "Men's Essentials",
        "Best Sellers"
      ]
    }
];


// Custom element class definition
class SubFooter extends HTMLElement {
  constructor() {
      super();
  }
  // Callback function when the element is connected to the DOM
  connectedCallback() {
      this.innerHTML = subFooter(menSubFooter);
      this.setUpEventListener();
  }
  setUpEventListener() {
      const button = this.querySelectorAll(".btn");
      const contents = this.querySelectorAll(".content");
      for (let i = 0; i < button.length; i++) {
          button[i].addEventListener("click", () => {
              button[i].classList.toggle("active");
              if (button[i].classList.contains("active")) {
                  contents[i].classList.add("max-h-screen");
                  contents[i].classList.remove("max-h-0");
              } else {
                  contents[i].classList.remove("max-h-screen");
                  contents[i].classList.add("max-h-0");
              }
          })
      }
  }
}
// Define the custom element with the specified name
customElements.define("sub-footer-content", SubFooter);