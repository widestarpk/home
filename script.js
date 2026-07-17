
    // =====================================
    // CONFIGURATION
    // 

=====================================
    const GOOGLE_SCRIPT_URL = 

'https://script.google.com/macros/s/AKfycbwn2fPG-zBV5jUOxiM9-

1Rz8V04cmFbCIiB3kx3OsqsAg2Put1rxDjXpHkWARFrs6McyA/exec';

    // 

=====================================
    // DARK MODE (Default: Dark)
    // 

=====================================
    function toggleDarkMode() {
      const 

html = document.documentElement;
      const icon = document.getElementById

('darkModeIcon');
      
      if (html.getAttribute('data-theme') === 'dark') {
  

      html.setAttribute('data-theme', 'light');
        icon.className = 'fas 

fa-moon';
        localStorage.setItem('theme', 'light');
      } else {
        

html.setAttribute('data-theme', 'dark');
        icon.className = 'fas fa-sun';
  

      localStorage.setItem('theme', 'dark');
      }
    }

    function loadTheme

() {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      

const html = document.documentElement;
      const icon = 

document.getElementById('darkModeIcon');
      
      html.setAttribute('data-

theme', savedTheme);
      icon.className = savedTheme === 'dark' ? 'fas fa-sun' 

: 'fas fa-moon';
    }

    // =====================================
    // OFFER 

POPUP
    // =====================================
    function showOfferPopup() 

{
      const hasSeenOffer = sessionStorage.getItem('offerSeen');
      if (!

hasSeenOffer) {
        setTimeout(() => {
          document.getElementById

('offerPopup').classList.add('active');
        }, 3000);
      }
    }

    

function closeOfferPopup() {
      document.getElementById

('offerPopup').classList.remove('active');
      sessionStorage.setItem

('offerSeen', 'true');
    }

    // =====================================
    // 

VIDEO MODAL
    // =====================================
    function 

openVideoModal() {
      document.getElementById('videoModal').classList.add

('active');
      document.body.style.overflow = 'hidden';
      

document.getElementById('promoVideo').play();
    }

    function closeVideoModal

() {
      document.getElementById('videoModal').classList.remove('active');
     

 document.body.style.overflow = '';
      document.getElementById

('promoVideo').pause();
    }

    // =====================================
    // 

GALLERY MODAL
    // =====================================
    let galleryImages 

= [];
    let currentGalleryIndex = 0;

    function openGalleryModal(images) {
    

  galleryImages = images;
      currentGalleryIndex = 0;
      

updateGalleryImage();
      document.getElementById

('galleryModal').classList.add('active');
      document.body.style.overflow = 

'hidden';
    }

    function closeGalleryModal() {
      document.getElementById

('galleryModal').classList.remove('active');
      document.body.style.overflow 

= '';
    }

    function updateGalleryImage() {
      const mainImage = 

document.getElementById('galleryMainImage');
      const thumbnails = 

document.getElementById('galleryThumbnails');
      
      mainImage.src = 

galleryImages[currentGalleryIndex];
      mainImage.classList.remove('zoomed');
  

    
      thumbnails.innerHTML = galleryImages.map((img, index) => `
        

<img src="${img}" alt="Thumbnail ${index + 1}" class="gallery-thumb ${index === 

currentGalleryIndex ? 'active' : ''}" onclick="selectGalleryImage(${index})">
   

   `).join('');
    }

    function selectGalleryImage(index) {
      

currentGalleryIndex = index;
      updateGalleryImage();
    }

    function 

navigateGallery(direction) {
      currentGalleryIndex = (currentGalleryIndex + 

direction + galleryImages.length) % galleryImages.length;
      

updateGalleryImage();
    }

    function toggleImageZoom() {
      

document.getElementById('galleryMainImage').classList.toggle('zoomed');
    }

    

// =====================================
    // MOBILE NAVIGATION
    // 

=====================================
    function openMobileNav() {
      

document.getElementById('mobileNav').classList.add('active');
      

document.getElementById('mobileOverlay').classList.add('active');
      

document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
    

  document.getElementById('mobileNav').classList.remove('active');
      

document.getElementById('mobileOverlay').classList.remove('active');
      

document.body.style.overflow = '';
    }

    // 

=====================================
    // NAVBAR SCROLL
    // 

=====================================
    window.addEventListener('scroll', () 

=> {
      const navbar = document.getElementById('navbar');
      if 

(window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
  

      navbar.classList.remove('scrolled');
      }
    });

    // 

=====================================
    
    // 

=====================================
    // HERO BACKGROUND TRANSITIONS
    // 

=====================================
    const eventTypes = ['Wedding', 

'Birthday Party', 'Engagement', 'Corporate Party', 'Nikkah', 'Anniversary'];
    

let typewriterIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    

let bgIndex = 0;
    const typewriterElement = document.getElementById

('typewriter');
    const heroBgs = document.querySelectorAll('.hero-bg');

    

function typeWriter() {
      const currentWord = eventTypes[typewriterIndex];
   

   
      if (isDeleting) {
        typewriterElement.textContent = 

currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
      

  typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      

  charIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!

isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
      

  isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        

isDeleting = false;
        typewriterIndex = (typewriterIndex + 1) % 

eventTypes.length;
        typeSpeed = 500;
        // Change background when 

word changes
        changeHeroBackground();
      }

      setTimeout(typeWriter, 

typeSpeed);
    }

    function changeHeroBackground() {
      heroBgs.forEach(bg 

=> bg.classList.remove('active'));
      bgIndex = (bgIndex + 1) % 

heroBgs.length;
      heroBgs[bgIndex].classList.add('active');
    }

    // 

=====================================
    // PARTICLES
    // 

=====================================
    function createParticles() {
      

const container = document.getElementById('heroParticles');
      for (let i = 

0; i < 30; i++) {
        const particle = document.createElement('div');
        

particle.className = 'particle';
        particle.style.left = Math.random() * 

100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
     

   particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        

container.appendChild(particle);
      }
    }

    // 

=====================================
    // CURSOR ANIMATION
    // 

=====================================
    const cursor = document.querySelector

('.cursor');
    const cursorFollower = document.querySelector('.cursor-

follower');

    function animateCursor() {
      document.addEventListener

('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        

cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
          

cursorFollower.style.left = e.clientX + 'px';
          cursorFollower.style.top 

= e.clientY + 'px';
        }, 100);
      });

      document.querySelectorAll('a, 

button').forEach(el => {
        el.addEventListener('mouseenter', () => {
       

   cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
          

cursorFollower.style.transform = 'translate(-50%, -50%) scale(2)';
        });
   

     el.addEventListener('mouseleave', () => {
          cursor.style.transform 

= 'translate(-50%, -50%) scale(1)';
          cursorFollower.style.transform = 

'translate(-50%, -50%) scale(1)';
        });
      });
    }

    // 

