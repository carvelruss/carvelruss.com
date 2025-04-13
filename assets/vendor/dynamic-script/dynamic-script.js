/**
 * Website Name: CodeFrites v1.0.0
 * Author: carvelruss.com
 */

document.addEventListener("DOMContentLoaded", function () {
  // Header Data
  const headerData = {
    logoSrc: "/assets/img/official-logo.svg",
    brandName: "",
    navLinks: [
      { text: "Home", href: "#" },
      { text: "About", href: "#" },
      { text: "Services", href: "#" },
      { text: "Portfolio", href: "#" },
      { text: "Articles", href: "#" },
      { text: "Contact", href: "#" },
    ],
  };

  // Functions for Header
  function toggleDropdown(dropdown) {
    dropdown.classList.toggle("active");
  }

  function closeDropdowns() {
    const dropdowns = document.querySelectorAll(".navbar .dropdown ul");
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }

  function handleDropdownClick(event) {
    event.preventDefault();
    const dropdown = event.target.nextElementSibling;
    closeDropdowns();
    toggleDropdown(dropdown);
  }

  function handleDropdownHover(event) {
    const dropdown = event.target.nextElementSibling;
    toggleDropdown(dropdown);
  }

  function createContactItem(contact) {
    const contactItem = document.createElement("i");
    contactItem.classList.add(
      "bi",
      contact.iconClass,
      "d-flex",
      "align-items-center",
      "me-3"
    );
    if (contact.link) {
      const link = document.createElement("a");
      link.href = contact.link;
      link.textContent = contact.text;
      contactItem.appendChild(link);
    } else {
      contactItem.textContent = contact.text;
    }
    return contactItem;
  }

  function createSocialLink(social) {
    const socialLink = document.createElement("a");
    socialLink.href = social.link;
    const socialIcon = document.createElement("i");
    socialIcon.classList.add("bi", social.iconClass);
    socialLink.appendChild(socialIcon);
    return socialLink;
  }

  function populateHeader() {
    const headerTitle = document.getElementById("brandName");
    const logoContainer = document.getElementById("logo-container");
    const logo = document.getElementById("logo");
    const navLinksContainer = document.getElementById("navLinks");

    logo.src = headerData.logoSrc;
    headerTitle.textContent = headerData.brandName;
    logoContainer.href = headerData.navLinks[0].href;

    navLinksContainer.innerHTML = "";
    headerData.navLinks.forEach((link) => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.textContent = link.text;
      anchor.href = link.href;
      listItem.appendChild(anchor);

      if (link.subLinks && link.subLinks.length > 0) {
        listItem.classList.add("dropdown");
        const dropdown = document.createElement("ul");
        dropdown.classList.add("dropdown-menu");
        link.subLinks.forEach((subLink) => {
          const subListItem = document.createElement("li");
          const subLinkAnchor = document.createElement("a");
          subLinkAnchor.textContent = subLink.text;
          subLinkAnchor.href = subLink.href;
          subListItem.appendChild(subLinkAnchor);
          dropdown.appendChild(subListItem);
        });

        listItem.addEventListener("click", handleDropdownClick);
        listItem.addEventListener("mouseenter", handleDropdownHover);
        listItem.addEventListener("mouseleave", handleDropdownHover);

        listItem.appendChild(dropdown);
      }

      navLinksContainer.appendChild(listItem);
    });

    const contactInfoContainer = document.getElementById("contact-info");
    const socialLinksContainer = document.getElementById("social-links");

    // Topbar Data
    const topbarData = {
      contactInfo: [
        {
          iconClass: "bi-envelope",
          text: "friesquad@codefrites.com",
          link: "mailto:friesquad@codefrites.com",
        },
        {
          iconClass: "bi-phone",
          text: "+63 909 135 2732",
          link: "tel:+639091352732",
        },
      ],
      socialLinks: [
        { iconClass: "bi-facebook", link: "#" },
        { iconClass: "bi-instagram", link: "#" },
        { iconClass: "bi-linkedin", link: "#" },
      ],
    };

    topbarData.contactInfo.forEach((contact) => {
      const contactItem = createContactItem(contact);
      contactInfoContainer.appendChild(contactItem);
    });

    topbarData.socialLinks.forEach((social) => {
      const socialLink = createSocialLink(social);
      socialLinksContainer.appendChild(socialLink);
    });
  }

  populateHeader();

  // Rest of your header script for mobile navigation and any other functionality.

  // Footer Script
  const footerData = {
    brandLogo: "/assets/img/official-logo.svg",
    brandName: "CodeFrites",
    brandDescription:
      "At CodeFrites, we're not just your ordinary website development company; we bring a unique and personal touch to every project we undertake.",
    companyNumber: "+63 909 135 2732",
    companyEmail: "friesquad@codefrites.com",
    storysetAttribute: "https://storyset.com/online",
    socialLinksDescription:
      "To get more updated on latest promotion and more, follow our social media accounts.",
    socialLinks: {
      facebook: "#",
      instagram: "#",
    },
    usefulLinks: [
      { title: "Home", url: "#" },
      { title: "About us", url: "#" },
      { title: "Services", url: "#" },
      { title: "Portfolio", url: "#" },
      { title: "Articles", url: "#" },
      { title: "Terms of service", url: "#" },
      { title: "Privacy policy", url: "#" },
    ],
    ourServices: [
      {
        title: "White-Label Web Development",
        url: "#",
      },
      {
        title: "CMS Integration",
        url: "#",
      },
      {
        title: "E-commerce Development",
        url: "#",
      },
      {
        title: "Front-End Development",
        url: "#",
      },
      {
        title: "Back-End Development",
        url: "#",
      },
      {
        title: "Affiliates Services",
        url: "#",
      },
    ],
  };

  function setContent(elementId, content) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = content;
    }
  }

  function setLink(elementId, url) {
    const element = document.getElementById(elementId);
    if (element) {
      element.setAttribute("href", url);
    }
  }

  function setSocialLinks(socialLinks) {
    const socialLinksContainer = document.getElementById("footer-social-links");
    if (socialLinksContainer) {
      let socialLinksHtml = "";
      for (const platform in socialLinks) {
        socialLinksHtml += `<a href="${socialLinks[platform]}" class="${platform}"><i class="bx bxl-${platform}"></i></a>`;
      }
      socialLinksContainer.innerHTML = socialLinksHtml;
    }
  }

  function setUsefulLinks(usefulLinks) {
    const linksContainer = document.getElementById("useful-links");
    if (linksContainer) {
      let linksHtml = "";
      usefulLinks.forEach((link) => {
        linksHtml += `<li><i class="bx bx-chevron-right"></i> <a href="${link.url}">${link.title}</a></li>`;
      });
      linksContainer.innerHTML = linksHtml;
    }
  }

  function setOurServices(ourServices) {
    const servicesContainer = document.getElementById("our-services");
    if (servicesContainer) {
      let servicesHtml = "";
      ourServices.forEach((service) => {
        servicesHtml += `<li><i class="bx bx-chevron-right"></i> <a href="${service.url}">${service.title}</a></li>`;
      });
      servicesContainer.innerHTML = servicesHtml;
    }
  }

  function initFooter() {
    setContent(
      "footer-logo-container",
      `<img src="${footerData.brandLogo}" alt="${footerData.brandName}">`
    );
    setContent("footer-brandName", footerData.brandName);
    setContent("brandDescription", footerData.brandDescription);
    setContent(
      "socialNetworksDescription",
      footerData.socialNetworksDescription
    );
    setContent(
      "companyNumber",
      `<strong>Phone:</strong> <a href="tel:${footerData.companyNumber}">${footerData.companyNumber}</a>`
    );
    setContent(
      "companyEmail",
      `<strong>Email:</strong> <a href="mailto:${footerData.companyEmail}">${footerData.companyEmail}</a>`
    );
    setContent(
      "storysetAttribute",
      `<p>Storyset: <a href="${footerData.storysetAttribute}">${footerData.storysetAttribute}</a></p>`
    );
    setContent("creditbrandName", `<strong>${footerData.brandName}</strong>`);

    setSocialLinks(footerData.socialLinks);
    setUsefulLinks(footerData.usefulLinks);
    setOurServices(footerData.ourServices);
  }

  initFooter();

  // Breadcrumbs Script
  function getPageNameFromURL() {
    const path = window.location.pathname;
    const parts = path.split("/");
    return parts[parts.length - 1].replace(".html", "");
  }

  function generatePageTitleAndBreadcrumbs() {
    const pageTitleElement = document.getElementById("pageTitle");
    const breadcrumbListElement = document.getElementById("breadcrumbList");

    const currentPageName = getPageNameFromURL();
    const breadcrumbMapping = [
      // Header
      { pageName: "index", text: "Home", url: "/index.html" },
      { pageName: "about", text: "About Us", url: "/pages/about.html" },
      { pageName: "services", text: "Services", url: "/pages/services.html" },
      {
        pageName: "portfolio",
        text: "Portfolio",
        url: "/pages/portfolio.html",
      },
      { pageName: "articles", text: "Articles", url: "/pages/articles.html" },
      { pageName: "contact", text: "Contact", url: "/pages/contact.html" },

      // Other Pages
      {
        pageName: "start-conversation",
        text: "Start Conversation",
        url: "/pages/start-conversation.html",
      },
      {
        pageName: "request-quotation",
        text: "Project Quotation",
        url: "/pages/request-quotation.html",
      },
      {
        pageName: "thank-you",
        text: "Thank You",
        url: "/pages/thank-you.html",
      },

      // Services
      {
        pageName: "white-label-web-development",
        text: "White-Label Web Development",
        url: "/pages/services/white-label-web-development.html",
        parentPage: "services",
      },
      {
        pageName: "cms-integration",
        text: "CMS Integration",
        url: "/pages/services/cms-integration.html",
        parentPage: "services",
      },
      {
        pageName: "ecommerce-development",
        text: "E-commerce Development",
        url: "/pages/services/ecommerce-development.html",
        parentPage: "services",
      },
      {
        pageName: "frontend-development",
        text: "Front-End Development",
        url: "/pages/services/frontend-development.html",
        parentPage: "services",
      },
      {
        pageName: "backend-development",
        text: "Back-End Development",
        url: "/pages/services/backend-development.html",
        parentPage: "services",
      },
      {
        pageName: "affiliates-services",
        text: "Affiliates Services",
        url: "/pages/services/affiliates-services.html",
        parentPage: "services",
      },

      // Portfolio
      {
        pageName: "concept-first",
        text: "Concept First",
        url: "/pages/portfolio/concept-first.html",
        parentPage: "portfolio",
      },
      {
        pageName: "achievers-dream",
        text: "Achievers Dream",
        url: "/pages/portfolio/achievers-dream.html",
        parentPage: "portfolio",
      },
      {
        pageName: "ad-plus",
        text: "Achievers Dream Student Portal",
        url: "/pages/portfolio/ad-plus.html",
        parentPage: "portfolio",
      },
      {
        pageName: "northern-realty",
        text: "Northern Realty",
        url: "/pages/portfolio/northern-realty.html",
        parentPage: "portfolio",
      },
      {
        pageName: "solar-x-charge",
        text: "Solar X-Charge",
        url: "/pages/portfolio/solar-x-charge.html",
        parentPage: "portfolio",
      },
      {
        pageName: "advantedge-films",
        text: "AdvantEdge Films",
        url: "/pages/portfolio/advantedge-films.html",
        parentPage: "portfolio",
      },
      {
        pageName: "thunderbeeva",
        text: "Thunderbee VA",
        url: "/pages/portfolio/thunderbeeva.html",
        parentPage: "portfolio",
      },
      {
        pageName: "grinders-choice",
        text: "Grinder's Choice",
        url: "/pages/portfolio/grinders-choice.html",
        parentPage: "portfolio",
      },

      // Add more pages link here as needed
    ];

    const currentPageInfo = breadcrumbMapping.find(
      (item) => item.pageName === currentPageName
    );
    pageTitleElement.textContent = currentPageInfo
      ? currentPageInfo.text
      : "Undefined - Please fix the error!";

    const breadcrumbs = [];
    breadcrumbs.push(
      breadcrumbMapping.find((item) => item.pageName === "index")
    );

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
      if (index === 0 || index === array.length - 2) {
        return `<li><a href="${item.url}">${item.text}</a></li>`;
      } else {
        return `<li>${item.text}</li>`;
      }
    });

    breadcrumbListElement.innerHTML = breadcrumbLinks.join("");
  }

  generatePageTitleAndBreadcrumbs();

  // Custom 404 Error Page Script
  const custom404Link = "/pages/error/404-error.html"; // Replace with your actual 404 page link

  function replaceEmptyLinks(elementContainer) {
    const emptyLinks = elementContainer.querySelectorAll('a[href="#"]');
    emptyLinks.forEach(function (link) {
      link.href = custom404Link;
    });
  }

  // Replace empty links in header, footer, and breadcrumbs
  replaceEmptyLinks(document.getElementById("navLinks"));
  replaceEmptyLinks(document.getElementById("useful-links"));
  replaceEmptyLinks(document.getElementById("our-services"));
  replaceEmptyLinks(document.getElementById("footer-social-links"));
  replaceEmptyLinks(document.getElementById("breadcrumbList"));
});
