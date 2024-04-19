// Navbar
const navbar = document.querySelector(".navbar-layout");
fetch("../../components/layout/navbar.html")
.then((res) => res.text())
.then((data) => {
    navbar.innerHTML = data;
<<<<<<< HEAD
    // newfeed
=======
>>>>>>> 008e17e (file : add file)
    let newfeaturedHover = document.getElementById("newfeatured-hover") 
    let newfeaturedDropdown = document.getElementById("newfeatured-dropdown")
    let navList = document.getElementById('nav-list')

    newfeaturedHover.addEventListener('mouseenter', () => {
      newfeaturedDropdown.classList.add('h-[200px]')
      navList.classList.remove('hidden')
<<<<<<< HEAD
    });
    newfeaturedDropdown.addEventListener('mouseenter', () => {
      newfeaturedDropdown.classList.add('h-[200px]')
      navList.classList.remove('hidden')
    });
=======
    })

>>>>>>> 008e17e (file : add file)
    newfeaturedDropdown.addEventListener('mouseleave', () => {
      newfeaturedDropdown.classList.remove('h-[200px]')
      navList.classList.add('hidden')

<<<<<<< HEAD
    });
    newfeaturedHover.addEventListener('mouseleave', () => {
      newfeaturedDropdown.classList.remove('h-[200px]')
      navList.classList.add('hidden')

    });

    // men
    const menHover = document.getElementById("men-hover");
    const menDropdown = document.getElementById("men-dropdown");
    const menList = document.querySelector("#men-dropdown div ul");



    menHover.addEventListener('mouseenter', () => {
      menDropdown.classList.add('h-[200px]')
      menList.classList.remove('hidden')
    });
    menDropdown.addEventListener('mouseenter', () => {
      menDropdown.classList.add('h-[200px]')
      menList.classList.remove('hidden')
    });
    menDropdown.addEventListener('mouseleave', () => {
      menDropdown.classList.remove('h-[200px]')
      menList.classList.add('hidden')

    });
    menHover.addEventListener('mouseleave', () => {
      menDropdown.classList.remove('h-[200px]')
      menList.classList.add('hidden')

    });


    // menHover.addEventListener("mouseover", function(){
    //   menDropdown.classList.add('h-[200px]')
    //   menList.classList.add('opacity-100')
    // });

    // menHover.addEventListener("mouseover", function(){
    //   menDropdown.classList.add('h-[200px]')
    //   menList.classList.add('opacity-100')
    // });

    // menDropdown.addEventListener('mouseleave', () => {
    //   menDropdown.classList.add('h-[200px]')
    //   menList.classList.remove('opacity-0')
    // });

    // menDropdown.addEventListener('mouseleave', () => {
    //   menDropdown.classList.add('h-[200px]')
    //   menList.classList.remove('opacity-0')
    // });

=======
    })
>>>>>>> 008e17e (file : add file)
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
