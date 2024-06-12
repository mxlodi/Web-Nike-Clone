//import global component "subFooter.js"
import { subFooter } from "../../components/subFooter.js";

const womenSubFooter = [
    {
      category: "Women's Shoes",
      items: [
        "All Women's Shoes",
        "Running",
        "Basketball",
        "Tennis",
        "Soccer",
        "Gym & Training",
        "Lifestyle",
        "Slides & Sandals",
        "Cleats & Spikes",
        "Customize with Nike By You"
      ]
    },
    {
      category: "Women's Clothing",
      items: [
        "All Women's Clothing",
        "Plus Size",
        "Sport Bras",
        "Tops & T-Shirts",
        "Basketball",
        "Shorts",
        "Joggers & Sweatpants",
        "Pants & Leggings",
        "Hoodies & Sweatshirts",
        "Tanks & Sleeveless Tops",
        "Compression & Nike Pro"
      ]
    },
    {
      category: "Women's Gear",
      items: [
        "Accessories & Equipment",
        "Bags & Backpacks",
        "Hats & Headbands",
        "Gloves",
        "Sunglasses",
        "Socks",
        "Soccer Balls",
        "Sleeveless & Arm Bands",
        "Totes",
        "Duffel Bags"
      ]
    },
    {
      category: "Featured",
      items: [
        "Luxe Leggings",
        "Compare Sports Bras",
        "Indy Sports Bras",
        "Yoga",
        "Air Max",
        "Trending Styles",
        "New Releases",
        "Best Sellers",
        "Clearance"
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
        this.innerHTML = subFooter(womenSubFooter);
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