//import global component "subFooter.js"
import { subFooter } from "../../components/subFooter.js";

const homeSubFooter = [
    {
      category: "Featured",
      items: [
        "Air Force 1",
        "Jordan 1",
        "Metcon",
        "Air Max 270",
        "Air Max 97",
        "Blazer",
        "Pegasus"
      ]
    },
    {
      category: "Shoes",
      items: [
        "All Shoes",
        "Jordan Shoes",
        "Running Shoes",
        "Basketball Shoes",
        "Tennis Shoes",
        "Training Shoes",
        "Custom Shoes",
        "Sale Shoes",
        "Soccer Cleats"
      ]
    },
    {
      category: "Clothing",
      items: [
        "All Clothing",
        "Tops & T-Shirts",
        "Shorts",
        "Hoodies & Pullovers",
        "Joggers & Sweatpants",
        "Sport Bras",
        "Pants & Tights",
        "Socks",
        "Yoga",
        "NikeLab",
        "Plus Size",
        "Big & Tall",
        "Sale Clothing"
      ]
    },
    {
      category: "Kids",
      items: [
        "Infants & Toddler Shoes",
        "Kids Shoes",
        "Kids Basketball Shoes",
        "Kids Running Shoes",
        "Kids Jordan Shoes",
        "Kids Clothing",
        "Kids Backpacks",
        "Kids Socks",
        "Kids Sale"
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
        this.innerHTML = subFooter(homeSubFooter);
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