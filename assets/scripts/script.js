document.addEventListener('DOMContentLoaded', function () {
  console.log("JavaScript file is linked correctly.");

  // Helper: Setup IntersectionObserver
  function setupObserver(targets, callback, options = {}) {
    const defaultOptions = { rootMargin: '0px', threshold: 0.5 };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
          obs.unobserve(entry.target); // Unobserve after triggering
        }
      });
    }, { ...defaultOptions, ...options });

    targets.forEach(target => observer.observe(target));
  }

  // Typewriter Effect
  const typeWriter = (element, text, speed, callback) => {
    let i = 0;
    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) callback();
    };
    type();
  };

  const typeWriterWithDelete = (element, text, speed, delay) => {
    let i = 0;
    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(deleteText, delay);
      }
    };
    const deleteText = () => {
      if (i > 0) {
        element.innerHTML = text.substring(0, i - 1);
        i--;
        setTimeout(deleteText, speed);
      } else {
        setTimeout(type, delay);
      }
    };
    type();
  };

  const typeElement = document.querySelector('.type');
  const typeElement2 = document.querySelector('.type2');
  if (typeElement) {
    typeWriter(typeElement, "about-me.md", 500, () => {
      if (typeElement2) {
        typeWriterWithDelete(typeElement2, 'println!("Hello world!");', 150, 5000);
      }
    });
  }

  // Swiper Setup
  const swiperContainer = document.querySelector('.swiper-container');
  if (swiperContainer) {
    const swiper = new Swiper(swiperContainer, {
      direction: 'vertical',
      loop: true,
      pagination: {el: '.swiper-pagination', clickable: true},
      navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'},
      effect: 'slide',
      mousewheel: {sensitivity: 0.5},
      keyboard: {enabled: true, onlyInViewport: false},
    });

    const button = document.querySelector('#btn');
    if (button) button.addEventListener('click', e => {
      e.preventDefault();
      swiper.slideNext();
    });

    document.querySelectorAll('.dock-navbar .dock-button').forEach((dockButton, index) => {
      dockButton.addEventListener('click', e => {
        e.preventDefault();
        swiper.slideTo(index);
      });
    });

    const logoLink = document.querySelector('.logo a');
    if (logoLink) logoLink.addEventListener('click', e => {
      e.preventDefault();
      swiper.slideTo(0);
    });


    swiper.on('slideChange', () => {
      console.log('Slide changed to:', swiper.activeIndex);
      if (swiper.activeIndex === 3) { // Slide 3 (zero-based index)
        loadingLineElements.forEach(element => {
          console.log('Unpausing animation for element:', element);
          element.style.animationPlayState = 'running';
        });
      }
    });
// Ensure setupObserver function is defined


    const loadingLineElements = document.querySelectorAll('.loading-line');
    swiper.on('slideChange', () => {
      if (swiper.activeIndex === 2) { // Slide 3 (zero-based index)
        loadingLineElements.forEach(element => {
          element.style.animationPlayState = 'running';
        });
      }
    });

    const sloadingLineElements = document.querySelectorAll('.sloading-line');
    swiper.on('slideChange', () => {
      if (swiper.activeIndex === 3) { // Slide 3 (zero-based index)
        sloadingLineElements.forEach(element => {
          element.style.animationPlayState = 'running';
        });
      }
    });

  }




  // Animation Observers for Sections and Bento Items
  const animatedElements = document.querySelectorAll('.section3 .box, .section3 .loading-line2');
  setupObserver(animatedElements, target => {
    target.style.animationPlayState = 'running';
  });

  const bentoItems = document.querySelectorAll('.section3 .bento-item i, .section3 .bento-item h3');
  setupObserver(bentoItems, target => {
    target.style.animationPlayState = 'running';
  });

  const sections = ['.section2', '.section4', '.section5'];
  sections.forEach(selector => {
    const section = document.querySelector(selector);
    const sequenceElement = section?.querySelector('.box');
    if (section && sequenceElement) {
      setupObserver([section], () => {
        sequenceElement.style.animationPlayState = 'running';
      });
    } else {
      console.error(`${selector} or its .box element not found`);
    }
  });

  // Email Icon
  const emailIcon = document.querySelector(".icon.mail span");
  const tooltip = document.querySelector(".icon.mail .tooltip");
  if (emailIcon && tooltip) {
    emailIcon.addEventListener("click", () => {
      const email = 'martriix.csgo@gmail.com';
      navigator.clipboard?.writeText(email)
        .then(() => tooltip.innerHTML = "Copied!")
        .catch(err => console.error("Failed to copy email: ", err));
    });
  }

  // Unpause container
  const container = document.querySelector('.container');
  if (container) {
    setupObserver([container], target => {
      target.style.animationPlayState = 'running';
    });
  } else {
    console.error('Container not found');
  }
});