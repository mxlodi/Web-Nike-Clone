// main section


// poster section
<<<<<<< HEAD
const poster = document.querySelector(".poster-home");
=======
const poster = document.querySelector("".poster-home);
>>>>>>> 008e17e (file : add file)
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
})
.catch((error) => console.error("Error fetching included file:", error));


// shop-by-sport section
const shop_by_sport = document.querySelector(".shop-by-sport-home");
fetch("../../components/home/shop-by-sport.html")
.then((res) => res.text())
.then((data) => {
  shop_by_sport.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


// popular right now section
const popular_right_now = document.querySelector(".popular-home");
fetch("../../components/home/popular.html")
.then((res) => res.text())
.then((data) => {
  popular_right_now.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


// nike membership section
const nike_membership = document.querySelector(".membership-home");
fetch("../../components/home/membership.html")
.then((res) => res.text())
.then((data) => {
  nike_membership.innerHTML = data;
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