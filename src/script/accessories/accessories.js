const header = document.querySelector(".header-accessories");
fetch("../../components/accessories/header.html")
.then((res) => res.text())
.then((data) => {
    header.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));


// grid
const grid = document.querySelector(".grid-accessories");
fetch("../../components/accessories/grid.html")
.then((res) => res.text())
.then((data) => {
    grid.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));
