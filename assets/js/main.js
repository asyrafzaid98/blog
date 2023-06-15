
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

 

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');

  function toggleScrolled() {
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

 



});