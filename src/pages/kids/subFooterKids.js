//import global component "subFooter.js"
import { subFooter } from "../../components/subFooter.js";

//array contents for kids's footer
const kidsSubFooter = [
    {
        category: "Kid's Shoes",
        items: [
            "$70 & Under",
            "Easy On & Off",
            "Jordan",
            "Basketball",
            "Running",
            "Soccer",
            "Football",
            "Baseball",
            "Skateboarding",
            "Lifestyle",
            "New Releases"
        ]
    },
    {
        category: "Kid's Clothing",
        items: [
            "Joggers & Sweatpants",
            "Swimwear",
            "Jackets & Vests",
            "T-Shirts & Tops",
            "Hoodies & Sweatshirts",
            "Shorts",
            "Pants & Tights",
            "Compression & Nike Pro"
        ]
    },
    {
        category: "Kid's Gear",
        items: [
            "All Kids' Gear",
            "Backpacks & Bags",
            "Gloves",
            "Hats & Headbands",
            "Socks",
            "Sleeve & Arm Bands"
        ]
    },
    {
        category: "Featured",
        items: [
            "All Kids' Products",
            "Baby & Toddler",
            "Pre-School",
            "Grade School",
            "Jordan",
            "Clothing Size Guide",
            "Shoes Size Guide",
            "Clearance",
            "New Releases",
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
        this.innerHTML = subFooter(kidsSubFooter);
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