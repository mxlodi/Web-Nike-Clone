function createBTN (title, customClass) {
    return `
    
        <button class="py-2 px-2 ${customClass} rounded-full">${title}</button>
  
    `;
}

class createBTNComponent extends HTMLElement {
    connectedCallback () {
        const title = this.getAttribute("title");
        const customClass = this.getAttribute("customClass");
        this.innerHTML = createBTN(title, customClass);
    }
}
customElements.define("btn-component", createBTNComponent);