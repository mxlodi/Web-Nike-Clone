// Navbar
const navbar = document.querySelector(".navbar-layout");
fetch("../../components/layout/navbar.html")
.then((res) => res.text())
.then((data) => {
    navbar.innerHTML = data;
    let newfeaturedHover = document.getElementById("newfeatured-hover") 
    let newfeaturedDropdown = document.getElementById("newfeatured-dropdown")
    let navList = document.getElementById('nav-list')

    newfeaturedHover.addEventListener('mouseenter', () => {
      newfeaturedDropdown.classList.add('h-[200px]')
      navList.classList.remove('hidden')
    })

    newfeaturedDropdown.addEventListener('mouseleave', () => {
      newfeaturedDropdown.classList.remove('h-[200px]')
      navList.classList.add('hidden')

    })
  })
.catch((error) => console.error("Error fetching included file:", error))


// Footer
const footer = document.querySelector(".footer-layout");
fetch("../../components/layout/footer.html")
.then((res) => res.text())
.then((data) => {
    footer.innerHTML = data;
})
.catch((error) => console.error("Error fetching included file:", error));
