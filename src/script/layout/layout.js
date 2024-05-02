// Navbar
const navbar = document.querySelector(".navbar-layout");
fetch("../../components/layout/navbar.html")
.then((res) => res.text())
.then((data) => {
    navbar.innerHTML = data;
<<<<<<< HEAD
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
=======
    // new & featured dropdown
    const newfeaturedHover = document.getElementById("newfeatured-hover") 
    const newfeaturedDropdown = document.getElementById("newfeatured-dropdown")
    const navList = document.querySelectorAll("#nav-list")

    newfeaturedHover.addEventListener("mouseenter", () => {
      newfeaturedDropdown.classList.add("h-[300px]")
      navList.forEach(element => {
        element.classList.remove("hidden")
      });

    });
    newfeaturedDropdown.addEventListener("mouseenter", () => {
      newfeaturedDropdown.classList.add("h-[300px]")
      navList.forEach(element => {
        element.classList.remove("hidden")
      });
    });
    newfeaturedDropdown.addEventListener("mouseleave", () => {
      newfeaturedDropdown.classList.remove("h-[300px]")
      navList.forEach(element => {
        element.classList.add("hidden")
      });

    });
    newfeaturedHover.addEventListener("mouseleave", () => {
      newfeaturedDropdown.classList.remove('h-[300px]')
      navList.forEach(element => {
        element.classList.add("hidden")
      });
    });

    // men dropdown
    const menHover = document.getElementById("men-hover")
    const menDropdown = document.getElementById("men-dropdown")
    const menList = document.querySelectorAll("#men-list")

    menHover.addEventListener("mouseenter", () => {
      menDropdown.classList.add("h-[440px]")
      menList.forEach(element => {
        element.classList.remove("hidden")
      });
    });
    menDropdown.addEventListener("mouseenter", () => {
      menDropdown.classList.add("h-[440px]")
      menList.forEach(element => {
        element.classList.remove("hidden")
      });
    });
    menDropdown.addEventListener("mouseleave", () => {
      menDropdown.classList.remove("h-[440px]")
      menList.forEach(element => {
        element.classList.add("hidden")
      });

    });
    menHover.addEventListener("mouseleave", () => {
      menDropdown.classList.remove("h-[440px]")
      menList.forEach(element => {
        element.classList.add("hidden")
      });
    });

    
    // women dropdown
    const womenHover = document.getElementById("women-hover") 
    const womenDropdown = document.getElementById("women-dropdown")
    const womenList = document.querySelectorAll("#women-list")

    womenHover.addEventListener("mouseenter", () => {
      womenDropdown.classList.add("h-[440px]")
      womenList.forEach(element => {
        element.classList.remove("hidden")
      });

    });
    womenDropdown.addEventListener("mouseenter", () => {
      womenDropdown.classList.add("h-[440px]")
      womenList.forEach(element => {
        element.classList.remove("hidden")
      });
    });
    womenDropdown.addEventListener("mouseleave", () => {
      womenDropdown.classList.remove("h-[440px]")
      womenList.forEach(element => {
        element.classList.add("hidden")
      });

    });
    womenHover.addEventListener("mouseleave", () => {
      womenDropdown.classList.remove('h-[440px]')
      womenList.forEach(element => {
        element.classList.add("hidden")
      });
    });


    // kids dropdown
    const kidsHover = document.getElementById("kids-hover") 
    const kidsDropdown = document.getElementById("kids-dropdown")
    const kidsList = document.querySelectorAll("#kids-list")

    kidsHover.addEventListener("mouseenter", () => {
      kidsDropdown.classList.add("h-[475px]")
      kidsList.forEach(element => {
        element.classList.remove("hidden")
      });

    });
    kidsDropdown.addEventListener("mouseenter", () => {
      kidsDropdown.classList.add("h-[475px]")
      kidsList.forEach(element => {
        element.classList.remove("hidden")
      });
    });
    kidsDropdown.addEventListener("mouseleave", () => {
      kidsDropdown.classList.remove("h-[475px]")
      kidsList.forEach(element => {
        element.classList.add("hidden")
      });

    });
    kidsHover.addEventListener("mouseleave", () => {
      kidsDropdown.classList.remove('h-[475px]')
      kidsList.forEach(element => {
        element.classList.add("hidden")
      });
    });



    // accessories dropdown
    const accessoriesHover = document.getElementById("accessories-hover") 
    const accessoriesDropdown = document.getElementById("accessories-dropdown")
    const accessoriesList = document.querySelectorAll("#accessories-list")

    accessoriesHover.addEventListener("mouseenter", () => {
      accessoriesDropdown.classList.add("h-[300px]")
      accessoriesList.forEach(element => {
        element.classList.remove("hidden")
      });

    });
    accessoriesDropdown.addEventListener("mouseenter", () => {
      accessoriesDropdown.classList.add("h-[300px]")
      accessoriesList.forEach(element => {
        element.classList.remove("hidden")
      });
    });
    accessoriesDropdown.addEventListener("mouseleave", () => {
      accessoriesDropdown.classList.remove("h-[300px]")
      accessoriesList.forEach(element => {
        element.classList.add("hidden")
      });

    });
    accessoriesHover.addEventListener("mouseleave", () => {
      accessoriesDropdown.classList.remove('h-[300px]')
      accessoriesList.forEach(element => {
        element.classList.add("hidden")
      });
    });


    // sale dropdown
    const saleHover = document.getElementById("sale-hover") 
    const saleDropdown = document.getElementById("sale-dropdown")
    const saleList = document.querySelectorAll("#sale-list")

    saleHover.addEventListener("mouseenter", () => {
      saleDropdown.classList.add("h-[240px]")
      saleList.forEach(element => {
        element.classList.remove("hidden")
      });

    });
    saleDropdown.addEventListener("mouseenter", () => {
      saleDropdown.classList.add("h-[240px]")
      saleList.forEach(element => {
        element.classList.remove("hidden")
      });
    });
    saleDropdown.addEventListener("mouseleave", () => {
      saleDropdown.classList.remove("h-[240px]")
      saleList.forEach(element => {
        element.classList.add("hidden")
      });

    });
    saleHover.addEventListener("mouseleave", () => {
      saleDropdown.classList.remove('h-[240px]')
      saleList.forEach(element => {
        element.classList.add("hidden")
      });
    });

    const hamburgerBtn = document.querySelector("#hamburger-btn")
    const hamburgerContent = document.querySelector("#hamburger-content")
    const crossBtn = document.querySelector("#cross-btn")


    hamburgerBtn.addEventListener("click", () => {
      hamburgerContent.classList.remove("hidden");
    
    })

    crossBtn.addEventListener("click", () => {
      hamburgerContent.classList.add("hidden");
    
>>>>>>> 4574231 (feature : add review board file.)
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
