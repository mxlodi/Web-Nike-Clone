
// carousel
function carousel(carousel_element, nextBtn, backBtn){
  nextBtn.addEventListener("click", () => {
    carousel_element.scrollBy({
      left: 300,
      behavior: "smooth"
    })
  })
  backBtn.addEventListener("click", () => {
    carousel_element.scrollBy({
      left: -300,
      behavior: "smooth"
    })
  })
}


// small letters responsive (nav)
function smallLetter (menu, letter){
  const Menu = document.querySelector(`#${menu}`);
  const Letter = document.querySelector(`#${letter}`);
  window.addEventListener('scroll', function() {
    if(Menu.offsetTop - window.scrollY <= 0){
      Menu.classList.add("py-0");
      Letter.classList.remove("text-2xl");
    }
    if(Menu.offsetTop - window.scrollY > 10){
      Menu.classList.remove("py-0");
      Letter.classList.add("text-2xl");
    }
  })
}


// Navbar
const navbar = document.querySelector(".navbar-layout");
fetch("../../components/layout/navbar.html")
.then((res) => res.text())
.then((data) => {
    navbar.innerHTML = data;
<<<<<<< HEAD
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
=======
>>>>>>> d9cbd4a (file : change responsive)

    
    // new & featured dropdown
    const navBar = document.querySelector("#navBar");


    const newfeaturedHover = document.getElementById("newfeatured-hover");
    const newfeaturedDropdown = document.getElementById("newfeatured-dropdown");
    const newfeaturedBelow = document.querySelector("#newfeatured-below");

    const menHover = document.querySelector("#men-hover");
    const menDropdown = document.querySelector("#men-dropdown");
    const menBelow = document.querySelector("#men-below");

    const womenHover = document.querySelector("#women-hover");
    const womenDropdown = document.querySelector("#women-dropdown");
    const womenBelow = document.querySelector("#women-below");


    const kidsHover = document.querySelector("#kids-hover");
    const kidsDropdown = document.querySelector("#kids-dropdown");
    const kidsBelow = document.querySelector("#kids-below");


    const accessoriesHover = document.querySelector("#accessories-hover");
    const accessoriesDropdown = document.querySelector("#accessories-dropdown");
    const accessoriesBelow = document.querySelector("#accessories-below");

    const saleHover = document.querySelector("#sale-hover");
    const saleDropdown = document.querySelector("#sale-dropdown");
    const saleBelow = document.querySelector("#sale-below");


  dropdownMenu(newfeaturedHover,newfeaturedDropdown,newfeaturedBelow,"h-[340px]")
  dropdownMenu(menHover, menDropdown, menBelow, "h-[500px]" )
  dropdownMenu(womenHover, womenDropdown, womenBelow, "h-[490px]")
  dropdownMenu(kidsHover, kidsDropdown, kidsBelow, "h-[550px]")
  dropdownMenu(accessoriesHover, accessoriesDropdown, accessoriesBelow, "h-[340px]")
  dropdownMenu(saleHover, saleDropdown, saleBelow, "h-[330px]")


  //function dropdown menu
    function dropdownMenu(btn,dropdown,text,h){
      btn.addEventListener("mouseenter", () => {

        // blur background
        const bgBlur = document.querySelector("#bgBlur");
        const newftBlur = document.querySelector("#newftBlur");


        dropdown.classList.add(h)
        navBar.classList.add("sticky")
        text.classList.add("delay-200")
        text.classList.add("opacity-100","hover:text-black")
        text.classList.remove("pointer-events-none")
        bgBlur.classList.add("blur-sm");
    
        
      });
      dropdown.addEventListener("mouseenter", () => {
        dropdown.classList.add(h)
        text.classList.add("delay-200")
        text.classList.add("opacity-100")
        navBar.classList.add("sticky")
        text.classList.remove("pointer-events-none")
        bgBlur.classList.add("blur-sm");

  
      });
      dropdown.addEventListener("mouseleave", () => {
        text.classList.add("pointer-events-none")
        dropdown.classList.remove(h)
        navBar.classList.remove("sticky")
        text.classList.remove("delay-200")
        text.classList.remove("opacity-100")
        bgBlur.classList.remove("blur-sm");

        
      });
      btn.addEventListener("mouseleave", () => {
        text.classList.add("pointer-events-none")
        dropdown.classList.remove(h)
        navBar.classList.remove("sticky")
        text.classList.remove("delay-200")
        text.classList.remove("opacity-100")
        bgBlur.classList.remove("blur-sm");

  
      });
    }

    // hamburger
    const hamburgerBtn = document.querySelector("#hamburger-btn")
    const hamburgerContent = document.querySelector("#hamburger-content")
    const crossBtn = document.querySelector("#cross-btn")

    hamburgerBtn.addEventListener("click", () => {
      hamburgerContent.classList.toggle("hidden");
    
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

    var helpBtn = document.getElementById('help-btn');
        var companyBtn = document.getElementById('company-btn');
        var promotionBtn = document.getElementById('promotion-btn');

        helpBtn.addEventListener('click', function() {
            var content = document.getElementById('help-btn-content');
            var openIcon = document.getElementById('open-icon-help');
            var closeIcon = document.getElementById('close-icon-help');

            content.classList.toggle('hidden');
            content.classList.toggle('accordion-content');
            helpBtn.classList.toggle('active');

            if (openIcon.classList.contains('hidden')) {
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            } else {
                openIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        });

        companyBtn.addEventListener('click', function() {
            var content = document.getElementById('company-btn-content');
            var openIcon = document.getElementById('open-icon-company');
            var closeIcon = document.getElementById('close-icon-company');

            content.classList.toggle('hidden');
            content.classList.toggle('accordion-content');
            companyBtn.classList.toggle('active');

            if (openIcon.classList.contains('hidden')) {
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            } else {
                openIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        });

        promotionBtn.addEventListener('click', function() {
            var content = document.getElementById('promotion-btn-content');
            var openIcon = document.getElementById('open-icon-promotion');
            var closeIcon = document.getElementById('close-icon-promotion');

            content.classList.toggle('hidden');
            content.classList.toggle('accordion-content');
            promotionBtn.classList.toggle('active');

            if (openIcon.classList.contains('hidden')) {
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            } else {
                openIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            }
        });



})
.catch((error) => console.error("Error fetching included file:", error));





    // newfeaturedHover.addEventListener("mouseenter", () => {
    //   newfeaturedDropdown.classList.add("h-[300px]")
    //   navBar.classList.add("sticky")
    //   newfeaturedBelow.classList.add("delay-200")
    //   newfeaturedBelow.classList.add("opacity-100")
    // });
    // newfeaturedDropdown.addEventListener("mouseenter", () => {
    //   newfeaturedDropdown.classList.add("h-[300px]")
    //   newfeaturedBelow.classList.add("delay-200")
    //   newfeaturedBelow.classList.add("opacity-100")
    //   //   element.classList.remove("opacity-0")
    //   // });
    // });
    // newfeaturedDropdown.addEventListener("mouseleave", () => {
    //   newfeaturedDropdown.classList.remove("h-[300px]")
    //   navBar.classList.remove("sticky")
    //   newfeaturedBelow.classList.remove("delay-200")
    //   newfeaturedBelow.classList.remove("opacity-100")
    // });
    // newfeaturedHover.addEventListener("mouseleave", () => {
    //   newfeaturedDropdown.classList.remove('h-[300px]')
    //   navBar.classList.remove("sticky")
    //   newfeaturedBelow.classList.remove("delay-200")
    //   newfeaturedBelow.classList.remove("opacity-100")

    // });
    // // men dropdown
    // const menHover = document.getElementById("men-hover")
    // const menDropdown = document.getElementById("men-dropdown")
    // const menList = document.querySelectorAll("#men-list")

    // menHover.addEventListener("mouseenter", () => {
    //   menDropdown.classList.add("h-[440px]")
    //   menList.forEach(element => {
    //     element.classList.remove("opacity-0")
    //   });
    // });
    // menDropdown.addEventListener("mouseenter", () => {
    //   menDropdown.classList.add("h-[440px]")
    //   menList.forEach(element => {
    //     element.classList.remove("opacity-0")
    //   });
    // });
    // menDropdown.addEventListener("mouseleave", () => {
    //   menDropdown.classList.remove("h-[440px]")
    //   menList.forEach(element => {
    //     element.classList.add("opacity-0")
    //   });

    // });
    // menHover.addEventListener("mouseleave", () => {
    //   menDropdown.classList.remove("h-[440px]")
    //   menList.forEach(element => {
    //     element.classList.add("opacity-0")
    //   });
    // });

    
    // // women dropdown
    // const womenHover = document.getElementById("women-hover") 
    // const womenDropdown = document.getElementById("women-dropdown")
    // const womenList = document.querySelectorAll("#women-list")

    // womenHover.addEventListener("mouseenter", () => {
    //   womenDropdown.classList.add("h-[440px]")
    //   womenList.forEach(element => {
    //     element.classList.remove("hidden")
    //   });

    // });
    // womenDropdown.addEventListener("mouseenter", () => {
    //   womenDropdown.classList.add("h-[440px]")
    //   womenList.forEach(element => {
    //     element.classList.remove("hidden")
    //   });
    // });
    // womenDropdown.addEventListener("mouseleave", () => {
    //   womenDropdown.classList.remove("h-[440px]")
    //   womenList.forEach(element => {
    //     element.classList.add("hidden")
    //   });

    // });
    // womenHover.addEventListener("mouseleave", () => {
    //   womenDropdown.classList.remove('h-[440px]')
    //   womenList.forEach(element => {
    //     element.classList.add("hidden")
    //   });
    // });


    // // kids dropdown
    // const kidsHover = document.getElementById("kids-hover") 
    // const kidsDropdown = document.getElementById("kids-dropdown")
    // const kidsList = document.querySelectorAll("#kids-list")

    // kidsHover.addEventListener("mouseenter", () => {
    //   kidsDropdown.classList.add("h-[475px]")
    //   kidsList.forEach(element => {
    //     element.classList.remove("hidden")
    //   });

    // });
    // kidsDropdown.addEventListener("mouseenter", () => {
    //   kidsDropdown.classList.add("h-[475px]")
    //   kidsList.forEach(element => {
    //     element.classList.remove("hidden")
    //   });
    // });
    // kidsDropdown.addEventListener("mouseleave", () => {
    //   kidsDropdown.classList.remove("h-[475px]")
    //   kidsList.forEach(element => {
    //     element.classList.add("hidden")
    //   });

    // });
    // kidsHover.addEventListener("mouseleave", () => {
    //   kidsDropdown.classList.remove('h-[475px]')
    //   kidsList.forEach(element => {
    //     element.classList.add("hidden")
    //   });
    // });



    // // accessories dropdown
    // const accessoriesHover = document.getElementById("accessories-hover") 
    // const accessoriesDropdown = document.getElementById("accessories-dropdown")
    // const accessoriesList = document.querySelectorAll("#accessories-list")

    // accessoriesHover.addEventListener("mouseenter", () => {
    //   accessoriesDropdown.classList.add("h-[300px]")
    //   accessoriesList.forEach(element => {
    //     element.classList.remove("hidden")
    //   });

    // });
    // accessoriesDropdown.addEventListener("mouseenter", () => {
    //   accessoriesDropdown.classList.add("h-[300px]")
    //   accessoriesList.forEach(element => {
    //     element.classList.remove("hidden")
    //   });
    // });
    // accessoriesDropdown.addEventListener("mouseleave", () => {
    //   accessoriesDropdown.classList.remove("h-[300px]")
    //   accessoriesList.forEach(element => {
    //     element.classList.add("hidden")
    //   });

    // });
    // accessoriesHover.addEventListener("mouseleave", () => {
    //   accessoriesDropdown.classList.remove('h-[300px]')
    //   accessoriesList.forEach(element => {
    //     element.classList.add("hidden")
    //   });
    // });


    // // sale dropdown
    // const saleHover = document.getElementById("sale-hover");
    // const saleDropdown = document.getElementById("sale-dropdown");
    // const saleList = document.querySelectorAll("#sale-list");


    // saleHover.addEventListener("mouseenter", () => {
    //   saleDropdown.classList.add("h-[350px]")
    //   saleList.forEach(element => {
    //     element.classList.remove("hidden")
    //   });

    // });
    // saleDropdown.addEventListener("mouseenter", () => {
    //   saleDropdown.classList.add("h-[350px]")
    //   saleList.forEach(element => {
    //     element.classList.remove("hidden")
    //   });
    // });
    // saleDropdown.addEventListener("mouseleave", () => {
    //   saleDropdown.classList.remove("h-[350px]")
    //   saleList.forEach(element => {
    //     element.classList.add("hidden")
    //   });

    // });
    // saleHover.addEventListener("mouseleave", () => {
    //   saleDropdown.classList.remove('h-[350px]')
    //   saleList.forEach(element => {
    //     element.classList.add("hidden")
    //   });
    // });
  
