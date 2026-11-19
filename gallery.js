const galleryItems = [
  {
    id: 1,
    title: "Young Inventors STEAM Expo",
    category: "steam",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    desc: "Grade 1 students presenting their solar robotic models and magnetic labyrinths."
  },
  {
    id: 2,
    title: "Sensory Finger Painting ",
    category: "arts",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=80",
    desc: "Kindergarten children expressing boundless creativity with non-toxic botanical colors."
  },
  {
    id: 3,
    title: "Spring Sports Day & Obstacle",
    category: "sports",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
    desc: "Developing motor agility, team encouragement, and joyous celebration outdoors."

  },
  {
    id: 4,
    title: "Cozy Storytelling in the Reading ",
    category: "campus",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    desc: "Developing a lifelong love for literature with guided phonics and picture books."
  },
  {
    id: 5,
    title: "Organic Herb & Seed Garden ",
    category: "campus",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    desc: "Hands-on botanic discovery teaching children sustainability and eco-stewardship."
  },
  {
    id: 6,
    title: "Annual Costume & Festival",
    category: "festivals",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    desc: "Playful dramatic enactments building public speaking confidence and empathy."
  },
  {
    id: 7,
    title: "Early Math Blocks & Spatial ",
    category: "steam",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80",
    desc: "Montessori-inspired tactile blocks developing intuitive number sense."
  },
  {
    id: 8,
    title: "Music, Rhythms & Ukulele Circle",
    category: "arts",
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=1200&q=80",
    desc: "Exploring acoustic harmony, tempo, and auditory sensory perception."
  }
];

let activeFilter = 'all';
let currentLightboxIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
});

function filterGallery(category) {
  activeFilter = category;

  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const filtered = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  grid.innerHTML = filtered.map((item, index) => `
    <div class="glass-card overflow-hidden group cursor-pointer" onclick="openLightbox(${item.id})">
      <div class="relative h-64 overflow-hidden">
        <img
          src="${item.image}"
          alt="${item.title}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
        <div class="absolute bottom-4 left-4 right-4 text-white">
          <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-lumiYellow text-slate-900 mb-2">
            ${item.category}
          </span>
          <h4 class="text-lg font-bold font-heading drop-shadow-sm leading-snug">${item.title}</h4>
          <p class="text-xs text-slate-200 mt-1 line-clamp-2">${item.desc}</p>
        </div>
        <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
        </div>
      </div>
    </div>
  `).join('');
}

function openLightbox(itemId) {
  const item = galleryItems.find(g => g.id === itemId);
  if (!item) return;

  currentLightboxIndex = galleryItems.findIndex(g => g.id === itemId);

  const modal = document.getElementById('lightboxModal');
  const imgEl = document.getElementById('lightboxImage');
  const titleEl = document.getElementById('lightboxTitle');
  const descEl = document.getElementById('lightboxDesc');

  if (modal && imgEl && titleEl && descEl) {
    imgEl.src = item.image;
    titleEl.textContent = item.title;
    descEl.textContent = item.desc;
    modal.classList.remove('hidden');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.add('hidden');
}

function nextLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryItems.length;
  openLightbox(galleryItems[currentLightboxIndex].id);
}

function prevLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryItems.length) % galleryItems.length;
  openLightbox(galleryItems[currentLightboxIndex].id);
}
