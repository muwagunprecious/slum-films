# Slum Films — Premium African Family Cinema & Streaming

A cinematic family entertainment and streaming web application celebrating African storytelling, children's imagination, and original animated cinema rooted in the **SlumArts** ecosystem.

---

## 🌟 Features

- **African Cinema Identity**: Bold branding, warm cinematic black (`#050505`), African crimson (`#E50914`), and harvest gold (`#F5C542`).
- **10 Curated Nigerian & African Animated Premieres**:
  1. *The Last Drum* (Ilù Ìkẹyìn) — Flagship African animated epic adventure
  2. *Abu's World* — 3D solar-gadget kid inventor comedy series
  3. *Lagos 2099: Cyber Danfo* — Afrofuturistic sci-fi animation
  4. *Sade & The River Goddess* — Mystical folklore fantasy
  5. *Eko Beats: Makoko Rhythms* — Animated musical comedy
  6. *Simi's Magic Clay* — Children's art adventure
  7. *The Rainmaker of Kano* — Northern Nigerian folklore epic
  8. *Bintu & The Talking Parrot* — Storybook preschool animation
  9. *Chike and the River* — Classic literary adaptation in 3D animation
  10. *The Golden Calabash* — Mythological family quest
- **Vibrant Artwork Across All Sections**:
  - High-impact Hero scene with authentic family cinema photography
  - 10 custom-crafted vector animated movie posters with African motifs and typography
  - Dedicated Kids section with young creators photography & spotlight
  - Family experience cards highlighting safety, culture, and shared viewing
  - SlumArts production crew and community photography
  - Founding VIP Membership card with ₦15,000/year annual pricing
- **Interactive Capabilities**:
  - **Dynamic Catalogue Carousel** with interactive category filtering (*All, Originals, Kids, Family, Drama*)
  - **Cinematic Trailer Player Modal** with real-time progress scrub bar and Web Audio drum/harmonic chime synthesis
  - **Multi-Step Founding Member Modal** with role selection (*Parent, Child, Film Enthusiast*), custom child ages, and digital ticket generator
  - **Pre-Launch Sign In Modal** with invite code verification (`SLUM-VIP-2026`)
  - **Sticky Blurred Header** and mobile navigation drawer

---

## 🚀 Running Locally

1. Start the zero-dependency Node.js server:
   ```bash
   node server.js
   ```
2. Open your browser at:
   ```
   http://localhost:3001/
   ```

---

## 📁 File Structure

```
Slum films/
├── index.html               # Main semantic HTML structure
├── styles.css               # Design tokens, responsive layouts, animations
├── app.js                   # Application state, catalogue filter, audio synth & modals
├── server.js                # Zero-dependency static HTTP server with port fallback
├── generate_posters.js      # Poster builder script
├── images/
│   └── posters/             # 10 Nigerian animated movie SVG posters
└── README.md                # Documentation
```