=====================================
    // CHATBOT
    // 

=====================================
    function toggleChatbot() {
      

document.getElementById('chatbotWindow').classList.toggle('active');
    }

    

function sendMessage() {
      const input = document.getElementById

('chatInput');
      const message = input.value.trim();
      if (!message) 

return;

      addMessage(message, 'user');
      input.value = '';

      

setTimeout(() => {
        const responses = [
          "That sounds exciting! 

For more details, please fill out our booking form above.",
          "Great 

choice! We'd love to help you plan that. You can reach us at +92 300 1234567.",
 

         "Thank you for reaching out! Our team will get back to you within 5 

minutes.",
          "Perfect! Let me connect you with our event specialist. 

Meanwhile, feel free to explore our venues!"
        ];
        const 

randomResponse = responses[Math.floor(Math.random() * responses.length)];
       

 addMessage(randomResponse, 'bot');
      }, 1000);
    }

    function addMessage

(text, sender) {
      const messagesContainer = document.getElementById

('chatMessages');
      const messageDiv = document.createElement('div');
      

messageDiv.className = `chat-message ${sender}`;
      messageDiv.innerHTML = 

`<div class="message-content">${text}</div>`;
      

messagesContainer.appendChild(messageDiv);
      messagesContainer.scrollTop = 

messagesContainer.scrollHeight;
    }

    function handleChatKeyPress(e) {
      

if (e.key === 'Enter') sendMessage();
    }

    // 

=====================================
    // SERVICES CAROUSEL
    // 

