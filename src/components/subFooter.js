
// Function to generate HTML for sub footer

//Function to render big screen subfooter
const renderCategory =(arr) =>{
    return arr.map((items) => {
        return `
        <ul> 
        <li class="text-black/95 mb-5">${items.category}</li> 
        ${items.items.map((element)=>{
            return `<li class="mb-3 text-black/55 text-nowrap cursor-pointer hover:text-black/80">${element}</li> `
        }).join("")}
        </ul> `
    }).join("")
}
//Function to render small screen subfooter
const renderCategorySmall =(arr) =>{
    return arr.map((items) => {
        return `
        <div>
            <button class="btn text-black/95 mb-5">${items.category}</button>
            <div class="content max-h-0 overflow-hidden transition-max-height duration-300">
                <ul class="pl-4">
                ${items.items.map((element)=>{
                    return `<li class="mb-3 cursor-pointer text-black/55 hover:text-black/80">${element}</li> `
                }).join("")}
                </ul>
            </div>
        </div>
        `
    }).join("")
}
export const subFooter = (array) => {
    return `
    
    <div class="max-w-[1000px] mx-auto md:block hidden p-3 mt-20 transition-all ease-in-out duration-300 flex-row h-[185px] overflow-hidden hover:h-full"> 
        <div class="flex flex-row gap-20 text-gray-500"> 
            ${renderCategory(array)}
        </div> 
    </div> 

    <!-- Small screen -->
    <div class="max-w-[900px] md:hidden block mx-auto p-3 mt-14 mb-4 pl-4"> 
        <div class="flex flex-col gap-20 text-gray-500"> 
            <div>
                ${renderCategorySmall(array)}
            </div>
        </div> 
    </div> 

    
    `
}
