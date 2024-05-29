# **`Project Overview`**

This project includes the following pages cloned from Nike website:

1. Home Page
2. Men page
3. Women page
4. Kids page
5. New & Featured page

# `Project Objective`

1. Develop a simplified version of the [Nike.com](http://Nike.com) 5 pages, focusing on key elements such as the header, navigation menu, body, and footer.
2. Create hover, dropdown, accordions lists for featured products , interactions
3. Ensure basic responsiveness for the demo pages to showcase adaptability across different screen sizes of desktop, tablet, mobile phone , and some customize screen sizes that was used to maintain the old size of the original website.
4. Include dummy content and images to simulate the appearance of a live website.
5. Implement clickable links to additional pages on navigation bar and hamburger icon(on small screen) for demonstration purposes.

# Timeline

- Research and Planning: [4/April/2024]
- Design and Development: [6/April/2024] to [30/May/2024]
- Optimization and Documentation: [05/May/2024] to [29/May/2024]
- Deployment: [30/May/2024]

# `Resources`

- HTML - **defines the structure of the content**
- CSS - **determines the style and layout**
- Javascript -  **makes the content interactive**
- Framework - Tailwind CSS
    - *Include tailwind library :*
        
        Use CDN link for Tailwind CSS ( on the official Tailwind Css Website )
        
    - *Add the CDN Link to HTML File :*
        - Inside the <head> tag of HTML file, add the link to the Tailwind CSS CDN
        - Use Tailwind Configuration to customize
        - type="text/tailwindcss" to add custom CSS that supports all of Tailwind’s features.
        - enable first-party plugins (like forms and typography) using the plugins query parameter in the CDN link.

# `Development Process`

## `HTML`

## **Use Semantic Tags**

- **Use semantic tags**: to improve readability of tags ⇒ add opt for semantic HTML elements like **`<section>`**, **`<button>`** tags

## Avoid Inline CSS

⇒ Difficult to maintain : 

- Not reusable across pages, as the CSS rules are confined within a specific HTML page. Thus, we may need to create different CSS rules for different pages
- The inline CSS comes within head section- this may enhance the loading time of the specific page.

### ⇒ Prefer :

Keep styles in external CSS files to ensure maintainability and separation of concerns.

```html
<!-- example -->
<div class="bg-blue-200">Shop</div>
```

## **Proper Tag Closure**

- **Close all tags**: Ensure all HTML tags are properly closed to prevent validation errors.

## `JavaScript`

### **Naming Conventions**

- **Variables and Functions**: Use camelCase (e.g., **`myVariable`**, **`calculateTotal`**).
- **Classes**: Use PascalCase (e.g., **`MyClass`**, **`UserModel`**).

### **Commenting**

- **Inline comments**: Use sparingly to explain specific lines of code.

e.g. 

**`<!-- Header Section -->`**

**`// Carousel function`**

### **Function Declarations**

- **Named functions**: Use function declarations for better readability.
- **Arrow functions**: Use for concise syntax, especially for anonymous functions.
- **Example**:

### **Modules and Imports/Exports**

- **Use ES6 modules**: Organize code using **`import`** and **`export`**.
- **Example**:

## Components

***⇒ Using custom elements***

One of the key features of web components is the ability to create *custom elements*: that is, HTML elements whose behavior is defined by the web developer, that extend the set of elements available in the browser.

Custom element lifecycle callbacks include:

- `connectedCallback()`: called each time the element is added to the document. The specification recommends that, as far as possible, developers should implement custom element setup in this callback rather than the constructor.

### Registering a custom element

To make a custom element available in a page, call the define() method of Window.customElements.

### Using a custom element

Once you've defined and registered a custom element, you can use it in your code.

To use a customized built-in element, use the built-in element but with the custom name as the value of the is attribute.

# `Responsive`

### Screen Size:

**`max-w-1850px`**

### Screen Responsive Design : using tailwind and add more customize design to fit with the original website’s responsiveness

**`.sm:bg-white`**

**`.md:grid grid-col`** 

**`.lg:flex`**

Customize : 

**e.g. `min-[1090px]`**

# **`Folder Structure`**

1. **Src (folder)**:
    - Main container directory for organizing all project resources.
- **Images folder** : contain images folder of each pages (remain the same)
    
    → in each sub folders : have images folders that contains the images of its sections
    
- **Pages (sub folder)**:
    - Holds HTML files or templates representing different pages of the website.
        
        ⇒ In each folders have its own javascript files of its page and it will link together in ‘page’.js e.g. **`home.js`**
        
- **Component (sub folder)**:
    - Includes JavaScript files responsible for different functionalities or components that will be use as global components on the website.
    - Use Dynamic Component which making it more convenient to works with other files/pages
- **Style (sub folder)**:
    - Contains CSS files that style various components or sections of the website.
    - Files  **`Style.css`**control the visual appearance and fonts …ensuring consistency in design.
1. **Additional Files**:
    - **`.gitignore`**:
        - Specifies files and directories to exclude from version control, ensuring a clean and focused repository.
    - **`ReadMe.md`**:
        - Provides project documentation, instructions, or details about the project setup, helping developers understand and contribute to the project effectively.
    - **`tailwind.config.js`**:
        - Configuration file for Tailwind CSS, allowing customization of the CSS framework to fit specific project requirements and design preferences.