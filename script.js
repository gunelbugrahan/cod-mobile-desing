// flame-effect.js
document.addEventListener("DOMContentLoaded", function () {
  // Alev efekti uygulanacak tüm elemanları seç
  const flameElements = document.querySelectorAll(".flame-element");

  // Her eleman için
  flameElements.forEach((element) => {
    const particlesContainer = element.querySelector(".flame-container");

    // Mouse üzerine geldiğinde
    element.addEventListener("mouseenter", () => {
      createParticles(element, particlesContainer);
    });
  });

  function createParticles(element, container) {
    // Eleman hala hover durumunda mı?
    if (!element.matches(":hover")) {
      return;
    }

    // Her frame'de 1-3 parçacık oluştur
    const particleCount = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Rastgele boyut
      const size = Math.random() * 8 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Rastgele pozisyon (element genişliği içinde)
      const elementWidth = element.offsetWidth;
      const xPos = Math.random() * elementWidth;
      particle.style.left = `${xPos}px`;

      // Rastgele animasyon süresi
      const duration = Math.random() * 0.8 + 0.4; // 0.4 - 1.2 saniye
      particle.style.animation = `flame-up ${duration}s ease-out forwards`;

      // Parçacığı ekle
      container.appendChild(particle);

      // Animasyon bittiğinde parçacığı kaldır
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, duration * 1000);
    }

    // 50ms sonra tekrar et (eğer hala hover durumundaysa)
    setTimeout(() => {
      createParticles(element, container);
    }, 50);
  }
});

/* iConlar ve PNG efekti */

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.hover-effect-image');
    
    images.forEach(img => {
      let timeoutId;
      
      img.addEventListener('mouseover', function() {
        // Mouse üzerine gelince zamanı başlat
        timeoutId = setTimeout(() => {
          // 3 saniye sonra patlama efekti
          img.classList.add('explode');
          
          // Tüm ekrana alev efekti ekle
          const flameEffect = document.createElement('div');
          flameEffect.className = 'flame-particles';
          document.body.appendChild(flameEffect);
          
          // 2 saniye sonra resmi gizle (patlama animasyonu bitince)
          setTimeout(() => {
            img.classList.add('hidden');
            
            // Alev efektini kaldır
            document.body.removeChild(flameEffect);
            
            // Hemen resmi eski haline getir
            setTimeout(() => {
              img.classList.remove('explode');
              img.classList.remove('hidden');
              img.style.transform = '';
            }, 0); // 100ms kadar kısa bir süre sonra geri gelsin
          }, 2000);
          
        }, 3000);
      });
      
      // Mouse uzaklaşırsa zamanı iptal et
      img.addEventListener('mouseout', function() {
        clearTimeout(timeoutId);
      });
    });
  });

