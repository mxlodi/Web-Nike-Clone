// poster
const poster = document.querySelector(".poster-kids");
fetch("../../components/kids/poster.html")
.then((res) => res.text())
.then((data) => {
    poster.innerHTML = data;

    smallLetter("kidMenu", "letterKid")

})
.catch((error) => console.error("Error fetching included file:", error));

// sizes-for-all section
const sizes_for_all = document.querySelector(".sizes-for-all-kids");
fetch("../../components/kids/sizes-for-all.html")
.then((res) => res.text())
.then((data) => {
  sizes_for_all.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// popular right now
const popular = document.querySelector(".popular-kids");
fetch("../../components/kids/popular.html")
.then((res) => res.text())
.then((data) => {
    popular.innerHTML = data;
  // carousel
  const kid_popular = document.querySelector("#kid-popular");
  const left_kid_popular = document.querySelector("#left-kid-popular");
  const right_kid_popular= document.querySelector("#right-kid-popular");

  carousel(kid_popular,right_kid_popular,left_kid_popular)

})
.catch((error) => console.error("Error fetching included file:", error));


// trending
const trending = document.querySelector(".trending-kids");
fetch("../../components/kids/trending.html")
.then((res) => res.text())
.then((data) => {
    trending.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


// explore
const explore = document.querySelector(".explore-kids");
fetch("../../components/kids/explore.html")
.then((res) => res.text())
.then((data) => {
    explore.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


// classics spotlight
const classics_spotlight = document.querySelector(".classics-spotlight-kids");
fetch("../../components/kids/classics-spotlight.html")
.then((res) => res.text())
.then((data) => {
    classics_spotlight.innerHTML = data;
  // carousel
  const classic_kids = document.querySelector("#classic-kids");
  const left_kids_classic = document.querySelector("#left-kids-classic");
  const right_kids_classic = document.querySelector("#right-kids-classic");

  carousel(classic_kids,right_kids_classic, left_kids_classic)

})
.catch((error) => console.error("Error fetching included file:", error));


// categories
const categories = document.querySelector(".categories-kids");
fetch("../../components/kids/categories.html")
.then((res) => res.text())
.then((data) => {
    categories.innerHTML = data;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f131795 (file : add responsive in navbar and fix footer)

  // accordion
  sideDropdown("kidsShoesBtn", "kidsShoesContent", "h-[420px]")
  sideDropdown("kidsClothingBtn", "kidsClothingContent", "h-[310px]")
  sideDropdown("kidsGearBtn", "kidsGearContent", "h-[240px]")
  sideDropdown("kidsFeaturedBtn", "kidsFeaturedContent", "h-[380px]")


    
<<<<<<< HEAD
=======
>>>>>>> 5d0a635 (file : add responsive in new & featured page)
=======
>>>>>>> f131795 (file : add responsive in navbar and fix footer)
})
.catch((error) => console.error("Error fetching included file:", error));