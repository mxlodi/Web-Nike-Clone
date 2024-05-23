// popular right now section
const popularKidsArr = 
[
    {
      imgURL : "../../images/kids/popular/nike max air dn.jpeg",
      title : "Nike Air Max Dn",
      description : "Big Kids Shoes",
      price : "$130"

    },
    {
      imgURL : "../../images/kids/popular/nike dunk low.png",
      title : "Nike Dunk Low",
      description : "Baby/Toddler Shoes",
      price : "$55"

    },
    {
      imgURL : "../../images/kids/popular/jordan 4 retro.png",
      title : "Nike Jordan 4 Retro",
      description : "Big Kids Shoes",
      price : "$160"

    },
    {
      imgURL : "../../images/kids/popular/jordan 4 retro.png",
      title : "Jordan 4 Retro",
      description : "Little Kids Shoes",
      price : "$100"

    },
    {
      imgURL : "../../images/kids/popular/jordan 4 retro.png",
      title : "Jordan 4 Retro",
      description : "Baby/Toddler Shoes",
      price : "$85"

    },
    {
      imgURL : "../../images/kids/popular/air jordan 1 og.png",
      title : "Air Jordan 1 High OG",
      description : "Big Kids Shoes",
      price : "$140"

    },

    {
      imgURL : "../../images/kids/popular/air jordan retro high og.png",
      title : "Jordan 1 Retro High OG",
      description : "Little Kids Shoes",
      price : "$85"

    },
    {
      imgURL : "../../images/kids/popular/jordan retro high og baby.png",
      title : "Jordan 1 Retro High OG",
      description : "Baby/Toddler Shoes",
      price : "$70"

    },
    {
      imgURL : "../../images/kids/popular/ja 1 day.png",
      title : "Ja 1 Day",
      description : "Big Kids Basketball Shoes",
      price : "$92"

    },
    {
      imgURL : "../../images/kids/popular/lebron.png",
      title : "LeBron XXI Optimism",
      description : "LeBron XXI Optimism",
      price : "$55"

    }
]

// trending section
const trendingArr = [
    {
        imgURL_1 : "../../images/kids/trending/nike-kids-shoes-clothing-and-accessories-nike-com (4).jpg",
        imgURL_2 : "../../images/kids/trending/pink-glasses-small.jpeg",
        title_1 : "Jordan Summer Styles",
        title_2 : "Jordan Summer Styles",
        button : "Shop"
    },
    {
        imgURL_1 : "../../images/kids/trending/nike-kids-shoes-clothing-and-accessories-nike-com (5).jpg",
        imgURL_2 : "../../images/kids/trending/shoes-small.jpeg",
        title_1 : "The Latest Air Max",
        title_2 : "The Latest Air Max",
        button : "Shop"
    }
]

// classics spotlight section
const classicSpotlightkidsArr = [
    {
        img : "../../images/kids/classics-spotlight/nike-kids-shoes-clothing-and-accessories-nike-com (2).jpg",
        img : "../../images/kids/classics-spotlight/nike-kids-shoes-clothing-and-accessories-nike-com (3).jpg",
        img : "../../images/home/classics/nike-just-do-it(7).jpg",
        img : "../../images/home/classics/nike-just-do-it(8).png",
        img : "../../images/home/classics/nike-just-do-it(9).jpg"
      }
]

// import function from components folder
import { createClassicSpotlight } from "../../script/components/classicsSpotlight.js";
import { createCarouselEssential } from "../../script/components/shoptheessential.js";
import { createFeaturedContent } from "../../script/components/featured.js";
import "../../script/components/kidsHeroSection.js"
import { createPopular } from "../../script/components/popular.js";
import "../../script/components/sizeForAll.js"
import "../../script/components/explore..js"
import "../../script/components/subFooterKids.js"
import "../../script/components/navbar.js"
import "../../script/components/footer.js"

createFeaturedContent(trendingArr, "trending", "trending-content")
createPopular(popularKidsArr, "popularkids-content");
createClassicSpotlight(classicSpotlightkidsArr, "classics-spotlight-content")


