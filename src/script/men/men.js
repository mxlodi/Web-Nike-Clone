
//poster section
const poster = document.querySelector(".poster-men");
fetch("../../components/men/poster.html")
.then((res) => res.text())
.then((data) => {
    poster.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// marquee 
const marquee = document.querySelector(".marquee-men");
fetch("../../components/men/marquee.html")
.then((res) => res.text())
.then((data) => {
    marquee.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// shop the essentials
const shop_the_essentials = document.querySelector(".shop-the-essentials-men");
fetch("../../components/men/shop-the-essentials.html")
.then((res) => res.text())
.then((data) => {
    shop_the_essentials.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// marathon-speed-ahead
const marathon_speed_ahead = document.querySelector(".marathon-speed-ahead-men");
fetch("../../components/men/marathon-speed-ahead.html")
.then((res) => res.text())
.then((data) => {
    marathon_speed_ahead.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


// classics spotlight
const classics_spotlight = document.querySelector(".classics-spotlight-men");
fetch("../../components/men/classics-spotlight.html")
.then((res) => res.text())
.then((data) => {
    classics_spotlight.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// Brooks Koepka's Favs
const brooks = document.querySelector(".brooks-men");
fetch("../../components/men/brooks.html")
.then((res) => res.text())
.then((data) => {
    brooks.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// popular right now
const popular = document.querySelector(".popular-men");
fetch("../../components/men/popular.html")
.then((res) => res.text())
.then((data) => {
    popular.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// member benefits
const member_benefits = document.querySelector(".member-benefits-men");
fetch("../../components/men/member-benefits.html")
.then((res) => res.text())
.then((data) => {
    member_benefits.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));

// categories
const categories = document.querySelector(".categories-men");
fetch("../../components/men/categories.html")
.then((res) => res.text())
.then((data) => {
    categories.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));