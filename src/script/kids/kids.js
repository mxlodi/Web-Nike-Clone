// poster
const poster = document.querySelector(".poster-kids");
fetch("../../components/kids/poster.html")
.then((res) => res.text())
.then((data) => {
    poster.innerHTML = data;
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
})
.catch((error) => console.error("Error fetching included file:", error));


// categories
const categories = document.querySelector(".categories-kids");
fetch("../../components/kids/categories.html")
.then((res) => res.text())
.then((data) => {
    categories.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));