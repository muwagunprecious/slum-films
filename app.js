/**
 * SLUMFILMS — 3D ANIMATION PORTAL
 * Real 3D Animation Video Player · "Our films" Yellow Catalog · Character Showcase · Modal Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 3D ANIMATED FILMS CATALOG (AUTHENTIC ARTWORK)
  // ==========================================
  const FILMS_3D_CATALOG = [
    {
      id: 'sing-2',
      title: 'SING 2',
      studio: 'SLUMFILMS',
      badge: '3D ANIMATION / MUSICAL',
      year: '2022',
      duration: '1h 50m',
      rating: 'PG',
      tagline: 'WHERE WILL YOUR DREAMS TAKE YOU?',
      poster: 'images/posters/sing-1.jpg',
      vid: 'EPuZU-g9U2c',
      synopsis: 'Buster Moon and his all-star cast of animal performers prepare to launch their most dazzling stage extravaganza yet in the glamorous entertainment capital of the world. But to do so, they must persuade the world’s most reclusive rock star to join them.'
    },
    {
      id: 'despicable-me-3',
      title: 'DESPICABLE ME 3',
      studio: 'SLUMFILMS',
      badge: '3D ANIMATION / COMEDY',
      year: '2017',
      duration: '1h 30m',
      rating: 'PG',
      tagline: 'OH BROTHER.',
      poster: 'images/posters/despicable-me-3.jpg',
      vid: 'qQBaMuB1oBA',
      synopsis: 'After he is fired from the Anti-Villain League for failing to take down Balthazar Bratt, Gru finds himself in the midst of a major identity crisis. But when a mysterious stranger shows up to inform Gru that he has a long-lost charming twin brother named Dru, a hilarious sibling rivalry unfolds.'
    },
    {
      id: 'the-super-mario-bros',
      title: 'THE SUPER MARIO BROS. MOVIE',
      studio: 'SLUMFILMS x NINTENDO',
      badge: '3D ANIMATION / GAMING',
      year: '2023',
      duration: '1h 32m',
      rating: 'PG',
      tagline: 'NOT WATERPROOF.',
      poster: 'images/posters/the-super-mario-bros.jpg',
      vid: 'TnGl01FkMMo',
      synopsis: 'While working underground to fix a water main, Brooklyn plumbers Mario and brother Luigi are transported down a mysterious pipe and wander into a magical new world. When the brothers are separated, Mario embarks on an epic quest to find Luigi.'
    },
    {
      id: 'migration',
      title: 'MIGRATION',
      studio: 'SLUMFILMS',
      badge: '3D ANIMATION / ADVENTURE',
      year: '2023',
      duration: '1h 23m',
      rating: 'PG',
      tagline: 'FLY INTO THE UNKNOWN.',
      poster: 'images/posters/migration-movie.svg',
      vid: 'c6rP-YP4c5I',
      synopsis: 'A family of ducks tries to convince their overprotective father to go on the vacation of a lifetime as they attempt to migrate from New England, through New York City, and all the way to Jamaica.'
    },
    {
      id: 'minions-rise-of-gru',
      title: 'MINIONS: THE RISE OF GRU',
      studio: 'SLUMFILMS',
      badge: '3D ANIMATION / BLOCKBUSTER',
      year: '2022',
      duration: '1h 27m',
      rating: 'PG',
      tagline: 'BRACE YOURSELF.',
      poster: 'images/posters/minions-rise-of-gru.svg',
      vid: 'qQBaMuB1oBA',
      synopsis: 'In the heart of the 1970s, amidst a flurry of feathered hair and flared jeans, Gru is growing up in the suburbs. A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them alongside his loyal Minions.'
    },
    {
      id: 'iwaju-3d',
      title: 'IWÁJÚ (3D SERIES)',
      studio: 'KUGALI x DISNEY',
      badge: '3D AFRO-FUTURISM / CGI',
      year: '2024',
      duration: '6 EPISODES',
      rating: 'TV-PG',
      tagline: 'THE FUTURE OF LAGOS IS NOW.',
      poster: 'images/posters/iwaju-3d.svg',
      vid: 'NHgoYvH5WF4',
      synopsis: 'A coming-of-age 3D animated series that follows Tola, a young girl from the wealthy island, and her best friend, Kole, a self-taught tech expert, as they discover the secrets and dangers hidden in their different worlds across futuristic Lagos.'
    },
    {
      id: 'kizazi-moto',
      title: 'KIZAZI MOTO: GENERATION FIRE',
      studio: 'TRIGGERFISH x DISNEY+',
      badge: '3D AFRO-FUTURISM',
      year: '2023',
      duration: '10 EPISODES',
      rating: 'PG-13',
      tagline: 'IGNITE THE GENERATION.',
      poster: 'images/posters/kizazi-moto.svg',
      vid: 'NHgoYvH5WF4',
      synopsis: 'An action-packed 3D animated sci-fi anthology that presents futuristic visions from Africa inspired by the continent’s diverse histories and cultures, exploring advanced technology, aliens, spirits, and monsters.'
    },
    {
      id: 'dawn-of-thunder-3d',
      title: 'DAWN OF THUNDER (SANGO 3D)',
      studio: 'KOMOTION STUDIOS',
      badge: '3D THEATRICAL EPIC',
      year: '2024',
      duration: '1h 45m',
      rating: 'PG-13',
      tagline: 'THE GOD OF THUNDER RISES.',
      poster: 'images/posters/dawn-of-thunder-3d.svg',
      vid: 'TnGl01FkMMo',
      synopsis: 'The legendary Yoruba deity of thunder and lightning, Sango, rises in breathtaking 3D CGI theatrical cinema, wielding celestial dual axes to defend his people against treacherous mythical spirits and tyrant warlords.'
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
          <img src="${film.poster}" alt="${film.title} 3D Movie Poster" class="film-poster-img" loading="lazy">
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
  // YOUTUBE VIDEO CHANNEL PILLS
  // ==========================================
  const channelPills = document.querySelectorAll('.channel-pill');
  const heroIframe = document.getElementById('hero-youtube-player');
  const heroKicker = document.getElementById('hero-kicker');
  const heroTitleText = document.getElementById('hero-title-text');

  channelPills.forEach(pill => {
    pill.addEventListener('click', () => {
      channelPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const vid = pill.getAttribute('data-vid');
      const title = pill.getAttribute('data-title');
      const sub = pill.getAttribute('data-sub');

      if (heroIframe) {
        heroIframe.src = `https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&mute=1&controls=1&loop=1&playlist=${vid}&rel=0&modestbranding=1`;
      }
      if (heroTitleText) heroTitleText.textContent = title;
      if (heroKicker) heroKicker.textContent = sub;

      showToast(`Now playing: ${title} 3D Trailer`);
    });
  });

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
    const currentFilm = FILMS_3D_CATALOG.find(f => f.title === modalTitle.textContent);
    if (currentFilm && heroIframe) {
      heroIframe.src = `https://www.youtube-nocookie.com/embed/${currentFilm.vid}?autoplay=1&mute=0&controls=1`;
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    }
    closeFilmModal();
    showToast(`Loading 3D trailer for ${modalTitle.textContent}…`);
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
