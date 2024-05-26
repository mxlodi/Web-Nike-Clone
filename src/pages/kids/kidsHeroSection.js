const heroSection = () => {
    return `
    <section>
        <div class="max-w-[1850px] mx-auto p-3 my-5">
            <div class="">
                <img class="hidden sm:block" src="../../images/kids/poster/skate1.jpeg" alt="">
            </div>
            <div class="flex w-full h-[700px] bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 p-6 justify-center items-center relative sm:hidden">
                <video class="absolute max-w-[350px] rounded-3xl rotate-2" autoplay loop muted src="../../images/kids/poster/skate.mp4">
                </video>
            </div>

            <div class="md:text-center text-left">
                <h1 class="mt-7 md:text-[71px] text-5xl  passion-bold tracking-tight">NIKE SB DAY ONE</h1>
                <p class="my-3">Made to skate. Designed to support you from the start.</p>
                <button class="bg-black px-4 py-1.5 hover:bg-black/70 rounded-full text-white mt-3 ">
                Shop
                </button>
            </div>
        </div>
    </section>

    `
}

class HeroSection extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = heroSection();
    }

}

customElements.define("hero-content", HeroSection);