const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Update the navigation menu
const nav = document.querySelector("nav");
nav.children[0].textContent = siteContent["nav"]["nav-item-1"];
nav.children[1].textContent = siteContent["nav"]["nav-item-2"];
nav.children[2].textContent = siteContent["nav"]["nav-item-3"];
nav.children[3].textContent = siteContent["nav"]["nav-item-4"];
nav.children[4].textContent = siteContent["nav"]["nav-item-5"];
nav.children[5].textContent = siteContent["nav"]["nav-item-6"];

// Update main header
const headerOne = document.querySelector("h1");
headerOne.textContent = siteContent["cta"]["h1"];

// Update top image
const headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"]);

// Update button
const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

// Update section img
const sectionImage = document.getElementById("middle-img");
sectionImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Update main section headers
const mainContent = document.querySelector(".main-content");
const sectionTitle = mainContent.querySelectorAll("h4");
const sectionHeaderArray = Array.from(sectionTitle);
sectionHeaderArray[0].textContent = siteContent["main-content"]["about-h4"];
sectionHeaderArray[1].textContent = siteContent["main-content"]["features-h4"];
sectionHeaderArray[2].textContent = siteContent["main-content"]["product-h4"];
sectionHeaderArray[3].textContent = siteContent["main-content"]["services-h4"];
sectionHeaderArray[4].textContent = siteContent["main-content"]["vision-h4"];

// Update main section text
const mainText = mainContent.querySelectorAll("p");
const sectionTextArray = Array.from(mainText);
sectionTextArray[0].textContent = siteContent["main-content"]["about-content"];
sectionTextArray[1].textContent = siteContent["main-content"]["features-content"];
sectionTextArray[2].textContent = siteContent["main-content"]["product-content"];
sectionTextArray[3].textContent = siteContent["main-content"]["services-content"];
sectionTextArray[4].textContent = siteContent["main-content"]["vision-content"];

// Update contact section header
const contact = document.querySelector(".contact");
const contactHeader = contact.querySelector("h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

// Update contact section text
const contactTextArray = Array.from(contact.querySelectorAll("p"));
contactTextArray[0].textContent = siteContent["contact"]["address"];
contactTextArray[1].textContent = siteContent["contact"]["phone"];
contactTextArray[2].textContent = siteContent["contact"]["email"];

// Update footer section