=====================================
    const servicesData = [
      { name: 

'Book a Venue', icon: '💒', image: 'https://widestar.pk/wp-

content/uploads/2025/12/book_a_venue-1.png?auto=compress&cs=tinysrgb&w=600', 

description: 'Find the perfect venue for your special day from our curated 

selection of premium venues across Pakistan.' },
      { name: 'Hire a 

Photographer', icon: '🎂', image: 'https://widestar.pk/wp-

content/uploads/2025/12/hire_a_photographer.png?

auto=compress&cs=tinysrgb&w=600', description: 'Capture every precious moment 

with our professional photographers who specialize in event coverage.' },
      

{ name: 'Decor Service', icon: '🏢', image: 'https://widestar.pk/wp-

content/uploads/2025/12/decor_service-1.png?auto=compress&cs=tinysrgb&w=600', 

description: 'Transform your venue with stunning decorations that reflect your 

style and create the perfect ambiance.' },
      { name: 'Bridal Makeup 

Service', icon: '📸', image: 'https://widestar.pk/wp-

content/uploads/2025/12/bridal_makeup.png?auto=compress&cs=tinysrgb&w=600', 

description: 'Look absolutely stunning with our expert makeup artists who bring 

out your natural beauty.' },
      { name: 'Bridal Wear & Shoes', icon: '🍽️', 

image: 'https://widestar.pk/wp-content/uploads/2025/12/bridal-wear.png?

auto=compress&cs=tinysrgb&w=600', description: 'Discover exquisite bridal 

attire and accessories to complete your perfect wedding day look.' },
      { 

name: 'Henna Artists', icon: '🎊', image: 'https://widestar.pk/wp-

content/uploads/2025/12/henna-artists.png?auto=compress&cs=tinysrgb&w=600', 

description: 'Beautiful traditional henna designs applied by skilled artists 

for your special celebration.' },
      { name: 'Jewelry & Accessories', icon: 

'🎊', image: 'https://widestar.pk/wp-content/uploads/2025/12/jewelry.png?

auto=compress&cs=tinysrgb&w=600', description: 'Complete your look with 

stunning jewelry and accessories from our exclusive collection.' },
      { 

name: 'Rent a Car', icon: '🎊', image: 'https://widestar.pk/wp-

content/uploads/2025/12/rent-a-car.png?auto=compress&cs=tinysrgb&w=600', 

description: 'Arrive in style with our luxury car rental service featuring 

premium vehicles for your event.' },
      { name: 'Catering Service', icon: 

'🎊', image: 'https://widestar.pk/wp-content/uploads/2025/12/catering.jpg', 

description: 'Delight your guests with exquisite cuisine prepared by our expert 

culinary team.' },
      { name: 'Drone Coverage', icon: '🎊', image: 

'https://widestar.pk/wp-content/uploads/2026/01/drone-coverage.jpg', 

description: 'Capture breathtaking aerial views of your event with professional 

drone videography.' },
      { name: 'Wedding Album', icon: '🎊', image: 

'https://widestar.pk/wp-content/uploads/2025/12/wedding-album.jpg?

auto=compress&cs=tinysrgb&w=600', description: 'Preserve your precious memories 

in beautifully crafted, premium quality wedding albums.' },
      { name: 'Event 

Highlights', icon: '🎊', image: 'https://widestar.pk/wp-

content/uploads/2025/12/event-highlights-e1768402768148.png', description: 

'Relive the best moments with professionally edited highlight videos of your 

special day.' }
    ];

    let servicesCurrentIndex = 0;
    let 

servicesCarouselInterval;

    function renderServices() {
      const track = 

document.getElementById('servicesTrack');
      track.innerHTML = 

servicesData.map((service, index) => `
        <div class="service-card ${index 

=== servicesCurrentIndex ? 'active' : ''}" onclick="goToService(${index})">
     

     <div class="service-bg" style="background-image: url

('${service.image}')"></div>
          <div class="service-content">
            

<h3>${service.name}</h3>
            <p>${service.description}</p>
            <a 

href="#booking" class="btn-secondary">Book Now</a>
          </div>
        

</div>
      `).join('');
      
      createServicesDots();
      

centerActiveService();
    }

    function createServicesDots() {
      const 

dotsContainer = document.getElementById('servicesDots');
      

dotsContainer.innerHTML = servicesData.map((_, index) => `
        <div 

class="services-dot ${index === servicesCurrentIndex ? 'active' : ''}" 

onclick="goToService(${index})"></div>
      `).join('');
    }

    function 

centerActiveService() {
      const track = document.getElementById

('servicesTrack');
      const cards = track.querySelectorAll('.service-card');
  

    const carousel = document.getElementById('servicesCarousel');
      
      if 

(cards.length === 0) return;
      
      const cardWidth = cards[0].offsetWidth 

+ 24;
      const carouselWidth = carousel.offsetWidth;
      const offset = 

(carouselWidth / 2) - (cardWidth / 2) - (servicesCurrentIndex * cardWidth);
     

 
      track.style.transform = `translateX(${offset}px)`;
      
      

cards.forEach((card, index) => {
        card.classList.toggle('active', index 

=== servicesCurrentIndex);
      });
      
      document.querySelectorAll

('.services-dot').forEach((dot, index) => {
        dot.classList.toggle

('active', index === servicesCurrentIndex);
      });
    }

    function 

moveServicesCarousel(direction) {
      servicesCurrentIndex = 

(servicesCurrentIndex + direction + servicesData.length) % servicesData.length;
 

     centerActiveService();
    }

    function goToService(index) {
      

servicesCurrentIndex = index;
      centerActiveService();
    }

    // 

Touch/swipe support for services
    let servicesTouchStartX = 0;
    let 

servicesTouchEndX = 0;

    function initServicesSwipe() {
      const carousel = 

document.getElementById('servicesCarousel');
      
      

carousel.addEventListener('touchstart', (e) => {
        servicesTouchStartX = 

e.changedTouches[0].screenX;
      });

      carousel.addEventListener

('touchend', (e) => {
        servicesTouchEndX = e.changedTouches[0].screenX;
   

     handleServicesSwipe();
      });

      // Mouse drag support
      let 

isDragging = false;
      let startX;

      carousel.addEventListener

('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
       

 carousel.style.cursor = 'grabbing';
      });

      carousel.addEventListener

('mousemove', (e) => {
        if (!isDragging) return;
      });

      

carousel.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
   

     isDragging = false;
        carousel.style.cursor = 'grab';
        const 

diff = e.pageX - startX;
        if (Math.abs(diff) > 50) {
          if (diff > 

0) moveServicesCarousel(-1);
          else moveServicesCarousel(1);
        }
    

  });

      carousel.addEventListener('mouseleave', () => {
        isDragging = 

false;
        carousel.style.cursor = 'grab';
      });

      // Keyboard support
 

     carousel.setAttribute('tabindex', '0');
      carousel.addEventListener

('keydown', (e) => {
        if (e.key === 'ArrowLeft') moveServicesCarousel(-

1);
        if (e.key === 'ArrowRight') moveServicesCarousel(1);
      });
    }

   

 function handleServicesSwipe() {
      const diff = servicesTouchStartX - 

servicesTouchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) 

moveServicesCarousel(1);
        else moveServicesCarousel(-1);
      }
    }

    

// Auto-rotate services
    function startServicesAutoRotate() {
      

servicesCarouselInterval = setInterval(() => moveServicesCarousel(1), 4000);
    

}

    function stopServicesAutoRotate() {
      clearInterval

(servicesCarouselInterval);
    }

    // =====================================
    

// VENUE CAROUSEL
    // =====================================
    let venuesData 

= [];
    let venueCurrentIndex = 0;
    let venueSlidesPerView = 3;
    let 

venueAutoRotate;

    function fetchVenues() {
      if (GOOGLE_SCRIPT_URL === '') 

{
        // Use default venues if no URL configured
        venuesData = [
       

   { name: 'Grand Ballroom', badge: 'Premium', pricePerHead: '2,500', image: 

'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?

auto=format&fit=crop&w=600&q=80', gallery: 

['https://images.unsplash.com/photo-1519167758481-83f550bb49b3?

auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-

1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'] },
          { 

name: 'Garden Estate', badge: 'Popular', pricePerHead: '2,000', image: 

'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?

auto=format&fit=crop&w=600&q=80', gallery: 

['https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?

auto=format&fit=crop&w=800&q=80'] },
          { name: 'Rooftop Terrace', badge: 

'Exclusive', pricePerHead: '3,000', image: 'https://images.unsplash.com/photo-

1505236858219-8359eb29e329?auto=format&fit=crop&w=600&q=80', gallery: 

['https://images.unsplash.com/photo-1505236858219-8359eb29e329?

auto=format&fit=crop&w=800&q=80'] },
          { name: 'Beachfront Villa', 

badge: 'New', pricePerHead: '4,000', image: 

'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?

auto=format&fit=crop&w=600&q=80', gallery: 

['https://images.unsplash.com/photo-1511795409834-ef04bbd61622?

auto=format&fit=crop&w=800&q=80'] },
          { name: 'Historic Manor', badge: 

'Premium', pricePerHead: '3,500', image: 'https://images.unsplash.com/photo-

1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80', gallery: 

['https://images.unsplash.com/photo-1540575467063-178a50c2df87?

auto=format&fit=crop&w=800&q=80'] },
          { name: 'Crystal Palace', badge: 

'Luxury', pricePerHead: '5,000', image: 'https://images.unsplash.com/photo-

1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80', gallery: 

['https://images.unsplash.com/photo-1530103862676-de8c9debad1d?

auto=format&fit=crop&w=800&q=80'] }
        ];
        renderVenues();
        

return;
      }

      fetch(`${GOOGLE_SCRIPT_URL}?action=getVenues`)
        

.then(response => response.json())
        .then(data => {
          if 

(data.success && data.venues) {
            venuesData = data.venues.filter(v => 

v.status === 'Active');
            renderVenues();
          }
        })
        

.catch(error => {
          console.error('Error fetching venues:', error);
      

    document.getElementById('venuesLoading').innerHTML = '<p>Unable to load 

venues. Please try again later.</p>';
        });
    }

    function renderVenues

() {
      const track = document.getElementById('venueTrack');
      

document.getElementById('venuesLoading')?.remove();

      track.innerHTML = 

venuesData.map((venue, index) => `
        <div class="venue-slide">
          

<div class="venue-card" onclick="openGalleryModal(${JSON.stringify

(venue.gallery || [venue.image]).replace(/"/g, '&quot;')})">
            <div 

class="venue-bg" style="background-image: url('${venue.image}')"></div>
         

   <div class="venue-vignette"></div>
            <span class="venue-badge">

${venue.badge || 'Premium'}</span>
            <button class="venue-favorite" 

onclick="event.stopPropagation()"><i class="far fa-heart"></i></button>
         

   <div class="venue-info">
              <h3>${venue.name}</h3>
              

<div class="venue-price">Starting PKR ${venue.pricePerHead}/head</div>
          

    <a href="#booking" class="venue-book-btn" onclick="event.stopPropagation

()">Book Now</a>
            </div>
          </div>
        </div>
      `).join

('');

      updateVenueSlidesPerView();
    }

    function 

updateVenueSlidesPerView() {
      if (window.innerWidth < 768) {
        

venueSlidesPerView = 1;
      } else if (window.innerWidth < 1024) {
        

venueSlidesPerView = 2;
      } else {
        venueSlidesPerView = 3;
      }
     

 updateVenueCarousel();
      createVenueDots();
    }

    function 

createVenueDots() {
      const dotsContainer = document.getElementById

('venueDots');
      const totalDots = Math.ceil(venuesData.length / 

venueSlidesPerView);
      dotsContainer.innerHTML = '';
      for (let i = 0; i 

< totalDots; i++) {
        const dot = document.createElement('div');
        

dot.className = 'carousel-dot' + (i === Math.floor(venueCurrentIndex / 

venueSlidesPerView) ? ' active' : '');
        dot.onclick = () => {
          

venueCurrentIndex = i * venueSlidesPerView;
          updateVenueCarousel();
     

   };
        dotsContainer.appendChild(dot);
      }
    }

    function 

updateVenueCarousel() {
      const track = document.getElementById

('venueTrack');
      const slideWidth = 100 / venueSlidesPerView;
      

track.style.transform = `translateX(-${venueCurrentIndex * slideWidth}%)`;
      
      const dots = document.querySelectorAll('#venueDots .carousel-dot');
      

const activeDotIndex = Math.floor(venueCurrentIndex / venueSlidesPerView);
      

dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === 

activeDotIndex);
      });
    }

    function moveVenueCarousel(direction) {
      

const maxIndex = venuesData.length - venueSlidesPerView;
      venueCurrentIndex 

+= direction;
      if (venueCurrentIndex < 0) venueCurrentIndex = maxIndex;
     

 if (venueCurrentIndex > maxIndex) venueCurrentIndex = 0;
      

updateVenueCarousel();
    }

    window.addEventListener('resize', 

updateVenueSlidesPerView);

    // =====================================
    // 

TESTIMONIALS
    // =====================================
    function 

fetchReviews() {
      if (GOOGLE_SCRIPT_URL === '') {
        const 

defaultReviews = [
          { name: 'Alina Taimoor', location: 'Rawalpindi', 

rating: 5, text: 'WideStar made our wedding planning so effortless! Their team 

was incredibly responsive and helped us find the perfect venue within our 

budget.', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
         

 { name: 'M. Noor', location: 'Islamabad', rating: 5, text: 'Exceptional 

service! The decor team transformed our venue beyond our expectations. Highly 

recommended for any event!', avatar: 

'https://randomuser.me/api/portraits/men/45.jpg' },
          { name: 'Zaryab 

Gul', location: 'Islamabad', rating: 5, text: 'The photography team captured 

every precious moment beautifully. Our wedding album is absolutely stunning!', 

avatar: 'https://randomuser.me/api/portraits/women/68.jpg' }
        ];
        

renderReviews(defaultReviews);
        return;
      }

      fetch(`

${GOOGLE_SCRIPT_URL}?action=getReviews`)
        .then(response => 

response.json())
        .then(data => {
          if (data.success && 

data.reviews) {
            renderReviews(data.reviews);
          }
        })
    

    .catch(error => {
          console.error('Error fetching reviews:', error);
 

       });
    }

    function renderReviews(reviews) {
      const container = 

document.getElementById('testimonialsContainer');
      document.getElementById

('testimonialsLoading')?.remove();

      container.innerHTML = reviews.map

(review => `
        <div class="testimonial-card">
          <div 

class="testimonial-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - 

review.rating)}</div>
          <p class="testimonial-text">"${review.text}"</p>
 

         <div class="testimonial-author">
            <img src="${review.avatar 

|| 'https://via.placeholder.com/50'}" alt="${review.name}" class="testimonial-

avatar">
            <div class="testimonial-info">
              <h4>

${review.name}</h4>
              <span>${review.location}</span>
            

</div>
          </div>
        </div>
      `).join('');
    }

    // 

=====================================
    // FAQ
    // 

=====================================
    function fetchFaqs() {
      if 

(GOOGLE_SCRIPT_URL === '') {
        const defaultFaqs = [
          { question: 

'What services does WideStar offer?', answer: 'We offer comprehensive event 

planning services including wedding planning, corporate events, birthday 

parties, private gatherings, venue booking, photography, videography, catering, 

decoration, and more. Our team handles everything from concept to execution.' 

},
          { question: 'How far in advance should I book?', answer: 'We 

recommend booking at least 3-6 months in advance for major events like 

weddings, and 1-2 months for smaller gatherings. However, we also accommodate 

last-minute requests based on availability.' },
          { question: 'Do you 

offer customized packages?', answer: 'Absolutely! Every event is unique, and we 

create customized packages tailored to your specific needs, preferences, and 

budget. During our initial consultation, we\'ll discuss your vision and create 

a personalized plan.' },
          { question: 'What is your pricing 

structure?', answer: 'Our pricing varies based on the type of event, guest 

count, venue selection, and services required. We offer packages starting from 

budget-friendly options to premium luxury experiences. Contact us for a 

detailed quote.' },
          { question: 'Can you help with destination 

events?', answer: 'Yes! We specialize in destination weddings and events. Our 

team can coordinate logistics, venue selection, vendor management, and guest 

accommodations for events anywhere in the country or internationally.' },
       

   { question: 'What happens if I need to cancel or reschedule?', answer: 'We 

understand that plans can change. Our cancellation and rescheduling policies 

are flexible and depend on the timing and specific services booked. We\'ll work 

with you to find the best solution possible.' }
        ];
        renderFaqs

(defaultFaqs);
        return;
      }

      fetch(`${GOOGLE_SCRIPT_URL}?

action=getFaqs`)
        .then(response => response.json())
        .then(data => 

{
          if (data.success && data.faqs) {
            renderFaqs(data.faqs);
   

       }
        })
        .catch(error => {
          console.error('Error 

fetching FAQs:', error);
        });
    }

    function renderFaqs(faqs) {
      

const container = document.getElementById('faqContainer');
      

document.getElementById('faqLoading')?.remove();

      container.innerHTML = 

faqs.map(faq => `
        <div class="faq-item">
          <button class="faq-

question" onclick="toggleFaq(this)">
            <span>${faq.question}</span>
    

        <div class="faq-icon"><i class="fas fa-chevron-down"></i></div>
         

 </button>
          <div class="faq-answer">
            <div class="faq-

answer-content">${faq.answer}</div>
          </div>
        </div>
      `).join

('');
    }

    function toggleFaq(button) {
      const faqItem = 

button.parentElement;
      const isActive = faqItem.classList.contains

('active');
      
      document.querySelectorAll('.faq-item').forEach(item => {
 

       item.classList.remove('active');
      });
      
      if (!isActive) {
    

    faqItem.classList.add('active');
      }
    }

    // 

=====================================
    // STATS COUNTER
    // 

=====================================
    function animateCounters() {
      

const counters = document.querySelectorAll('.stat-number');
      

counters.forEach(counter => {
        const target = parseInt

(counter.getAttribute('data-count'));
        const duration = 2000;
        

const increment = target / (duration / 16);
        let current = 0;

        

const updateCounter = () => {
          current += increment;
          if 

(current < target) {
            counter.textContent = Math.floor

(current).toLocaleString() + '+';
            requestAnimationFrame

(updateCounter);
          } else {
            counter.textContent = 

target.toLocaleString() + '+';
          }
        };

        updateCounter();
     

 });
    }

    // =====================================
    // SCROLL REVEAL
    // 

=====================================
    function setupScrollReveal() {
      

const observer = new IntersectionObserver((entries) => {
        

entries.forEach(entry => {
          if (entry.isIntersecting) {
            

entry.target.classList.add('revealed');
            if 

(entry.target.classList.contains('stats')) {
              animateCounters();
    

        }
          }
        });
      }, { threshold: 0.1 });

      

document.querySelectorAll('.scroll-reveal').forEach(el => {
        

observer.observe(el);
      });
    }

    // =====================================
 

   // FORM HANDLING WITH GOOGLE SHEETS
    // 

=====================================
    const form = document.getElementById

('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    

const loadingModal = document.getElementById('loadingModal');
    const 

successModal = document.getElementById('successModal');
    const 

closeSuccessBtn = document.getElementById('closeSuccessBtn');
    const 

countdownTimer = document.getElementById('countdownTimer');

    let 

countdownInterval;

    function validateField(field) {
      const value = 

field.value.trim();
      const errorMessage = 

field.parentElement.querySelector('.error-message');

      

field.classList.remove('error');
      if (errorMessage) {
        

errorMessage.classList.remove('show');
      }

      if (field.hasAttribute

('required') && !value) {
        field.classList.add('error');
        if 

(errorMessage) {
          errorMessage.classList.add('show');
        }
        

return false;
      }

      if (field.type === 'email' && value) {
        const 

emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) 

{
          field.classList.add('error');
          if (errorMessage) {
           

 errorMessage.textContent = 'Please enter a valid email address';
            

errorMessage.classList.add('show');
          }
          return false;
        }
  

    }

      if (field.type === 'tel' && value) {
        const phoneRegex = /^

[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(value) || value.replace(/\D/g, 

'').length < 10) {
          field.classList.add('error');
          if 

(errorMessage) {
            errorMessage.textContent = 'Please enter a valid 

phone number';
            errorMessage.classList.add('show');
          }
        

  return false;
        }
      }

      if (field.type === 'date' && value) {
      

  const selectedDate = new Date(value);
        const currentDate = new Date();
  

      currentDate.setHours(0, 0, 0, 0);

        if (selectedDate < currentDate) 

{
          field.classList.add('error');
          if (errorMessage) {
           

 errorMessage.textContent = 'Please select a future date';
            

errorMessage.classList.add('show');
          }
          return false;
        }
  

    }

      return true;
    }

    const inputs = form.querySelectorAll('.form-

input, .form-select');
    inputs.forEach(input => {
      

input.addEventListener('blur', function() {
        validateField(this);
      

});

      input.addEventListener('input', function() {
        if 

(this.classList.contains('error')) {
          validateField(this);
        }
     

 });

      input.addEventListener('focus', function() {
        

this.parentElement.querySelector('.form-label').style.color = '#f1824a';
      

});

      input.addEventListener('blur', function() {
        

this.parentElement.querySelector('.form-label').style.color = '';
      });
    

});

    function startCountdown() {
      let totalSeconds = 5 * 60;

      

countdownInterval = setInterval(function() {
        const minutes = Math.floor

(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        
        

countdownTimer.textContent = 
          String(minutes).padStart(2, '0') + ':' + 
          String(seconds).padStart(2, '0');

        if (totalSeconds <= 0) {
     

     clearInterval(countdownInterval);
          countdownTimer.textContent = 

'00:00';
        } else {
          totalSeconds--;
        }
      }, 1000);
    }

  

  function showLoadingModal() {
      loadingModal.classList.add('active');
      

document.body.style.overflow = 'hidden';
    }

    function hideLoadingModal() {
  

    loadingModal.classList.remove('active');
      document.body.style.overflow 

= '';
    }

    function showSuccessModal() {
      successModal.classList.add

('active');
      document.body.style.overflow = 'hidden';
      startCountdown

();
    }

    function hideSuccessModal() {
      successModal.classList.remove

('active');
      document.body.style.overflow = '';
      if (countdownInterval) 

{
        clearInterval(countdownInterval);
      }
      

countdownTimer.textContent = '05:00';
    }

    closeSuccessBtn.addEventListener

('click', function() {
      hideSuccessModal();
      form.reset();
    });

    

form.addEventListener('submit', function(e) {
      e.preventDefault();

      let 

isValid = true;
      const formInputs = form.querySelectorAll('.form-input, 

.form-select');

      formInputs.forEach(input => {
        if (!validateField

(input)) {
          isValid = false;
        }
      });

      if (isValid) {
      

  submitBtn.disabled = true;
        showLoadingModal();

        const formData = 

{
          fullName: document.getElementById('fullName').value,
          

phoneNumber: document.getElementById('phoneNumber').value,
          email: 

document.getElementById('email').value || 'Not provided',
          city: 

document.getElementById('city').value,
          eventType: 

document.getElementById('eventType').value,
          eventDate: 

document.getElementById('eventDate').value,
          serviceType: 

document.getElementById('serviceType').value,
          budget: 

document.getElementById('budget').value,
          timestamp: new Date

().toISOString()
        };

        if (GOOGLE_SCRIPT_URL === '') {
          // 

Demo mode - simulate submission
          setTimeout(() => {
            

hideLoadingModal();
            showSuccessModal();
            

submitBtn.disabled = false;
          }, 2000);
          return;
        }

        

fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
   

       headers: {
            'Content-Type': 'application/json',
          },
    

      body: JSON.stringify({
            action: 'submitBooking',
            

data: formData
          })
        })
        .then(() => {
          

hideLoadingModal();
          showSuccessModal();
          submitBtn.disabled = 

false;
        })
        .catch(error => {
          console.error('Error:', 

error);
          hideLoadingModal();
          alert('There was an error 

submitting your booking. Please try again or contact us directly.');
          

submitBtn.disabled = false;
        });
      } else {
        const firstError = 

form.querySelector('.form-input.error, .form-select.error');
        if 

(firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 

'center' });
          firstError.focus();
        }
      }
    });

    // Set 

minimum date to today
    const today = new Date().toISOString().split('T')[0];
  

  document.getElementById('eventDate').setAttribute('min', today);

    // 

=====================================
    // INITIALIZATION
    // 

=====================================
    document.addEventListener

('DOMContentLoaded', () => {
      loadTheme();
      typeWriter();
      

createParticles();
      animateCursor();
      setupScrollReveal();
      

showOfferPopup();

      // Fetch data from Google Sheets
      fetchVenues();
     

 fetchReviews();
      fetchFaqs();

      // Initialize services carousel
      

renderServices();
      initServicesSwipe();
      startServicesAutoRotate();

     

 // Start venue auto-rotate
      venueAutoRotate = setInterval(() => 

moveVenueCarousel(1), 5000);

      document.querySelector('.venue-carousel-

wrapper')?.addEventListener('mouseenter', () => {
        clearInterval

(venueAutoRotate);
      });

      document.querySelector('.venue-carousel-

wrapper')?.addEventListener('mouseleave', () => {
        venueAutoRotate = 

setInterval(() => moveVenueCarousel(1), 5000);
      });

      // Services 

carousel hover
      document.querySelector('.services-carousel-

container')?.addEventListener('mouseenter', stopServicesAutoRotate);
      

document.querySelector('.services-carousel-container')?.addEventListener

('mouseleave', startServicesAutoRotate);

      // Hide cursor on touch devices
   

   if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        

cursorFollower.style.display = 'none';
      }
    });

