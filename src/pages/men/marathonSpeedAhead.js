// Function to generate HTML for marathon speed section
const marathonSpeed = () => {
    return `
    <div> 
        <div class="max-w-[1850px] mx-auto p-3 ">
            <h1 class="translate-y-16 text-2xl">Marathon Speed Ahead</h1>
        </div>

        <div class="max-w-[2557px] max-h-[951px] mx-auto mt-16 p-3"> 
            <img src="../../images/men/marathon/marathon-speed-ahead.jpeg" alt="" class="w-full h-full min-[600px]:block hidden object-cover"> 
            <img src="../../images/men/marathon/men-s-shoes-clothing-accessories (5).jpg" alt="" class="w-full min-[600px]:hidden block">
        </div> 
    </div>
  
      `;  
  };
// Custom element class definition
  class MarathonSpeed extends HTMLElement {
      constructor(){
          super();
      }
      // Callback function when the element is connected to the DOM
      connectedCallback(){
          this.innerHTML = marathonSpeed();
      }
  };
// Define the custom element with the specified name
customElements.define("marathon-speed-ahead-content", MarathonSpeed);