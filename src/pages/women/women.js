// import function from components folder
import { createHeroSection } from "../../components/heroSection.js";
import { createHeader } from "../../components/header.js";
import { createCarouselEssential } from "../../components/shopTheEssential.js";
import { createFeaturedContent } from "../../components/featured.js";
import { createPopular } from "../../components/popular.js";
import { createClassicSpotlight } from "../../components/classicsSpotlight.js";
import "../../components/membership.js"
import "./explore.js"
import "./subFooterWomen.js"

// header section
const headerArr = [
    {
        title: "Women",
        text_1: "Shop",
        text_2: "Clothing",
        text_3: "Sale",
        text_4: "Find Your Sports Bras",
        text_5: "Leggings",
        text_6: "Shoes $100 & Under"
    }
];


// hero section
const heroArr = [
    {
        imgURL_1:"../../images/women/poster/orange-hair.png",
        imgURL_2:"../../images/women/poster/small-orange.png" ,
        nameA:"Step into the Unreal",
        title:"AIR MAX DN",
        description:"The Dynamic Style of Sha'Carri Richardson",
        button:"Shop",
    }
];

// shop the essential section
const shopTheEssential = [
    {
        imgURL : "../../images/women/shop-the-essentials/women-s-shoes-clothing-accessories.jpg",
        title : "Clothing",
        text : "The season's latest must-haves."
    },
    {
        imgURL : "../../images/women/shop-the-essentials/women-s-shoes-clothing-accessories (1).jpg",
        title : "Shoes",
        text : "All our lates & greatest footwear."
    },
    {
        imgURL : "../../images/women/shop-the-essentials/women-s-shoes-clothing-accessories (2).jpg",
        title : "Accessories",
        text : "From hats to sports equipment & beyond."
    },
    {
        imgURL : "../../images/women/shop-the-essentials/women-s-shoes-clothing-accessories (3).jpg",
        title : "Accessories",
        text : "From hats to sports equipment & beyond."
    }
];


// trending section
const trendingArr = [
    {
        imgURL_1 : "../../images/women/trending//women-s-shoes-clothing-accessories (5).jpg",
        imgURL_2 : "../../images/women/trending//women-s-shoes-clothing-accessories (5).jpg",
        title_1 : "What Limit?",
        title_2 : "Serena Williams Design Crew Collection",
        button : "Shop"
    },
    {
        imgURL_1 : "../../images/women/trending/women-s-shoes-clothing-accessories.png",
        imgURL_2 : "../../images/women/trending/women-s-shoes-clothing-accessories.png",
        title_1 : "Expression in Motion",
        title_2 : "Refreshing Adventure Collection",
        button : "Shop"
    }
];


// classics spotlight section
const classicsSpotlightWomenArr = [
    {
        img : "../../images/women/classics-spotlight/women-s-shoes-clothing-accessories(6).jpg"
    },
    {
        img : "../../images/women/classics-spotlight/women-s-shoes-clothing-accessories(7).jpg"
    },
    {
        img : "../../images/women/classics-spotlight/women-s-shoes-clothing-accessories(8).jpg"
    },
    {
        img : "../../images/women/classics-spotlight/women-s-shoes-clothing-accessories(9).jpg"
    },
    {
        img : "../../images/women/classics-spotlight/women-s-shoes-clothing-accessories(10).jpg"
    }
];


// popular right now
const popularWomenArr = [
    {
        imgURL : "../../images/women/popular/free-metcon-5-womens-workout-shoes-h4Zl5h.png",
        title : "Nike Free Metcon 5",
        description: "Women's Workout Shoes",
        price : "$120"
    },
    {
        imgURL : "../../images/women/popular/killshot-2-womens-shoes-ZmzdkQ.png",
        title : "Nike Killshot 2",
        description : "Women's Shoes",
        price : "$90"
    },

    {
        imgURL : "../../images/women/popular//air-vapormax-plus-womens-shoes-xbt7zf.png",
        title : "Nike Air VaporMax Plus",
        description : "Women's Shoes",
        price : "$210"
    },
    {
        imgURL : "../../images/women/popular/v2k-run-shoes-ZKMJLX.png",
        title : "Nike V2K Run",
        description : "Shoes",
        price : "$110"
    },
    {
        imgURL : "../../images/women/popular/gamma-force-womens-shoes-4TR9Xf.png",
        title : "Nike Gamma Force",
        description : "Women's Shoes",
        price : "$95"
    },
    {
        imgURL : "../../images/women/popular/air-max-90-lv8-womens-shoes-4splTJ.png",
        title : "Nike Air Max 90 LV8",
        description : "Women's Shoes",
        price : "$150"
    },
    {
        imgURL : "../../images/women/popular/invincible-3-womens-road-running-shoes-tfL5Tr.png",
        title : "Nike Invincible 3",
        description : "Women's Road Running Shoes",
        price : "$180"
    },
    {
        imgURL : "../../images/women/popular/vaporfly-3-womens-road-racing-shoes-4jJ4vQ.jpeg",
        title : "Nike Vaporfly 3",
        description : "Women's Road Running Shoes",
        price : "$260"
    },
    {
        imgURL : "../../images/women/popular/motiva-womens-walking-shoes-CxVhtB.png",
        title : "Nike Motiva",
        description : "Women's Walking Shoes",
        price : "$110"
    },
    {
        imgURL : "../../images/women/popular/pegasus-40-womens-road-running-shoes-6p7kp1.png",
        title : "Nike Pegasus 40",
        description : "Women's Road Running Shoes",
        price : "$130"
    }
];

createHeader(headerArr,"Shop All New Arrivals", "header-women-content");
createHeroSection(heroArr, "hero-women-content");
createCarouselEssential(shopTheEssential,"Shop the Essentials", "shoptheessential-women-content");
createFeaturedContent(trendingArr, "Trending", "trending-content");
createClassicSpotlight(classicsSpotlightWomenArr, "classicsspotlight-women-content");
createPopular(popularWomenArr,"popular-women-content");