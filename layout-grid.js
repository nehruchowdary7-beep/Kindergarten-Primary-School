const LAYOUT_GRID_CARDS = [
  {
    id: 1,
    title: "Park Play & Storybook Joy",
    series: "Outdoor Atelier",
    tag: "Early Years",
    className: "md:col-span-2",
    description: "Sunny morning park discovery featuring joyful soccer matches, reading circles, and playground friendships.",
    details: ["Storybook Circle", "Soccer & Movement", "Nature Exploration", "Outdoor Atelier"],
    thumbnail: "gallery-rail-1.jpg"
  },
  {
    id: 2,
    title: "Sunshine School Bus Commute",
    series: "Campus Life",
    tag: "Daily Route",
    className: "col-span-1",
    description: "Cheery yellow campus shuttle with our friendly driver welcoming young scholars to daily discovery.",
    details: ["Campus Shuttle", "Certified Safety", "Morning Smiles", "Peer Routine"],
    thumbnail: "gallery-rail-2.jpg"
  },
  {
    id: 3,
    title: "Junior Gym Relay Challenge",
    series: "Athletics Arena",
    tag: "Physical Ed",
    className: "col-span-1",
    description: "High-energy indoor gym obstacle relay building balance, team coordination, and enthusiastic cheering.",
    details: ["Obstacle Cones", "Agility Hoops", "Team Relay", "Sportsmanship"],
    thumbnail: "gallery-rail-3.jpg"
  },
  {
    id: 4,
    title: "Circle of Friendship Meadow",
    series: "Fine Arts Studio",
    tag: "Fine Art",
    className: "md:col-span-2",
    description: "Vibrant oil-canvas portrayal of students united hand-in-hand beneath canopy trees in a wild meadow.",
    details: ["Oil Painting", "Wildflower Meadow", "Unity Ring", "Collaborative Art"],
    thumbnail: "gallery-rail-4.jpg"
  },
  {
    id: 5,
    title: "Campus Nature Pathway Walk",
    series: "Primary Cohort",
    tag: "Primary",
    className: "md:col-span-2",
    description: "Primary scholars hand-in-hand exploring shaded campus tree tunnels between morning lessons.",
    details: ["Uniform Cohort", "Green Canopy", "Peer Companionship", "Daily Stroll"],
    thumbnail: "gallery-rail-5.jpg"
  },
  {
    id: 6,
    title: "Botanical Garden & Soil Lab",
    series: "Eco Stewardship",
    tag: "Eco Science",
    className: "col-span-1",
    description: "Hands-on botanical bed planting where young botanists nurture seasonal flowers, soil, and herbs.",
    details: ["Raised Garden Bed", "Seed Cultivation", "Botanical Science", "Team Gardening"],
    thumbnail: "gallery-rail-6.jpg"
  },
  {
    id: 7,
    title: "Sunlit Reading Atelier & Tree",
    series: "Literary Hub",
    tag: "Library",
    className: "col-span-1",
    description: "Contemporary glass-roof library with indoor foliage and beanbag reading corners inspiring deep curiosity.",
    details: ["Indoor Tree Grove", "Color Beanbags", "Independent Reading", "Sunlit Skylight"],
    thumbnail: "gallery-rail-7.jpg"
  },
  {
    id: 8,
    title: "Turf Lawn Circle Gathering",
    series: "Kindergarten Circle",
    tag: "Kindergarten",
    className: "md:col-span-2",
    description: "Joyful morning circle conference on the green turf, sharing weekend stories and group songs.",
    details: ["Morning Circle", "Social Rhythm", "Green Turf Lawn", "Oral Storytelling"],
    thumbnail: "gallery-rail-8.jpg"
  }
];

function initLayoutGrid() {
  const container = document.getElementById("layoutGridContainer");
  if (!container) return;

  container.innerHTML = LAYOUT_GRID_CARDS.map((card) => `
    <div class="${card.className} h-[320px] sm:h-[380px] lg:h-[420px]">
      <div 
        onclick="openLayoutCard(${card.id})"
        class="relative overflow-hidden rounded-2xl sm:rounded-3xl h-full w-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
      >
        <img 
          src="${card.thumbnail}" 
          alt="${card.title}" 
          class="object-cover object-top absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity duration-300"></div>
        <div class="relative h-full w-full flex flex-col justify-end p-5 sm:p-7 z-10 transition-transform duration-300 group-hover:-translate-y-1">
          <div class="flex items-center gap-2 mb-2 flex-wrap">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-sm">
              ${card.series}
            </span>
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-black/50 text-white backdrop-blur-xs border border-white/20">
              ${card.tag}
            </span>
          </div>
          <h3 class="font-heading font-black text-lg sm:text-2xl lg:text-3xl text-white leading-tight drop-shadow-sm">
            ${card.title}
          </h3>
          <p class="font-body text-xs sm:text-sm my-2 max-w-lg text-neutral-200 line-clamp-2 leading-relaxed">
            ${card.description}
          </p>
          <div class="flex items-center gap-1.5 text-xs font-bold text-amber-300 group-hover:text-amber-200 transition-colors pt-1">
            <span>Explore Canvas</span>
            <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function openLayoutCard(id) {
  const card = LAYOUT_GRID_CARDS.find(c => c.id === id);
  if (!card) return;

  const modal = document.getElementById("layoutGridModal");
  const modalImg = document.getElementById("layoutModalImg");
  const modalTag = document.getElementById("layoutModalTag");
  const modalTitle = document.getElementById("layoutModalTitle");
  const modalDesc = document.getElementById("layoutModalDesc");
  const modalDetails = document.getElementById("layoutModalDetails");

  if (!modal || !modalImg || !modalTag || !modalTitle || !modalDesc || !modalDetails) return;

  modalImg.src = card.thumbnail;
  modalImg.alt = card.title;
  modalTag.textContent = `${card.series} • ${card.tag}`;
  modalTitle.textContent = card.title;
  modalDesc.textContent = card.description;

  modalDetails.innerHTML = card.details.map(item => `
    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/15 backdrop-blur-sm text-white border border-white/20">
      ${item}
    </span>
  `).join("");

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLayoutCard() {
  const modal = document.getElementById("layoutGridModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initLayoutGrid();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLayoutCard();
    }
  });
});
