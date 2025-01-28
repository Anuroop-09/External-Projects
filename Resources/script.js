const frontEndContentBox = document.querySelector('.section__frontend #content__box');
const appBrewerContentBox = document.querySelector('.section__appbrewery #content__box');
const appContentBox = document.querySelector('.section__apps #content__box');
const frameworkContentBox = document.querySelector('.section__framework #content__box');

// Display Data handler
function displayData() {
    frontEndContentBox.innerHTML = "";
    appBrewerContentBox.innerHTML = "";
    appContentBox.innerHTML = "";
    frameworkContentBox.innerHTML = "";
    const frontEndData = data.frontEndResources;
    const appBreweryData = data.appBreweryResources;
    const appsData = data.appResources;
    const frameWorkData = data.frameWorkResources;
    
    loopData(frontEndData, frontEndContentBox, 'front-end');
    loopData(appBreweryData, appBrewerContentBox, 'app-brewery');
    loopData(appsData, appContentBox, 'apps');
    loopData(frameWorkData, frameworkContentBox, 'apps')
}

// Loop handler
function loopData (items, element, imgFolder) {
    for (const item of items) {
        const html = `
        <div class="col d-flex">
            <div class="col__main d-flex">
                <img src="./img/${imgFolder}/${item.img}" alt="" class="col__img">
                <h2 class="heading-secondary">
                    <a target="_blank" href="${item.link}" class="heading-secondary--link">${item.title}</a>
                </h2>
            </div>
            <p class="col__text">${item.content}</p>
        </div>`;

        element.insertAdjacentHTML('beforeend', html);
    }
}

