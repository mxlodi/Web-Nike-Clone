// main section


// poster section
<<<<<<< HEAD
<<<<<<< HEAD
const poster = document.querySelector(".poster-home");
=======
const poster = document.querySelector("".poster-home);
>>>>>>> 008e17e (file : add file)
=======
const poster = document.querySelector(".poster-home");
>>>>>>> 4574231 (feature : add review board file.)
fetch("../../components/home/poster.html")
.then((res) => res.text())
.then((data) => {
  poster.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


// trending section
const trending = document.querySelector(".trending-home");
fetch("../../components/home/trending.html")
.then((res) => res.text())
.then((data) => {
  trending.innerHTML = data;

  // carousel
  const trendings = document.querySelector("#trendings");
  const left_trending = document.querySelector("#left-trending");
  const right_trending = document.querySelector("#right-trending");
  const trendings_small = document.querySelector("#trendings-small");


  carousel(trendings, right_trending, left_trending)
  carousel(trendings_small, right_trending, left_trending)


})
.catch((error) => console.error("Error fetching included file:", error));

// featured section
const featured = document.querySelector(".featured-home");
fetch("../../components/home/featured.html")
.then((res) => res.text())
.then((data) => {
  featured.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


// classics section
const classics = document.querySelector(".classics-home");
fetch("../../components/home/classics.html")
.then((res) => res.text())
.then((data) => {
  classics.innerHTML = data;

  // carousal
  const classic = document.querySelector("#classics");
  const left_classic = document.querySelector("#left-classic");
  const right_classic = document.querySelector("#right-classic");

  carousel(classic,right_classic, left_classic)

})
.catch((error) => console.error("Error fetching included file:", error));


// shop-by-sport section
const shop_by_sport = document.querySelector(".shop-by-sport-home");
fetch("../../components/home/shop-by-sport.html")
.then((res) => res.text())
.then((data) => {
  shop_by_sport.innerHTML = data;

  // carousel
  const shop = document.querySelector("#shop");
  const left_shop = document.querySelector("#left-shop");
  const right_shop = document.querySelector("#right-shop");

  carousel(shop, right_shop, left_shop)
  
})
.catch((error) => console.error("Error fetching included file:", error));


// popular right now section
const popular_right_now = document.querySelector(".popular-home");
fetch("../../components/home/popular.html")
.then((res) => res.text())
.then((data) => {
  popular_right_now.innerHTML = data;
  // carousel
  const popular = document.querySelector("#popular");
  const left_popular = document.querySelector("#left-popular");
  const right_popular = document.querySelector("#right-popular");

  carousel(popular, right_popular, left_popular)
    
})
.catch((error) => console.error("Error fetching included file:", error));


// nike membership section
const nike_membership = document.querySelector(".membership-home");
fetch("../../components/home/membership.html")
.then((res) => res.text())
.then((data) => {
  nike_membership.innerHTML = data;

  const membership = document.querySelector("#membership");
  const left_membership = document.querySelector("#left-membership");
  const right_membership = document.querySelector("#right-membership");

  carousel(membership, right_membership, left_membership)

})
.catch((error) => console.error("Error fetching included file:", error));


// categories section
const categories = document.querySelector(".categories-home");
fetch("../../components/home/categories.html")
.then((res) => res.text())
.then((data) => {
  categories.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));





// const classic = document.querySelector("#classics");
// const left_classic = document.querySelector("#left-classic");
// const right_classic = document.querySelector("#right-classic");

// carousel(classic,right_classic,left_classic)