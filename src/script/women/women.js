// poster
const poster = document.querySelector(".poster-women");
fetch("../../components/women/poster.html")
.then((res) => res.text())
.then((data) => {
    poster.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// shop the essentials
const shop_the_essentials = document.querySelector(".shop-the-essentials-women");
fetch("../../components/women/shop-the-essentials.html")
.then((res) => res.text())
.then((data) => {
    shop_the_essentials.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// trending 
const trending = document.querySelector(".trending-women");
fetch("../../components/women/trending.html")
.then((res) => res.text())
.then((data) => {
  trending.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// classics spotlight
const classics_spotlight = document.querySelector(".classics-spotlight-women");
fetch("../../components/women/classics-spotlight.html")
.then((res) => res.text())
.then((data) => {
    classics_spotlight.innerHTML = data;

    // carousel
    const women_classic = document.querySelector("#classic-women");
    const left_women_classic = document.querySelector("#left-women-classic");
    const right_women_classic= document.querySelector("#right-women-classic");

    carousel(women_classic,right_women_classic,left_women_classic)
    
})
.catch((error) => console.error("Error fetching included file:", error));

// explore
const explore = document.querySelector(".explore-women");
fetch("../../components/women/explore.html")
.then((res) => res.text())
.then((data) => {
    explore.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// popular right now
const popular = document.querySelector(".popular-women");
fetch("../../components/women/popular.html")
.then((res) => res.text())
.then((data) => {
    popular.innerHTML = data;
    // carousel
    const women_popular = document.querySelector("#popular-women");
    const left_women_popular = document.querySelector("#left-women-popular");
    const right_women_popular= document.querySelector("#right-women-popular");

    carousel(women_popular,right_women_popular,left_women_popular)

})
.catch((error) => console.error("Error fetching included file:", error));

// nike membership
const membership = document.querySelector(".membership-women");
fetch("../../components/women/membership.html")
.then((res) => res.text())
.then((data) => {
    membership.innerHTML = data;

    // carousel
    const membership_women = document.querySelector("#membership-women");
    const left_women_membership = document.querySelector("#left-women-membership");
    const right_women_membership= document.querySelector("#right-women-membership");

    carousel(membership_women,right_women_membership,left_women_membership)
})
.catch((error) => console.error("Error fetching included file:", error));

// categories
const categories = document.querySelector(".categories-women");
fetch("../../components/women/categories.html")
.then((res) => res.text())
.then((data) => {
    categories.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));