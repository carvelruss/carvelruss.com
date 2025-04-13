/**
 * Website Name: CodeFrites v1.0.0
 * Author: carvelruss.com
 */

document.addEventListener("DOMContentLoaded", function () {
  // 404 ERROR
  const custom404Link = "/error/page-not-found.html";

  function replaceEmptyLinks(elementContainer) {
    const emptyLinks = elementContainer.querySelectorAll('a[href="#"]');
    emptyLinks.forEach(function (link) {
      link.href = custom404Link;
    });
  }

  // Header Data
  const headerData = {
    logoSrc: "/assets/img/official-logo.svg",
    brandName: "",
    navLinks: [
      { text: "Home", href: "/index.html" },
      { text: "About", href: "#" },
      { text: "Services", href: "#" },
      { text: "Our Work", href: "/p/our-work.html" },
      { text: "Articles", href: "#" },
      // Add more navigation links as needed
      // Example for a dropdown link:
      //   {
      //     text: 'Drop Down',
      //     href: '#',
      //     subLinks: [
      //       { text: 'Drop Down 1', href: '#' },
      //       {
      //         text: 'Deep Drop Down',
      //         subLinks: [
      //           { text: 'Deep Drop Down 1', href: '#' },
      //           { text: 'Deep Drop Down 2', href: '#' },
      //           { text: 'Deep Drop Down 3', href: '#' },
      //           { text: 'Deep Drop Down 4', href: '#' },
      //           { text: 'Deep Drop Down 5', href: '#' },
      //         ],
      //       },
      //       { text: 'Drop Down 2', href: '#' },
      //       { text: 'Drop Down 3', href: '#' },
      //       { text: 'Drop Down 4', href: '#' },
      //     ],
      //   },
      { text: "Contact", href: "#" },
    ],
  };

  // Topbar Data
  const topbarData = {
    contactInfo: [
      {
        iconClass: "bi-envelope",
        text: "hello@carvelruss.com",
        link: "mailto:hello@carvelruss.com",
      },
      {
        iconClass: "bi-phone",
        text: "+63 909 135 2732",
        link: "tel:+639091352732",
      },
      // Add more contact information as needed
    ],
    socialLinks: [
      { iconClass: "bi-facebook", link: "#" },
      { iconClass: "bi-instagram", link: "#" },
      { iconClass: "bi-linkedin", link: "#" },
      // Add more social links as needed
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
    // Header
    const headerTitle = document.getElementById("brandName");
    const logoContainer = document.getElementById("logo-container"); // Get the logo container element
    const logo = document.getElementById("logo");
    const navLinksContainer = document.getElementById("navLinks");

    logo.src = headerData.logoSrc;
    headerTitle.textContent = headerData.brandName;

    // Populate the logo link
    logoContainer.href = headerData.navLinks[0].href; // Set the logo link dynamically

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

    // Topbar
    const contactInfoContainer = document.getElementById("contact-info");
    topbarData.contactInfo.forEach((contact) => {
      const contactItem = createContactItem(contact);
      contactInfoContainer.appendChild(contactItem);
    });

    const socialLinksContainer = document.getElementById("social-links");
    topbarData.socialLinks.forEach((social) => {
      const socialLink = createSocialLink(social);
      socialLinksContainer.appendChild(socialLink);
    });

    // Call the function to replace empty links
    replaceEmptyLinks(navLinksContainer);
  }

  populateHeader();

  // Rest of your script for mobile navigation and any other functionality.
});
