/**
 * Website Name: CodeFrites v1.0.0
 * Author: carvelruss.com
 */

// Function to extract the page name from the URL
function getPageNameFromURL() {
  const path = window.location.pathname; // Get the current URL path
  const parts = path.split("/"); // Split the path by slashes
  return parts[parts.length - 1].replace(".html", ""); // Return the last part as the page name without .html
}

// Function to generate the <h2> title and breadcrumbs based on the page name
function generatePageTitleAndBreadcrumbs() {
  const pageTitleElement = document.getElementById("pageTitle");
  const breadcrumbListElement = document.getElementById("breadcrumbList");

  const currentPageName = getPageNameFromURL();
  const breadcrumbMapping = [
    //Header
    { pageName: "index", text: "Home", url: "/index.html" },
    { pageName: "about", text: "About Us", url: "/p/about.html" },
    { pageName: "services", text: "Services", url: "/p/services.html" },
    { pageName: "our-work", text: "Our Work", url: "/p/our-work.html" },
    { pageName: "articles", text: "Articles", url: "/p/articles.html" },
    { pageName: "contact", text: "Contact", url: "/p/contact.html" },

    //Other Pages
    {
      pageName: "start-conversation",
      text: "Start Conversation",
      url: "/p/start-conversation.html",
    },
    {
      pageName: "request-quotation",
      text: "Project Quotation",
      url: "/p/request-quotation.html",
    },
    { pageName: "thank-you", text: "Thank You", url: "/p/thank-you.html" },
    {
      pageName: "media-library",
      text: "Media Library",
      url: "/p/media-library.html",
    },

    //Services
    {
      pageName: "white-label-web-development",
      text: "White-Label Web Development",
      url: "/p/services/white-label-web-development.html",
      parentPage: "services",
    },
    {
      pageName: "cms-integration",
      text: "CMS Integration",
      url: "/p/services/cms-integration.html",
      parentPage: "services",
    },
    {
      pageName: "ecommerce-development",
      text: "E-commerce Development",
      url: "/p/services/ecommerce-development.html",
      parentPage: "services",
    },
    {
      pageName: "frontend-development",
      text: "Front-End Development",
      url: "/p/services/frontend-development.html",
      parentPage: "services",
    },
    {
      pageName: "backend-development",
      text: "Back-End Development",
      url: "/p/services/backend-development.html",
      parentPage: "services",
    },
    {
      pageName: "affiliates-services",
      text: "Affiliates Services",
      url: "/p/services/affiliates-services.html",
      parentPage: "services",
    },

    //Our Work
    {
      pageName: "concept-first",
      text: "Concept First",
      url: "/p/our-work/concept-first.html",
      parentPage: "our-work",
    },
    {
      pageName: "achievers-dream",
      text: "Achievers Dream",
      url: "/p/our-work/achievers-dream.html",
      parentPage: "our-work",
    },
    {
      pageName: "ad-plus",
      text: "Achievers Dream Student Portal",
      url: "/p/our-work/ad-plus.html",
      parentPage: "our-work",
    },
    {
      pageName: "northern-realty",
      text: "Northern Realty",
      url: "/p/our-work/northern-realty.html",
      parentPage: "our-work",
    },
    {
      pageName: "solar-x-charge",
      text: "Solar X-Charge",
      url: "/p/our-work/solar-x-charge.html",
      parentPage: "our-work",
    },
    {
      pageName: "advantedge-films",
      text: "AdvantEdge Films",
      url: "/p/our-work/advantedge-films.html",
      parentPage: "our-work",
    },
    {
      pageName: "thunderbeeva",
      text: "Thunderbee VA",
      url: "/p/our-work/thunderbeeva.html",
      parentPage: "our-work",
    },
    {
      pageName: "grinders-choice",
      text: "Grinder`s Choice",
      url: "/p/our-work/grinders-choice.html",
      parentPage: "our-work",
    },

    // Jobs
    { pageName: "jobs", text: "Jobs", url: "/p/jobs.html" },
    {
      pageName: "application-form",
      text: "Application Form",
      url: "/p/jobs/application-form.html",
      parentPage: "jobs",
    },

    //Job Openings
    {
      pageName: "frontend-developer",
      text: "Frontend Developer",
      url: "/p/jobs/frontend-developer.html",
      parentPage: "jobs",
    },

    //Application Thank You Page
    {
      pageName: "thank-you",
      text: "Thank You",
      url: "/p/jobs/application-form/thank-you.html",
      parentPage: "application-form",
    },
  ];

  // Set the <h2> title based on the page name
  const currentPageInfo = breadcrumbMapping.find(
    (item) => item.pageName === currentPageName
  );
  pageTitleElement.textContent = currentPageInfo
    ? currentPageInfo.text
    : "Undefined - Please fix the error!";

  // Generate the breadcrumbs based on the page name
  const breadcrumbs = [];

  // Always include the "Home" link
  breadcrumbs.push(breadcrumbMapping.find((item) => item.pageName === "index"));

  // Add the current page and its parent pages to the breadcrumbs
  if (currentPageInfo) {
    if (currentPageInfo.parentPage) {
      const parentPageInfo = breadcrumbMapping.find(
        (item) => item.pageName === currentPageInfo.parentPage
      );
      if (parentPageInfo) {
        breadcrumbs.push(parentPageInfo);
      }
    }
    breadcrumbs.push(currentPageInfo);
  }

  const breadcrumbLinks = breadcrumbs.map((item, index, array) => {
    // Check if it's the "Home" link or other pages
    if (index === 0 || index === array.length - 2) {
      return `<li><a href="${item.url}">${item.text}</a></li>`;
    } else {
      return `<li>${item.text}</li>`;
    }
  });

  breadcrumbListElement.innerHTML = breadcrumbLinks.join("");
}

// Call the function to generate the <h2> title and breadcrumbs
generatePageTitleAndBreadcrumbs();
