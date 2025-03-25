document.addEventListener('DOMContentLoaded', function () {
    const features = [
        {
            description: "I started with Graphic Design at the start of 2018, you can find my designs in the showcase, my instagram or YouTube channel. I was mostly focused on Minecraft graphics.",
        },
        {
            name: "WEB DEVELOPMENT",
            icon: "fas fa-code",
        },
        {
            name: "SHOWCASE",
            description: "Click down here to see my showcase.",
            cta: "Learn more",
            ctaLink: "showcase.html",
        },
        {
            name: "LANGUAGES & TOOLS",
            icons: [
                { src: "assets/icons/photoshop-icon.png", tooltip: "Photoshop", link: "https://photoshop.adobe.com/" },
                { src: "assets/icons/lightroom-icon.png", tooltip: "Lightroom", link: "https://lightroom.adobe.com/" },
                { src: "assets/icons/gimp-icon.png", tooltip: "GIMP", link: "https://www.gimp.org/" },
                { src: "assets/icons/cinema4d-icon.png", tooltip: "Cinema 4D", link: "https://www.maxon.net/en/cinema-4d" },
                { src: "assets/icons/cinema4d-icon.png", tooltip: "Cinema 4D", link: "https://www.maxon.net/en/cinema-4d" },
                { src: "assets/icons/cinema4d-icon.png", tooltip: "Cinema 4D", link: "https://www.maxon.net/en/cinema-4d" },
                { src: "assets/icons/cinema4d-icon.png", tooltip: "Cinema 4D", link: "https://www.maxon.net/en/cinema-4d" },
                { src: "assets/icons/cinema4d-icon.png", tooltip: "Cinema 4D", link: "https://www.maxon.net/en/cinema-4d" },
                { src: "assets/icons/cinema4d-icon.png", tooltip: "Cinema 4D", link: "https://www.maxon.net/en/cinema-4d" },
                { src: "assets/icons/cinema4d-icon.png", tooltip: "Cinema 4D", link: "https://www.maxon.net/en/cinema-4d" },
            ],
        },
    ];

    const grid = document.getElementById('bento-grid2');
    if (!grid) {
        console.error('bento-grid2 element not found');
        return;
    }

    features.forEach((feature, index) => {
        const item = document.createElement('div');
        item.className = 'bento-item2';
        item.innerHTML = `
        ${feature.icon ? `<i class="${feature.icon}"></i>` : ''}
        ${feature.name ? `<h3>${feature.name}</h3>` : ''}
        ${feature.description ? `<p>${feature.description.split('. ').join('.<br>')}</p>` : ''}
        ${feature.icons ? `<div class="icons-container">${feature.icons.map(icon => `
            <div class="icon" onclick="window.open('${icon.link}', '_blank')">
                <img src="${icon.src}" alt="icon" class="icons">
                <div class="tooltip">${icon.tooltip}</div>
            </div>`).join('')}</div>` : ''}
        ${feature.cta ? `<a href="${feature.ctaLink}">${feature.cta}</a>` : ''}
    `;
        item.style.gridArea = `item${index + 1}`;
        grid.appendChild(item);
        console.log(`Appended bento-item2 ${index + 1}`);
    });

    const observerBento4 = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Element is intersecting:', entry.target);
                    entry.target.style.animationPlayState = 'running';
                } else {
                    entry.target.style.animationPlayState = 'paused';
                }
            });
        }
    );

    const bento4Elements = document.querySelectorAll('.bento-item2');
    bento4Elements.forEach(element => observerBento4.observe(element));
});

const section4 = document.querySelector('.section4');
if (section4) {
  const bento1Elements = section4.querySelectorAll('.bento-item2[style*="grid-area: item1;"]');
  const bento2Elements = section4.querySelectorAll('.bento-item2[style*="grid-area: item2;"]');
  const bento3Elements = section4.querySelectorAll('.bento-item2[style*="grid-area: item3;"]');
  const bento4Elements = section4.querySelectorAll('.bento-item2[style*="grid-area: item4;"]');

  if (bento1Elements.length > 0 && bento2Elements.length > 0 && bento3Elements.length > 0 && bento4Elements.length > 0) {
    const observerBento1 = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          } else {
            entry.target.style.animationPlayState = 'paused';
          }
        });
      },
      { rootMargin: '0px', threshold: 0.5 }
    );

    bento1Elements.forEach(element => observerBento1.observe(element));
    bento2Elements.forEach(element => observerBento1.observe(element));
    bento3Elements.forEach(element => observerBento1.observe(element));
    bento4Elements.forEach(element => observerBento1.observe(element));
  } else {
    console.error('Bento elements not found');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const section4 = document.querySelector('.section4');
  if (section4) {
    const bento2Elements = section4.querySelectorAll('.bento-item2[style*="grid-area: item2;"] h3, .bento-item2[style*="grid-area: item2;"] p, .bento-item2[style*="grid-area: item2;"] a, .bento-item2[style*="grid-area: item2;"] img, .bento-item2[style*="grid-area: item2;"] i, .bento-item2[style*="grid-area: item2;"] .icons-container, .bento-item2[style*="grid-area: item2;"] .icon, .bento-item2[style*="grid-area: item1;"], .bento-item2[style*="grid-area: item3;"], .bento-item2[style*="grid-area: item4;"]');

    if (bento2Elements.length > 0) {
      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          } else {
            entry.target.style.animationPlayState = 'paused';
          }
        });
      };

      const observerOptions = {
        rootMargin: '0px',
        threshold: 0.5
      };

      const observerBento2 = new IntersectionObserver(observerCallback, observerOptions);
      bento2Elements.forEach(element => observerBento2.observe(element));
    } else {
      console.error('Bento elements not found');
    }
  } else {
    console.error('Section4 not found');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Existing code...

  // Add observer for loading-line2 in section4
  const section4 = document.querySelector('.section4');
  if (section4) {
    const loadingLine2Element = section4.querySelector('.loading-line2');
    if (loadingLine2Element) {
      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          } else {
            entry.target.style.animationPlayState = 'paused';
          }
        });
      };

      const observerOptions = {
        rootMargin: '0px',
        threshold: 0.5
      };

      const observerLoadingLine2 = new IntersectionObserver(observerCallback, observerOptions);
      observerLoadingLine2.observe(loadingLine2Element);
    } else {
      console.error('loading-line2 element not found in section4');
    }
  } else {
    console.error('Section4 not found');
  }
});

const loadingLineElements = document.querySelectorAll('.sloading-line');
console.log('Loading line elements:', loadingLineElements);