const data = {
    frontEndResources: [
        {
            img: "dev-doc.jpg",
            title: "dev docs",
            content: "Dev Docs provides fully-managed technical services, including high-quality documentation, development, and design services",
            link: "https://devdocs.io/"
        },
        {
            img: "mdn-doc.png",
            title: "mdn docs",
            content: "MDN Web Docs is free-to-use resource on which we document the open web platform",
            link: "https://developer.mozilla.org/en-US/"
        },
        {
            img: "sean.svg",
            title: "Sean Halpin Resume",
            content: "Sean Halpin sample resume site for example for html and css practice",
            link: "https://web.archive.org/web/20180819202235js_/http://seanhalpin.io/"
        },
        {
            img: "appbrewery.png",
            title: "Outdated Content",
            content: "Angela Yu's outdated full stack webdevelopment course link from App Brewery organization",
            link: "https://appbrewery.com/p/legacy-complete-web-development-course/?utm_source=email-sendgrid&utm_medium=1565838&utm_campaign=2023-04-14&utm_term=31334738&utm_content=educational"
        },
        {
            img: "appbrewery.png",
            title: "Replit AppBrewery",
            content: "Learn to code through building real-world projects!",
            link: "https://replit.com/@appbrewery"
        },
        {
            img: "w3schools.png",
            title: "HTML DOM",
            content: "When an HTML document is loaded into a web browser, it becomes a document object",
            link: "https://www.w3schools.com/jsref/dom_obj_document.asp"
        },
        {
            img: "wikipedia.png",
            title: "Element Style",
            content: "The Elements of Style (also called Strunk & White) is a style guide for formal grammar used in American English writing",
            link: "https://en.wikipedia.org/wiki/The_Elements_of_Style"
        },
        {
            img: "google.png",
            title: "Google JQuery",
            content: "The Google Hosted Libraries is a stable, reliable, high-speed, globally available content distribution network for the most popular, open-source JavaScript libraries",
            link: "https://developers.google.com/speed/libraries#jquery"
        },
        {
            img: "jquery.jpg",
            title: "JQuery",
            content: "jQuery is a fast, small, and feature-rich JavaScript library",
            link: "https://jquery.com/download/"
        },
        {
            img: "bootstrap.png",
            title: "BootStrap",
            content: "Powerful, extensible, and feature-packed frontend toolkit",
            link: "https://getbootstrap.com/"
        },
        {
            img: "learn-enough.png",
            title: "CMD Line Codes",
            content: "Learn Enough Command Line to Be Dangerous is available as an ebook, an offline video series, and as a structured, self-paced online course",
            link: "https://www.learnenough.com/command-line-tutorial"
        },
        {
            img: "express.png",
            title: "Express",
            content: "Fast, unopinionated, minimalist web framework for Node.js",
            link: "https://expressjs.com/"
        },
        {
            img: "npm.png",
            title: "NPM",
            content: "Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages",
            link: "https://www.npmjs.com/"
        },
        {
            img: "gitignore.png",
            title: "Git Ignore",
            content: "This is GitHub’s collection of .gitignore file templates. We use this list to populate the .gitignore template choosers available in the GitHub.com interface when creating new repositories and files",
            link: "https://github.com/github/gitignore"
        },
        {
            img: "axios.jpg",
            title: "Axios",
            content: "Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase)",
            link: "https://axios-http.com/docs/intro"
        },
        {
            img: "secrets.png",
            title: "Secrets API",
            content: "Welcome to the Secrets API. This API allows you to manage and retrieve secrets anonymously. Please refer to the documentation below for details on how to interact with the API",
            link: "https://secrets-api.appbrewery.com/"
        },
    ],
    appBreweryResources: [
        {
            img: "simon.png",
            title: "simon game demo",
            content: "Simon is an electronic game of short-term memory skill",
            link: "https://londonappbrewery.github.io/Simon-Game/"
        },
        {
            img: "appbrewery.png",
            title: "CSS Positioning",
            content: "A demo website for CSS Positionoing",
            link: "https://appbrewery.github.io/css-positioning/"
        },
        {
            img: "appbrewery.png",
            title: "CSS Inspection",
            content: "A demo website for CSS Display Property",
            link: "https://appbrewery.github.io/css-inspection/"
        },
        {
            img: "appbrewery.png",
            title: "CSS Display",
            content: "A demo website for CSS Display Property",
            link: "https://appbrewery.github.io/css-display/"
        },
        {
            img: "appbrewery.png",
            title: "Grid vs flexbox",
            content: "A demo website for CSS Grid & Flexbox",
            link: "https://appbrewery.github.io/grid-vs-flexbox/"
        },
        {
            img: "appbrewery.png",
            title: "Just add css",
            content: "A demo website for just add css",
            link: "https://appbrewery.github.io/just-add-css/"
        },
        {
            img: "flexbox-froggy.png",
            title: "Flexbox Froggy",
            content: "A demo website for Flexbox Froggy",
            link: "https://appbrewery.github.io/flexboxfroggy/"
        },
        {
            img: "fussy-flags.jpg",
            title: "fussy flags",
            content: "All of the world's flags, ranked by fussiness. From least fussy to most fussy, measured in Palaus. By Michael Lascarides",
            link: "http://lascarid.es/fussyflags/"
        },
        {
            img: "appbrewery.png",
            title: "Grid Sizing",
            content: "A demo website for grid sizing fundamentals",
            link: "https://appbrewery.github.io/grid-sizing/"
        },
        {
            img: "appbrewery.png",
            title: "BootStarp Excersize",
            content: "A demo website for Boot strap excersize",
            link: "https://appbrewery.github.io/bootstrap-layout/"
        },
    ],

    appResources: [
        {
           img: "codepen.png",
           title: "Codepen editor",
           content: "CodePen is a bit unique in that it's all about writing and showing front end code, including JavaScript",
           link: "https://codepen.io/" 
        },
        {
           img: "cssbtngenerator.png",
           title: "css btn generator",
           content: "Css btn generator is a free online tool that allows you to create cross-browser CSS button styles in seconds",
           link: "https://css3buttongenerator.com/" 
        },
        {
           img: "cropcircle.png",
           title: "Crop circle",
           content: "Free tool to crop a circle in the image online, Simple tool, drop your image and adjust the circle cropper to fit the desired location in the image",
           link: "https://crop-circle.imageonline.co/" 
        },
        {
           img: "giphy.png",
           title: "giphy",
           content: "GIPHY is how you search, share, and discover GIFs.",
           link: "https://giphy.com/" 
        },
        {
           img: "noimage.jpg",
           title: "css font stack",
           content: "A font stack is a list of fonts in the CSS font-family declaration",
           link: "https://www.cssfontstack.com/" 
        },
        {
           img: "googlefonts.png",
           title: "google fonts",
           content: "Making the web more beautiful, fast, and open through great typography",
           link: "https://fonts.google.com/" 
        },
        {
           img: "noimage.jpg",
           title: "JS/CSS Minify",
           content: "This JS and CSS minifier removes whitespace, strips comments, combines files, and optimizes/shortens a few common programming patterns",
           link: "https://www.minifier.org/" 
        },
        {
           img: "gitbranching.png",
           title: "Learn Git branching",
           content: "Learn Git Branching is the most visual and interactive way to learn Git on the web",
           link: "https://learngitbranching.js.org/" 
        },
        {
           img: "github.png",
           title: "Quake js",
           content: "QuakeJS is a port of ioquake3 to JavaScript with the help of Emscripten",
           link: "https://github.com/inolen/quakejs" 
        },
        {
           img: "github.png",
           title: "Awesome beignners",
           content: "Awesome First PR Opportunities",
           link: "https://github.com/MunGell/awesome-for-beginners" 
        },
        {
           img: "github.png",
           title: "Awesome selfhosted",
           content: "Self-hosting is the practice of hosting and managing applications on your own server(s) instead of consuming from SaaSS providers",
           link: "https://github.com/awesome-selfhosted/awesome-selfhosted" 
        },
        {
           img: "github.png",
           title: "Word Mastermind",
           content: "This game is a clone of Wordle. It's like the MasterMind game, but instead of colors you have to guess words",
           link: "https://github.com/clupasq/word-mastermind" 
        },
        {
           img: "diffchecker.jpg",
           title: "Diff Checker",
           content: "Find the difference between two text files",
           link: "https://www.diffchecker.com/" 
        },
    ],
    
    frameWorkResources: [
        {
           img: "codesandbox.png",
           title: "React Sandbox",
           content: "Instant cloud development. CodeSandbox gives you 24/7 collaborative cloud development environments (CDEs) that resume in 2 seconds",
           link: "https://codesandbox.io/" 
        },
        
    ]
}

displayData();