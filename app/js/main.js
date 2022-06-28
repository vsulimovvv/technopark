window.addEventListener('DOMContentLoaded', () => {
  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ===== Custom select
  $('select').niceSelect();

  // * ===== datepicker
  $(function () {
    $('#datepicker').datepicker();
  });

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.production__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 50,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        navigation: {
          nextEl: el.querySelector('.production__slider .swiper-button-next'),
          prevEl: el.querySelector('.production__slider .swiper-button-prev'),
        },
        breakpoints: {
          320: {
            spaceBetween: 20,
          },
          991: {
            spaceBetween: 55,
          },
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.support__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 30,

      navigation: {
        nextEl: document.querySelector('.support__slider .swiper-button-next'),
        prevEl: document.querySelector('.support__slider .swiper-button-prev'),
      },
    });
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.hashtags__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 30,
    });
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.news-section__slider');
    new Swiper(sliderEl, {
      slidesPerView: 'auto',
      spaceBetween: 80,
      navigation: {
        nextEl: document.querySelector(
          '.news-section__content .swiper-button-next'
        ),
        prevEl: document.querySelector(
          '.news-section__content .swiper-button-prev'
        ),
      },
      breakpoints: {
        320: {
          spaceBetween: 20,
        },
        991: {
          spaceBetween: 80,
        },
      },
    });
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Mixer
  (function mixer() {
    const mixContent = document.querySelector('.mixer');
    if (mixContent) {
      const mixer = mixitup(mixContent);
    }
  })();

  //* Change Background Header
  function scrollHeader() {
    const nav = document.querySelector('header');

    if (this.scrollY >= 50) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }
  window.addEventListener('scroll', scrollHeader);

  // ! Change
  const header = document.querySelector('header');
  if (window.pageYOffset >= 50) {
    header.classList.add('scroll-header');
  }

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.infrastructure__btn', '.popup--event', '.popup__close');
    bindModal('.contact-btn', '.popup--contact', '.popup__close');
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    if (header) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs('.tabs', '.tabs-btn', '.tabs-content', 'tabs-btn--active');
  someTabs(
    '.production-tabs',
    '.production-tabs-btn',
    '.production-tabs-content',
    'production-tabs-btn--active'
  );
});
