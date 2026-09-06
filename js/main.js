/**
 * United Bengal Strikers - Official Franchise Script
 * A Concern of United Bengal Group | "Born to Strike"
 */

(function () {
  'use strict';

  // 1. Players Data Model (15 Official Squad Members)
  const PLAYERS_DATA = [
    {
      id: 'saykat',
      name: 'Mobassir Saykat',
      jersey: '07',
      role: 'Captain & All-Rounder',
      category: 'allrounder',
      poster: 'assets/players/saykat.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Medium Fast',
      bio: 'Visionary captain and dynamic all-rounder leading United Bengal Strikers with tactical acumen, composure, and fierce striking power.',
      stats: { matches: '42', runs: '1,120', wickets: '54', strikeRate: '148.5' }
    },
    {
      id: 'siam',
      name: 'Ahsanul Siam',
      jersey: '18',
      role: 'Vice Captain & Top-Order Batter',
      category: 'batter',
      poster: 'assets/players/siam.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Off Spin',
      bio: 'Pillar of the Strikers batting order with explosive stroke-play, dependable match temperament, and leadership in high-stakes run chases.',
      stats: { matches: '38', runs: '1,340', wickets: '12', strikeRate: '152.0' }
    },
    {
      id: 'sabbir',
      name: 'Sabbir Hossain',
      jersey: '01',
      role: 'Wicketkeeper & Explosive Batter',
      category: 'batter',
      poster: 'assets/players/sabbir.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Wicketkeeper',
      bio: 'Lightning-fast reflexes behind the stumps and a fearless middle-order batter capable of flipping momentum in a single over.',
      stats: { matches: '35', runs: '890', dismissals: '48', strikeRate: '158.4' }
    },
    {
      id: 'easin',
      name: 'Easin Arafat',
      jersey: '99',
      role: 'Lead Fast Bowler',
      category: 'bowler',
      poster: 'assets/players/easin.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Fast',
      bio: 'Pace spearhead delivering ferocious bouncers, lethal toe-crushing yorkers, and unmatched intensity in the death overs.',
      stats: { matches: '31', wickets: '58', economy: '6.45', best: '5/18' }
    },
    {
      id: 'kawsar',
      name: 'Kawsar Mahmud',
      jersey: '11',
      role: 'Spin Bowling All-Rounder',
      category: 'allrounder',
      poster: 'assets/players/kawsar.jpg',
      batting: 'Left-Hand Bat',
      bowling: 'Slow Left-Arm Orthodox',
      bio: 'Crafty spinner with subtle variations and an indispensable pinch hitter adept at accelerating the run rate in middle overs.',
      stats: { matches: '29', runs: '620', wickets: '41', strikeRate: '139.2' }
    },
    {
      id: 'barkat',
      name: 'Barkat Ullah',
      jersey: '23',
      role: 'Middle-Order Anchor Batter',
      category: 'batter',
      poster: 'assets/players/barkat.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Medium',
      bio: 'Reliable anchor capable of rebuilding innings under pressure and launching late-innings attacks with precision shot selection.',
      stats: { matches: '27', runs: '760', wickets: '8', strikeRate: '136.8' }
    },
    {
      id: 'kawsar-ahmed',
      name: 'Kawsar Ahmed',
      jersey: '09',
      role: 'Mystery Spin Bowler',
      category: 'bowler',
      poster: 'assets/players/kawsar-ahmed.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Leg Break / Googly',
      bio: 'Intricate leg-spin specialist who bamboozles top-order batters with deceptively sharp googlies and pinpoint control.',
      stats: { matches: '24', wickets: '39', economy: '6.80', best: '4/14' }
    },
    {
      id: 'zihad',
      name: 'Zihad Hasan',
      jersey: '17',
      role: 'Express Pace Bowler',
      category: 'bowler',
      poster: 'assets/players/zihad.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Fast',
      bio: 'Raw athletic bowler with blistering velocity, relentless stamina, and a reputation for breaking crucial opening partnerships.',
      stats: { matches: '22', wickets: '34', economy: '7.10', best: '4/22' }
    },
    {
      id: 'mijan',
      name: 'Mijanur Rahman',
      jersey: '45',
      role: 'Power All-Rounder',
      category: 'allrounder',
      poster: 'assets/players/mijan.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Medium Fast',
      bio: 'Muscular power-hitter capable of clearing long boundaries and providing breakthrough overs with intelligent seam variations.',
      stats: { matches: '26', runs: '510', wickets: '28', strikeRate: '161.0' }
    },
    {
      id: 'sumon',
      name: 'Sumon Ali',
      jersey: '88',
      role: 'Death-Overs Seam Bowler',
      category: 'bowler',
      poster: 'assets/players/sumon.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Fast Medium',
      bio: 'Disciplined death-overs specialist armed with disguised slower balls, wide yorkers, and cold nerves under pressure.',
      stats: { matches: '25', wickets: '37', economy: '6.90', best: '4/20' }
    },
    {
      id: 'mikail',
      name: 'Mikail Islam',
      jersey: '14',
      role: 'Dynamic Finisher & Batter',
      category: 'batter',
      poster: 'assets/players/mikail.jpg',
      batting: 'Left-Hand Bat',
      bowling: 'Right-Arm Off Spin',
      bio: 'A high-impact finisher whose innovative 360-degree stroke play and quick singles make him a nightmare for opposing captains.',
      stats: { matches: '20', runs: '490', strikeRate: '166.5', sixes: '34' }
    },
    {
      id: 'alif',
      name: 'Alif Hossain',
      jersey: '21',
      role: 'Off-Spin Specialist',
      category: 'bowler',
      poster: 'assets/players/alif.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Off Spin',
      bio: 'Tenacious finger spinner who chokes runs during fielding restrictions and generates sharp bounce off sporting tracks.',
      stats: { matches: '19', wickets: '26', economy: '6.30', best: '3/15' }
    },
    {
      id: 'sorot',
      name: 'Sorot Chandra',
      jersey: '05',
      role: 'Aggressive Opening Batter',
      category: 'batter',
      poster: 'assets/players/sorot.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Leg Spin',
      bio: 'Flamboyant powerplay batter who attacks bowling from ball one with textbook cover drives and lofted straight hits.',
      stats: { matches: '18', runs: '530', strikeRate: '154.2', fifties: '4' }
    },
    {
      id: 'efaz',
      name: 'Efaz Ahmed',
      jersey: '33',
      role: 'Utility All-Rounder',
      category: 'allrounder',
      poster: 'assets/players/efaz.jpg',
      batting: 'Right-Hand Bat',
      bowling: 'Right-Arm Medium',
      bio: 'High-workrate cricketer providing depth to the Strikers squad with reliable batting cameos and disciplined boundary-riding.',
      stats: { matches: '16', runs: '280', wickets: '18', strikeRate: '142.0' }
    },
    {
      id: 'emon',
      name: 'Emon Sarkar',
      jersey: '77',
      role: 'Impact Batter & Agile Fielder',
      category: 'batter',
      poster: 'assets/players/emon.jpg',
      batting: 'Left-Hand Bat',
      bowling: 'Right-Arm Medium',
      bio: 'Electric presence on the field with cannon arm throws, coupled with aggressive left-handed batting in crisis situations.',
      stats: { matches: '17', runs: '370', catches: '19', strikeRate: '147.8' }
    }
  ];

  // 2. Gallery Data Model (Matchdays, Celebrations, High-Res Moments)
  const GALLERY_ITEMS = [
    { src: 'assets/matchday/FB_IMG_1788548345657.jpg', category: 'matchday', caption: 'RHHS Premier League Matchday - Field Setup & Strategy' },
    { src: 'assets/matchday/FB_IMG_1788548387927.jpg', category: 'matchday', caption: 'Strikers Pace Attack in Action - Decisive Bowling Spell' },
    { src: 'assets/matchday/FB_IMG_1788548395322.jpg', category: 'matchday', caption: 'Tactical Huddle - United Bengal Strikers on the Turf' },
    { src: 'assets/matchday/FB_IMG_1788548439884.jpg', category: 'matchday', caption: 'Intense Run Chase - Batting Under Championship Pressure' },
    { src: 'assets/matchday/FB_IMG_1788548457276.jpg', category: 'matchday', caption: 'Wicket Celebration - Electric Team Spirit in RHHS League' },
    { src: 'assets/matchday/FB_IMG_1788548467846.jpg', category: 'matchday', caption: 'Boundary Strike - Executing the Team Motto: Born to Strike' },
    { src: 'assets/matchday/FB_IMG_1788548507586.jpg', category: 'matchday', caption: 'Post-Match Respect & Handshake with Opponents' },
    { src: 'assets/gallery/FB_IMG_1788548367176.jpg', category: 'celebration', caption: 'Victory Roar - Advancing to RHHS Premier League Semi-Finals' },
    { src: 'assets/gallery/1788468187773.jpg', category: 'celebration', caption: 'The Brotherhood - Strikers Bonding Off the Pitch' },
    { src: 'assets/gallery/1788468197172.jpg', category: 'celebration', caption: 'Franchise Jersey Launch & Squad Presentation' },
    { src: 'assets/gallery/1788468203327.jpg', category: 'celebration', caption: 'Golden Moments - Celebrating RHHS Knockout Triumphs' },
    { src: 'assets/gallery/1788468208769.jpg', category: 'celebration', caption: 'Management & Players United - A Shared Vision' },
    { src: 'assets/gallery/1788468214193.jpg', category: 'celebration', caption: 'Team Chemistry & Unbreakable Brotherhood since 2019' },
    { src: 'assets/gallery/1788468258284.jpg', category: 'celebration', caption: 'Pre-Match Briefing & Captain Speech' },
    { src: 'assets/gallery/1788468261599.jpg', category: 'celebration', caption: 'Match Highlights & Tactical Debriefing' },
    { src: 'assets/gallery/1788468266011.jpg', category: 'celebration', caption: 'Training Ground Conditioning & Agility Drills' },
    { src: 'assets/gallery/1788468268716.jpg', category: 'celebration', caption: 'United Bengal Strikers Official Banner Ceremony' },
    { src: 'assets/gallery/received_1004582345858140.jpeg', category: 'poster', caption: 'Official Franchise Presentation Poster 2026' },
    { src: 'assets/gallery/received_1376333597666287.jpeg', category: 'poster', caption: 'RHHS Premier League Semi-Finalist Honour' },
    { src: 'assets/gallery/received_1405807381582187.jpeg', category: 'matchday', caption: 'Strikers Defense - High Quality Fielding Session' },
    { src: 'assets/gallery/received_1474705153824904.jpeg', category: 'celebration', caption: 'Team Spirit on Display at Rajshahi Tournament Grounds' },
    { src: 'assets/gallery/received_1743818269970207.jpeg', category: 'matchday', caption: 'Concentration at the Crease - Powerplay Inning' }
  ];

  // DOM Elements
  const header = document.querySelector('.header');
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const heroImg = document.getElementById('hero-img');
  const heroToggleBtns = document.querySelectorAll('.hero-toggle-btn');
  const strikersTrack = document.getElementById('strikers-track');
  const strikersCarousel = document.getElementById('strikers-carousel');
  const prevStrikerBtn = document.getElementById('prev-striker');
  const nextStrikerBtn = document.getElementById('next-striker');
  const playerFilterBtns = document.querySelectorAll('.player-filters .filter-btn');
  const galleryGrid = document.getElementById('gallery-grid');
  const galleryFilterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
  const playerModalOverlay = document.getElementById('player-modal-overlay');
  const playerModalClose = document.getElementById('player-modal-close');
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const partnerForm = document.getElementById('partner-inquiry-form');
  const formSuccessMsg = document.getElementById('form-success-msg');

  // 3. Header Scroll Effect
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 4. Mobile Drawer Toggle
  function openMobileNav() {
    hamburger.classList.add('active');
    mobileNav.classList.add('open');
    mobileNavBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('open');
    mobileNavBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (mobileNav.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileNav);
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // 5. Hero Background Switcher (Squad vs Lightning)
  const heroImages = {
    squad: 'assets/hero/FB_IMG_1788548427760.jpg',
    lightning: 'assets/hero/FB_IMG_1788548293691.jpg'
  };

  heroToggleBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      heroToggleBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const mode = this.getAttribute('data-hero');
      if (heroImages[mode] && heroImg) {
        heroImg.style.opacity = '0';
        setTimeout(() => {
          heroImg.src = heroImages[mode];
          heroImg.style.opacity = '1';
        }, 200);
      }
    });
  });

  // 6. Populate Strikers Side-Scrolling Carousel
  function renderStrikers(filter = 'all') {
    if (!strikersTrack) return;
    strikersTrack.innerHTML = '';

    const filtered = filter === 'all'
      ? PLAYERS_DATA
      : PLAYERS_DATA.filter(p => p.category === filter);

    filtered.forEach(player => {
      const card = document.createElement('div');
      card.className = 'striker-card';
      card.setAttribute('data-id', player.id);
      card.setAttribute('data-category', player.category);

      card.innerHTML = `
        <div class="striker-image-wrap">
          <img class="striker-img" src="${player.poster}" alt="${player.name}" loading="lazy">
          <div class="striker-jersey-badge">#${player.jersey}</div>
          <div class="striker-motto-tag">STRIKER</div>
        </div>
        <div class="striker-info">
          <h3 class="striker-name">${player.name}</h3>
          <p class="striker-role">${player.role}</p>
          <div class="striker-meta-row">
            <span class="text-gold" style="font-size: 0.85rem; font-weight: 600;">RHHS PL '26</span>
            <span class="striker-view-btn">View Profile <span>&rarr;</span></span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openPlayerModal(player));
      strikersTrack.appendChild(card);
    });
  }

  renderStrikers('all');

  // Carousel Controls (Next/Prev)
  if (prevStrikerBtn && strikersCarousel) {
    prevStrikerBtn.addEventListener('click', () => {
      strikersCarousel.scrollBy({ left: -320, behavior: 'smooth' });
    });
  }

  if (nextStrikerBtn && strikersCarousel) {
    nextStrikerBtn.addEventListener('click', () => {
      strikersCarousel.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  // Mouse drag-to-scroll for carousel
  let isDown = false;
  let startX;
  let scrollLeft;

  if (strikersCarousel) {
    strikersCarousel.addEventListener('mousedown', (e) => {
      isDown = true;
      strikersCarousel.style.cursor = 'grabbing';
      startX = e.pageX - strikersCarousel.offsetLeft;
      scrollLeft = strikersCarousel.scrollLeft;
    });

    strikersCarousel.addEventListener('mouseleave', () => {
      isDown = false;
      strikersCarousel.style.cursor = 'grab';
    });

    strikersCarousel.addEventListener('mouseup', () => {
      isDown = false;
      strikersCarousel.style.cursor = 'grab';
    });

    strikersCarousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - strikersCarousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      strikersCarousel.scrollLeft = scrollLeft - walk;
    });
  }

  // Player Category Filter Buttons
  playerFilterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      playerFilterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      renderStrikers(filter);
    });
  });

  // 7. Player Quick-View Modal
  const modalPosterImg = document.getElementById('modal-poster-img');
  const modalJerseyTag = document.getElementById('modal-jersey-tag');
  const modalPlayerName = document.getElementById('modal-player-name');
  const modalPlayerRole = document.getElementById('modal-player-role');
  const modalPlayerBio = document.getElementById('modal-player-bio');
  const modalBattingStyle = document.getElementById('modal-batting-style');
  const modalBowlingStyle = document.getElementById('modal-bowling-style');
  const modalMatches = document.getElementById('modal-matches');
  const modalKeyStat = document.getElementById('modal-key-stat');
  const modalCheerBtn = document.getElementById('modal-cheer-btn');

  function openPlayerModal(player) {
    if (!playerModalOverlay) return;

    if (modalPosterImg) modalPosterImg.src = player.poster;
    if (modalJerseyTag) modalJerseyTag.textContent = `#${player.jersey} • SQUAD 2026`;
    if (modalPlayerName) modalPlayerName.textContent = player.name;
    if (modalPlayerRole) modalPlayerRole.textContent = player.role;
    if (modalPlayerBio) modalPlayerBio.textContent = player.bio;
    if (modalBattingStyle) modalBattingStyle.textContent = player.batting || 'Right-Hand Bat';
    if (modalBowlingStyle) modalBowlingStyle.textContent = player.bowling || 'Right-Arm Medium';
    if (modalMatches) modalMatches.textContent = player.stats.matches || '25';

    if (modalKeyStat) {
      if (player.stats.wickets) {
        modalKeyStat.textContent = `${player.stats.wickets} Wickets`;
      } else if (player.stats.runs) {
        modalKeyStat.textContent = `${player.stats.runs} Runs`;
      } else {
        modalKeyStat.textContent = 'Key Player';
      }
    }

    playerModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePlayerModal() {
    if (!playerModalOverlay) return;
    playerModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (playerModalClose) {
    playerModalClose.addEventListener('click', closePlayerModal);
  }

  if (playerModalOverlay) {
    playerModalOverlay.addEventListener('click', (e) => {
      if (e.target === playerModalOverlay) closePlayerModal();
    });
  }

  if (modalCheerBtn) {
    modalCheerBtn.addEventListener('click', () => {
      if (window.triggerStrikerCheer) window.triggerStrikerCheer();
      modalCheerBtn.textContent = 'Cheered! ⚡';
      setTimeout(() => { modalCheerBtn.textContent = 'Cheer This Striker ⚡'; }, 1500);
    });
  }

  // 8. Gallery Section & Lightbox
  let currentGalleryIndex = 0;
  let activeGalleryItems = [...GALLERY_ITEMS];

  function renderGallery(filter = 'all') {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    activeGalleryItems = filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(item => item.category === filter);

    activeGalleryItems.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `gallery-item ${index % 5 === 0 ? 'tall' : ''}`;
      card.setAttribute('data-category', item.category);

      card.innerHTML = `
        <img class="gallery-thumb" src="${item.src}" alt="${item.caption}" loading="lazy">
        <div class="gallery-item-overlay">
          <span class="gallery-badge">${item.category.toUpperCase()}</span>
          <p class="gallery-caption">${item.caption}</p>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(index));
      galleryGrid.appendChild(card);
    });
  }

  renderGallery('all');

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-gallery-filter');
      renderGallery(filter);
    });
  });

  function openLightbox(index) {
    if (!lightboxOverlay || activeGalleryItems.length === 0) return;
    currentGalleryIndex = index;
    updateLightboxContent();
    lightboxOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateLightboxContent() {
    const item = activeGalleryItems[currentGalleryIndex];
    if (!item) return;
    if (lightboxImg) lightboxImg.src = item.src;
    if (lightboxCaption) {
      lightboxCaption.innerHTML = `
        <div style="color: var(--color-gold-bright); font-size: 0.85rem; margin-bottom: 0.2rem; text-transform: uppercase;">
          ${item.category} • ${currentGalleryIndex + 1} / ${activeGalleryItems.length}
        </div>
        ${item.caption}
      `;
    }
  }

  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', (e) => {
      if (e.target === lightboxOverlay) closeLightbox();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryIndex = (currentGalleryIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
      updateLightboxContent();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryIndex = (currentGalleryIndex + 1) % activeGalleryItems.length;
      updateLightboxContent();
    });
  }

  // Keyboard navigation for modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePlayerModal();
      closeLightbox();
      closeMobileNav();
    } else if (lightboxOverlay && lightboxOverlay.classList.contains('open')) {
      if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
      if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    }
  });

  // 9. Partnership Form Handler
  if (partnerForm) {
    partnerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = partnerForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Submitting Proposal...';

      setTimeout(() => {
        partnerForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        if (formSuccessMsg) {
          formSuccessMsg.style.display = 'block';
          formSuccessMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          setTimeout(() => {
            formSuccessMsg.style.display = 'none';
          }, 8000);
        }
      }, 1200);
    });
  }

  // 9.5 Official Team Jersey Interactivity (Size Picker, Edition Toggle & Congratulations Notice)
  const jerseyOrderForm = document.getElementById('jersey-order-form');
  const jerseySizeBtns = document.querySelectorAll('.jersey-size-picker .size-btn');
  const selectedJerseySizeInput = document.getElementById('selected-jersey-size');
  const jerseyEditionOptions = document.querySelectorAll('.jersey-edition-toggle .edition-option');
  const jerseySuccessMsg = document.getElementById('jersey-success-msg');
  const jerseyReorderBtn = document.getElementById('jersey-reorder-btn');
  const jerseyWhatsAppBtn = document.getElementById('jersey-whatsapp-btn');
  const celebrationWhatsAppBtn = document.getElementById('celebration-whatsapp-btn');

  // Summary elements in celebration card
  const summaryCustomerName = document.getElementById('summary-customer-name');
  const summaryEdition = document.getElementById('summary-edition');
  const summarySize = document.getElementById('summary-size');
  const summaryCustom = document.getElementById('summary-custom');
  const summaryPhone = document.getElementById('summary-phone');

  // 1. Size Selection Functionality
  let currentSelectedSize = 'M';
  let currentSelectedSizeLabel = 'M (40")';

  jerseySizeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      jerseySizeBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentSelectedSize = this.getAttribute('data-size') || 'M';
      currentSelectedSizeLabel = this.textContent.trim();
      if (selectedJerseySizeInput) {
        selectedJerseySizeInput.value = currentSelectedSize;
      }
    });
  });

  // 2. Edition Toggle Functionality
  jerseyEditionOptions.forEach(opt => {
    const radio = opt.querySelector('input[type="radio"]');
    opt.addEventListener('click', function () {
      jerseyEditionOptions.forEach(o => o.classList.remove('active'));
      this.classList.add('active');
      if (radio) radio.checked = true;
    });
  });

  // Helper function to build WhatsApp Pre-Order message
  function getJerseyOrderDetails() {
    const editionRadio = document.querySelector('input[name="jersey_edition"]:checked');
    const edition = editionRadio ? editionRadio.value : 'Player Match Edition';
    const customName = (document.getElementById('jersey-custom-name')?.value || '').trim();
    const customNum = (document.getElementById('jersey-custom-num')?.value || '').trim();
    const customerName = (document.getElementById('jersey-customer-name')?.value || '').trim();
    const customerPhone = (document.getElementById('jersey-customer-phone')?.value || '').trim();
    const deliveryCity = (document.getElementById('jersey-delivery-city')?.value || '').trim();

    const customText = (customName || customNum)
      ? `${customName ? customName.toUpperCase() : 'STRIKER'} #${customNum || '07'}`
      : 'Standard Official Match Kit';

    return {
      edition,
      size: currentSelectedSizeLabel,
      sizeCode: currentSelectedSize,
      customName,
      customNum,
      customText,
      customerName: customerName || 'Valued Fan',
      customerPhone: customerPhone || 'Not provided',
      deliveryCity: deliveryCity || 'Not specified'
    };
  }

  function generateWhatsAppUrl(details) {
    const msg = `🏏 *United Bengal Strikers — Official Jersey Pre-Order*\n\n` +
      `• *Edition:* ${details.edition}\n` +
      `• *Size:* ${details.size}\n` +
      `• *Customization:* ${details.customText}\n` +
      `• *Customer Name:* ${details.customerName}\n` +
      `• *Phone:* ${details.customerPhone}\n` +
      `• *Delivery Area:* ${details.deliveryCity}\n\n` +
      `Please confirm my pre-order formality for the 2026 season. Thank you!`;
    return `https://api.whatsapp.com/send?phone=8801300726702&text=${encodeURIComponent(msg)}`;
  }

  // 3. Pre-Order Form Submission & Congratulation Notice
  if (jerseyOrderForm) {
    jerseyOrderForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Check validation
      const nameInput = document.getElementById('jersey-customer-name');
      const phoneInput = document.getElementById('jersey-customer-phone');

      if (nameInput && !nameInput.value.trim()) {
        nameInput.focus();
        return;
      }
      if (phoneInput && !phoneInput.value.trim()) {
        phoneInput.focus();
        return;
      }

      const submitBtn = document.getElementById('jersey-submit-btn');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Processing Reservation... ⚡</span>';
      }

      setTimeout(() => {
        const orderData = getJerseyOrderDetails();

        // Populate congratulation summary
        if (summaryCustomerName) summaryCustomerName.textContent = orderData.customerName;
        if (summaryEdition) summaryEdition.textContent = orderData.edition;
        if (summarySize) summarySize.textContent = orderData.size;
        if (summaryCustom) summaryCustom.textContent = orderData.customText;
        if (summaryPhone) summaryPhone.textContent = orderData.customerPhone;

        // Update WhatsApp links with prefilled order
        const waUrl = generateWhatsAppUrl(orderData);
        if (celebrationWhatsAppBtn) celebrationWhatsAppBtn.href = waUrl;

        // Hide form, show celebration card
        jerseyOrderForm.style.display = 'none';
        if (jerseySuccessMsg) {
          jerseySuccessMsg.style.display = 'block';
          jerseySuccessMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }, 500);
    });
  }

  // 4. Reset / Order Another Jersey Button
  if (jerseyReorderBtn) {
    jerseyReorderBtn.addEventListener('click', function () {
      if (jerseySuccessMsg) jerseySuccessMsg.style.display = 'none';
      if (jerseyOrderForm) {
        jerseyOrderForm.reset();
        jerseyOrderForm.style.display = 'block';
        // Reset default size to M
        jerseySizeBtns.forEach(b => {
          if (b.getAttribute('data-size') === 'M') {
            b.classList.add('active');
            currentSelectedSize = 'M';
            currentSelectedSizeLabel = b.textContent.trim();
          } else {
            b.classList.remove('active');
          }
        });
        if (selectedJerseySizeInput) selectedJerseySizeInput.value = 'M';

        // Reset edition active class
        jerseyEditionOptions.forEach((opt, idx) => {
          if (idx === 0) {
            opt.classList.add('active');
            const r = opt.querySelector('input[type="radio"]');
            if (r) r.checked = true;
          } else {
            opt.classList.remove('active');
          }
        });

        jerseyOrderForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // 5. Pre-order via WhatsApp Direct Button (Form button)
  if (jerseyWhatsAppBtn) {
    jerseyWhatsAppBtn.addEventListener('click', function () {
      const orderData = getJerseyOrderDetails();
      const waUrl = generateWhatsAppUrl(orderData);
      window.open(waUrl, '_blank');
    });
  }

  // 10. Smooth Scroll Spy for Navigation Links
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  // 11. Animated Stats Counter (Trigger on scroll into view)
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  function runStatsCounter() {
    if (animatedStats) return;
    const heroStats = document.querySelector('.hero-stats-bar');
    if (!heroStats) return;

    const rect = heroStats.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animatedStats = true;
      statNumbers.forEach(stat => {
        const targetStr = stat.getAttribute('data-target');
        const isYear = targetStr === '2019';
        const targetNum = parseInt(targetStr, 10);
        if (isNaN(targetNum)) return;

        let current = isYear ? 2000 : 0;
        const increment = Math.max(1, Math.ceil(targetNum / 40));
        const timer = setInterval(() => {
          current += increment;
          if (current >= targetNum) {
            stat.textContent = targetStr + (stat.getAttribute('data-suffix') || '');
            clearInterval(timer);
          } else {
            stat.textContent = current + (stat.getAttribute('data-suffix') || '');
          }
        }, 30);
      });
    }
  }

  window.addEventListener('scroll', runStatsCounter);
  runStatsCounter();

})();
