/**
 * SLUMFILMS — NIGERIAN 3D ANIMATION PORTAL
 * Authentic Nigerian & African 3D CGI Imagery · "Our films" Yellow Catalog · Character Showcase · Modal Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // NIGERIAN 3D ANIMATION FILMS CATALOG (RASTER PHOTOGRAPHY)
  // ==========================================
  const NIGERIAN_3D_CATALOG = [
    {
      id: 'iwaju-3d',
      title: 'Iwájú: Futuristic Lagos',
      studio: 'KUGALI x DISNEY',
      badge: '3D CGI / SCI-FI',
      year: '2024',
      duration: '6 EPISODES',
      rating: 'TV-PG',
      poster: 'images/posters/iwaju-official-poster.jpg',
      synopsis: 'A landmark Nigerian 3D animated series set in a futuristic solarpunk Lagos. Follow Tola, a young girl from the wealthy island, and her best friend Kole, a self-taught mainland tech wizard, accompanied by their robotic Agama lizard Otin as they uncover deep mysteries between two worlds.'
    },
    {
      id: 'dawn-of-thunder',
      title: 'Dawn of Thunder (Sango 3D)',
      studio: 'KOMOTION STUDIOS',
      badge: '3D THEATRICAL EPIC',
      year: '2024',
      duration: '1h 45m',
      rating: 'PG-13',
      poster: 'images/posters/sango-thunder-god.jpg',
      synopsis: 'An epic Nigerian 3D CGI cinematic production based on the legend of Sango, the Yoruba deity of thunder and lightning. Armed with the sacred double-headed axe Oshé Sango, he defends ancient kingdoms against celestial storm spirits and corrupt warlords.'
    },
    {
      id: 'kizazi-moto',
      title: 'Kizazi Moto: Generation Fire',
      studio: 'TRIGGERFISH x DISNEY+',
      badge: '3D AFRO-FUTURISM',
      year: '2023',
      duration: '10 EPISODES',
      rating: 'PG-13',
      poster: 'images/posters/kizazi-moto-fire.jpg',
      synopsis: 'A thrilling 3D animated sci-fi anthology presenting futuristic visions from across the African continent, featuring high-speed cyber kinetic warriors, ancient spirit guardians, and hyper-advanced Nigerian and pan-African civilizations.'
    },
    {
      id: 'supa-team-4',
      title: 'Supa Team 4',
      studio: 'TRIGGERFISH x NETFLIX',
      badge: '3D ANIMATED ACTION',
      year: '2023',
      duration: '2 SEASONS',
      rating: 'TV-Y7',
      poster: 'images/posters/supa-team-4-african.jpg',
      synopsis: 'Four teenage superhero girls living in a neo-futuristic African city are recruited by an undercover agent to balance high school life with saving the world from supervillains.'
    },
    {
      id: 'tola-kole-otin',
      title: 'Tola & The Cyber-Agama',
      studio: 'KUGALI MEDIA',
      badge: '3D CHARACTER SHORT',
      year: '2024',
      duration: '45m SPECIAL',
      rating: 'PG',
      poster: 'images/posters/tola-kole-otin.jpg',
      synopsis: 'An intimate 3D animation adventure exploring the special bond between Tola and her loyal robotic protector Otin as they navigate high-speed drone traffic over the Third Mainland Bridge.'
    },
    {
      id: 'lagos-2099',
      title: 'Lagos 2099: Solarpunk City',
      studio: 'SLUMFILMS STUDIOS',
      badge: '3D CINEMATIC UNIVERSE',
      year: '2025',
      duration: '1h 52m',
      rating: 'PG',
      poster: 'images/art/hero-nigerian-3d.jpg',
      synopsis: 'A breathtaking 3D CGI animated feature exploring floating stilt markets, monorail bridges, and geothermal energy grids in a thriving solarpunk metropolis.'
    }
  ];

  // ==========================================
  // RENDER "OUR FILMS" YELLOW SECTION
  // ==========================================
  const filmsGrid = document.getElementById('films-grid');

  function renderFilms() {
    if (!filmsGrid) return;
    filmsGrid.innerHTML = '';

    NIGERIAN_3D_CATALOG.forEach(film => {
      const card = document.createElement('div');
      card.className = 'film-tile-card';
      card.innerHTML = `
        <div class="film-poster-wrap">
          <img src="${film.poster}" alt="${film.title} Nigerian 3D Poster" class="film-poster-img" loading="lazy">
        </div>
        <div class="film-tile-info">
          <h3 class="film-tile-title">${film.title}</h3>
          <div class="film-tile-meta">${film.year} • ${film.badge}</div>
        </div>
      `;

      card.addEventListener('click', () => openFilmModal(film));
      filmsGrid.appendChild(card);
    });
  }

  renderFilms();

  // ==========================================
  // FLOATING YELLOW MENU BUTTON & OVERLAY
  // ==========================================
  const floatingMenuBtn = document.getElementById('floating-menu-btn');
  const navOverlay = document.getElementById('nav-overlay');
  const navClose = document.getElementById('nav-close');

  floatingMenuBtn?.addEventListener('click', () => {
    navOverlay?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  navClose?.addEventListener('click', () => {
    navOverlay?.classList.add('hidden');
    document.body.style.overflow = '';
  });

  document.querySelectorAll('.overlay-link').forEach(link => {
    link.addEventListener('click', () => {
      navOverlay?.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });

  // ==========================================
  // 3D FILM LIGHTBOX MODAL
  // ==========================================
  const modal = document.getElementById('film-modal');
  const modalImg = document.getElementById('modal-poster-img');
  const modalTitle = document.getElementById('modal-title');
  const modalStudioTag = document.getElementById('modal-studio-tag');
  const modalMeta = document.getElementById('modal-meta');
  const modalSynopsis = document.getElementById('modal-synopsis');
  const modalClose = document.getElementById('modal-close-btn');
  const modalCancel = document.getElementById('modal-cancel-btn');
  const modalStream = document.getElementById('modal-stream-btn');

  window.openFilmModalById = function(id) {
    const film = NIGERIAN_3D_CATALOG.find(f => f.id === id);
    if (film) openFilmModal(film);
  };

  function openFilmModal(film) {
    if (!modal) return;
    modalImg.src = film.poster;
    modalImg.alt = film.title;
    modalTitle.textContent = film.title;
    modalStudioTag.textContent = `${film.studio} • ${film.badge}`;
    modalMeta.textContent = `${film.year} • ${film.duration} • ${film.rating}`;
    modalSynopsis.textContent = film.synopsis;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeFilmModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeFilmModal);
  modalCancel?.addEventListener('click', closeFilmModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeFilmModal();
  });

  modalStream?.addEventListener('click', () => {
    showToast(`Streaming 3D trailer for ${modalTitle.textContent}…`);
    closeFilmModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeFilmModal();
  });

  // ==========================================
  // BUTTON ACTIONS
  // ==========================================
  document.getElementById('lab-btn')?.addEventListener('click', () => {
    showToast('Opening SlumFilms 3D Animation Pipeline Lab…');
  });

  document.getElementById('jobs-btn')?.addEventListener('click', () => {
    showToast('Loading SlumFilms 3D animation roles…');
  });

  // ==========================================
  // TOAST SYSTEM
  // ==========================================
  const toastBox = document.getElementById('toast-box');
  function showToast(msg) {
    if (!toastBox) return;
    const toast = document.createElement('div');
    toast.className = 'illum-toast';
    toast.textContent = msg;
    toastBox.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3000);
  }

});
