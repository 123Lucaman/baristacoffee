// active page

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.pageLink');



navLinks.forEach((link) => {
  if(link.href.includes(`${activePage}`)) {
      link.classList.add('activePage');
  };
});

