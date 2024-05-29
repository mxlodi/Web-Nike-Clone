const shopping  = document.querySelector(".shopping-pink");
fetch("../../components/pink/shopping.html")
.then((res) => res.text())
.then((data) => {
    shopping.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));