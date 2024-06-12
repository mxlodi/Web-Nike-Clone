
// import function from components folder
import { createHeroSection } from "../../components/heroSection.js";
import { createHeader } from "../../components/header.js";
import { createCarouselEssential } from "../../components/shopTheEssential.js";
import { createFeaturedContent } from "../../components/featured.js";
import { createPopular } from "../../components/popular.js";
import { createClassicSpotlight } from "../../components/classicsSpotlight.js";
import "../../components/membership.js"
import "./heroSectionMen.js";
import "./marathonSpeedAhead.js"
import "./subFooterMen.js"


// header text section and marquee
const headerArr = [
    {
        title: "Men",
        text_1: "Shop",
        text_2: "Clothing",
        text_3: "Sale",
        text_4: "Accessories",
        text_5: "",
        text_6: ""
    }
];

// marathon speed ahead text
const marathonArr = [
    {
        imgURL_1: "",
        imgURL_2: "",
        nameA: "Nike Alphafly 3",
        title: "LEAVE YOURSELF <br> IN THE DUST",
        description: "Stay fresh from start to mile 26.2 in the electric new colorway.",
        button: "Shop",
    }
];


// shop the essebtial section
const shopTheEssential = [
    {
        imgURL : "../../images/men/shop-the-essentials/men-s-shoes-clothing-accessories.jpg",
        title : "Clothing",
        text : "The season's latest must-haves."
    },
    {
        imgURL : "../../images/men/shop-the-essentials/men-s-shoes-clothing-accessories(1).jpg",
        title : "Shoes",
        text : "All our lates & greatest footwear."
    },
    {
        imgURL : "../../images/men/shop-the-essentials/men-s-shoes-clothing-accessories(2).jpg",
        title : "Accessories",
        text : "From hats to sports equipment & beyond."
    }
];

// classics spotlight section
const classicsSpotlightMenArr = [
    {
        img : "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(4).jpg"
    },
    {
        img : "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(5).jpg"
    },
    {
        img : "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(6).jpg"
    },
    {
        img : "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(7).jpg"
    },
    {
        img : "../../images/men/classics-spotlight/men-s-shoes-clothing-accessories(8).jpg"
    }
];

// Brooks Koepka's Favs section
const brooks = [
    {
        imgURL_1 : "../../images/men/brooks/men-s-shoes-clothing-accessories (3).jpg",
        imgURL_2 : "../../images/men/brooks/men-s-shoes-clothing-accessories (6).jpg",
        title_1 : "Brooks's Golf Essentials",
        title_2 : "Brooks's Golf Essentials",
        button : "Shop"
    },
    {
        imgURL_1 : "../../images/men/brooks/men-s-shoes-clothing-accessories (2).jpg",
        imgURL_2 : "../../images/men/brooks/men-s-shoes-clothing-accessories (7).jpg",
        title_1 : "Brooks's Off-Course Picks",
        title_2 : "Brooks's Off-Course Picks",
        button : "Shop"
    }
]

// popular right now section
const popularMenArr = [
    {
        imgURL : "../../images/men/popular/air-max-dn-shoes-27XkSQ.png",
        title : "Nike Air Max Dn",
        description: "Shoes",
        price : "$160"
    },
    {
        imgURL : "../../images/men/popular/book-1-hike-basketball-shoes-hQGJ09.png",
        title : `Book 1 "Hike"`,
        description : "Basketball Shoes",
        price : "$150"
    },

    {
        imgURL : "../../images/men/popular/dunk-low-retro-mens-shoes-5FQWGR.png",
        title : "Nike Dunk Low Retro",
        description : "Men's Shoes",
        price : "$115"
    },
    {
        imgURL : "../../images/men/popular/gt-cut-3-basketball-shoes-GLHCGc (2).png",
        title : "Nike G.T. Cut 3",
        description : "Basketball Shoes",
        price : "$190"
    },
    {
        imgURL : "../../images/men/popular/zoom-vomero-5-mens-shoes-MgsTqZ.png",
        title : "Nike Zoom Vomero 5",
        description : "Men's Shoes",
        price : "$160"
    },
    {
        imgURL : "../../images/men/popular/air-max-1-sc-mens-shoes-bNNbQl.png",
        title : "Nike Air Max 1 SC",
        description : "Men's Shoes",
        price : "$112.97"
    },
    {
        imgURL : "../../images/men/popular/air-force-1-07-mens-shoes-jBrhbr.png",
        title : "Nike Air Force 1 '07",
        description : "Men's Shoes",
        price : "$115"
    }
];



createHeroSection(marathonArr, "marathon-text-content");
createHeader(headerArr, "Members: Free Shipping on Orders $50+", "header-men-content");
createCarouselEssential(shopTheEssential,"Shop the Essentials", "shoptheessential-men-content");
createClassicSpotlight(classicsSpotlightMenArr, "classics-spotlight-men-content");
createFeaturedContent(brooks,"Brooks Koepka's Favs", "brooks-koepka-content");
createPopular(popularMenArr, "popular-men-content");
