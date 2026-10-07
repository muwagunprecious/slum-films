/**
 * SLUMFILMS — 3D ANIMATION PORTAL
 * Authentic 3D Animation Artwork · "Our films" Yellow Catalog · Character Showcase · Modal Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 3D ANIMATION FILMS CATALOG (MATCHING USER SCREENSHOTS)
  // ==========================================
  const FILMS_3D_CATALOG = [
    {
      id: 'octopus-saga',
      title: 'Ocean Legends 3D',
      badge: '3D CGI / ADVENTURE',
      year: '2024',
      duration: '1h 38m',
      rating: 'PG',
      tagline: 'DEPTHS OF THE UNKNOWN',
      poster: 'images/art/octopus-tentacle.svg',
      vid: 'qQBaMuB1oBA',
      synopsis: 'A deep-sea CGI animated odyssey uncovering ancient oceanic titans and bioluminescent wonders beneath the mythical Gulf of Guinea.'
    },
    {
      id: 'starry-cosmos',
      title: 'Cosmic Horizons',
      badge: '3D SCI-FI / ANIMATION',
      year: '2024',
      duration: '1h 44m',
      rating: 'PG',
      tagline: 'BEYOND THE STARS',
      poster: 'images/art/starry-cosmos.svg',
      vid: 'TnGl01FkMMo',
      synopsis: 'An apprentice astronomer journeys across interstellar starlight to decode celestial constellations and protect planetary harmony.'
    },
    {
      id: 'sing-2',
      title: 'Sing 2',
      badge: '3D ANIMATION / MUSICAL',
      year: '2022',
      duration: '1h 50m',
      rating: 'PG',
      tagline: 'WHERE WILL YOUR DREAMS TAKE YOU?',
      poster: 'images/posters/sing-1.jpg',
      vid: 'EPuZU-g9U2c',
      synopsis: 'Buster Moon and his all-star cast of animal performers prepare to launch their most dazzling stage extravaganza yet in the glamorous entertainment capital of the world.'
    },
    {
      id: 'despicable-me-3',
      title: 'Despicable Me 3',
      badge: '3D ANIMATION / COMEDY',
      year: '2017',
      duration: '1h 30m',
      rating: 'PG',
      tagline: 'OH BROTHER.',
      poster: 'images/posters/despicable-me-3.jpg',
      vid: 'qQBaMuB1oBA',
      synopsis: 'After he is fired from the Anti-Villain League, Gru meets his long-lost charming twin brother Dru, leading to a hilarious sibling rivalry and family adventure.'
    },
    {
      id: 'the-super-mario-bros',
      title: 'The Super Mario Bros. Movie',
      badge: '3D ANIMATION / GAMING',
      year: '2023',
      duration: '1h 32m',
      rating: 'PG',
      tagline: 'NOT WATERPROOF.',
      poster: 'images/posters/the-super-mario-bros.jpg',
      vid: 'TnGl01FkMMo',
      synopsis: 'While working underground to fix a water main, Brooklyn plumbers Mario and brother Luigi are transported down a mysterious pipe into a magical 3D world.'
    },
    {
      id: 'migration',
      title: 'Migration',
      badge: '3D ANIMATION / ADVENTURE',
      year: '2023',
      duration: '1h 23m',
      rating: 'PG',
      tagline: 'FLY INTO THE UNKNOWN.',
      poster: 'images/posters/migration-movie.svg',
      vid: 'c6rP-YP4c5I',
      synopsis: 'A family of ducks tries to convince their overprotective father to go on the vacation of a lifetime migrating from New England to Jamaica.'
    }
  ];

  // ==========================================
  // RENDER "OUR FILMS" YELLOW SECTION
  // ==========================================
  const filmsGrid = document.getElementById('films-grid');

  function renderFilms() {
    if (!filmsGrid) return;
    filmsGrid.innerHTML = '';

    FILMS_3D_CATALOG.forEach(film => {
      const card = document.createElement('div');
      card.className = 'film-tile-card';
      card.innerHTML = `
        <div class="film-poster-wrap">
          <img src="${film.poster}" alt="${film.title} 3D Poster" class="film-poster-img" loading="lazy">
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
    const film = FILMS_3D_CATALOG.find(f => f.id === id);
    if (film) openFilmModal(film);
  };

  function openFilmModal(film) {
    if (!modal) return;
    modalImg.src = film.poster;
    modalImg.alt = film.title;
    modalTitle.textContent = film.title;
    modalStudioTag.textContent = `SLUMFILMS • ${film.badge}`;
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
    showToast(`Launching 3D player for ${modalTitle.textContent}…`);
    closeFilmModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeFilmModal();
  });

  // ==========================================
  // BUTTON ACTIONS
  // ==========================================
  document.getElementById('lab-btn')?.addEventListener('click', () => {
    showToast('Opening SlumFilms 3D Animation Lab…');
  });

  document.getElementById('jobs-btn')?.addEventListener('click', () => {
    showToast('Loading SlumFilms career opportunities…');
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
