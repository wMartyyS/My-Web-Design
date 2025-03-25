document.addEventListener('DOMContentLoaded', function () {
    const features = [
        {
            description: "I started with Graphic Design at the start of 2018, you can find my designs in the showcase, my instagram or YouTube channel. I was mostly focused on Minecraft graphics.",
        },
        {
            name: "GRAPHICS DESIGN",
            icon: "fas fa-palette",
        },
        {
            name: "SHOWCASE",
            description: "Click down here to see my showcase.",
            cta: "Learn more",
            ctaLink: "showcase.html",
        },
        {
            name: "TOOLS",
            icons: [
                { src: "assets/icons/photoshop-icon.png", tooltip: "Photoshop", link: "https://photoshop.adobe.com/" },
                { src: "assets/icons/lightroom-icon.png", tooltip: "Lightroom", link: "https://lightroom.adobe.com/" },
                { src: "assets/icons/gimp-icon.png", tooltip: "GIMP", link: "https://www.gimp.org/" },
                { src: "assets/icons/cinema4d-icon.png", tooltip: "Cinema 4D", link: "https://www.maxon.net/en/cinema-4d" },
            ],
        },
    ];

    const grid = document.getElementById('bento-grid');
    if (!grid) {
        console.error('bento-grid element not found');
        return;
    }

    features.forEach((feature, index) => {
        const item = document.createElement('div');
        item.className = 'bento-item';
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
        console.log(`Appended bento-item ${index + 1}`);
    });

    const observerBento4 = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Element is intersecting:', entry.target);
                    // Add your animation or visibility logic here
                }
            });
        }
    );

    const bento4Elements = document.querySelectorAll('.bento-item');
    bento4Elements.forEach(element => observerBento4.observe(element));
});

const section3 = document.querySelector('.section3');
if (section3) {
  const bento1Elements = section3.querySelectorAll('.bento-item[style*="grid-area: item1;"]');
  const bento2Elements = section3.querySelectorAll('.bento-item[style*="grid-area: item2;"]');
  const bento3Elements = section3.querySelectorAll('.bento-item[style*="grid-area: item3;"]');
  const bento4Elements = section3.querySelectorAll('.bento-item[style*="grid-area: item4;"]');

  if (bento1Elements.length > 0 && bento2Elements.length > 0 && bento3Elements.length > 0 && bento4Elements.length > 0) {
    const observerBento1 = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px', threshold: 0.5 }
    );

    bento1Elements.forEach(element => observerBento1.observe(element));
    // Repeat for bento2, bento3, and bento4
  } else {
    console.error('Bento elements not found');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const section3 = document.querySelector('.section3');
  if (section3) {
    const bento2Elements = section3.querySelectorAll('.bento-item[style*="grid-area: item2;"] h3, .bento-item[style*="grid-area: item2;"] p, .bento-item[style*="grid-area: item2;"] a, .bento-item[style*="grid-area: item2;"] img, .bento-item[style*="grid-area: item2;"] i, .bento-item[style*="grid-area: item2;"] .icons-container, .bento-item[style*="grid-area: item2;"] .icon, .bento-item[style*="grid-area: item1;"], .bento-item[style*="grid-area: item3;"], .bento-item[style*="grid-area: item4;"]');

    if (bento2Elements.length > 0) {
      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
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
    console.error('Section3 not found');
  }
});