(function() {
  try {
    const savedDir = localStorage.getItem('lumikids-direction') || 'ltr';
    document.documentElement.setAttribute('dir', savedDir);
    const savedTheme = localStorage.getItem('lumikids-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDirection();
  highlightActiveNavLink();
  window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    }
  });
});
function initDirection() {
  const savedDir = localStorage.getItem('lumikids-direction') || 'ltr';
  applyDirection(savedDir);
}

function toggleDirection() {
  const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
  const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
  applyDirection(newDir);
  localStorage.setItem('lumikids-direction', newDir);
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  const btns = document.querySelectorAll('.dir-toggle-btn');
  btns.forEach(btn => {
    btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR direction' : 'Switch to RTL direction');
    btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to LTR text direction' : 'Switch to RTL text direction');
  });
}
function initTheme() {
  const savedTheme = localStorage.getItem('lumikids-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcons(isDark);
}

function toggleTheme() {
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  if (isCurrentlyDark) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('lumikids-theme', 'light');
    updateThemeIcons(false);
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('lumikids-theme', 'dark');
    updateThemeIcons(true);
  }
}

function updateThemeIcons(isDark) {
  const iconContainers = document.querySelectorAll('.theme-toggle-icon');
  iconContainers.forEach(container => {
    if (isDark) {
      container.innerHTML = `
        <svg class="w-4.5 h-4.5 text-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
        </svg>
      `;
    } else {
      container.innerHTML = `
        <svg class="w-4.5 h-4.5 text-slate-700 dark:text-slate-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
      `;
    }
  });
}
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer && !drawer.classList.contains('hidden')) {
    drawer.classList.add('hidden');
  }
}
function openTourModal() {
  const modal = document.getElementById('tourModal');
  if (modal) modal.classList.remove('hidden');
}

function closeTourModal() {
  const modal = document.getElementById('tourModal');
  if (modal) modal.classList.add('hidden');
}

function handleTourBooking(e) {
  e.preventDefault();
  const name = document.getElementById('tourParentName')?.value || 'Parent';
  const date = document.getElementById('tourDate')?.value || 'Upcoming Friday';
  closeTourModal();
  showToast(`Thank you ${name}! Campus Tour scheduled for ${date}. Confirmation sent to your email!`, "success");
}

function downloadProspectus() {
  showToast("Downloading LumiKids Academy 2026-2027 Prospectus & Curriculum Guide PDF...", "info");
  setTimeout(() => {
    showToast("Prospectus PDF downloaded successfully!", "success");
  }, 1200);
}
function showToast(message, type = "info") {
}
let homeCalcBaseTier = 1150;

function setHomeCalcTier(val, btn) {
  homeCalcBaseTier = val;
  document.querySelectorAll('.home-calc-tier-btn').forEach(b => {
    b.classList.remove('border-amber-400', 'bg-amber-500/15', 'shadow-md');
    b.classList.add('border-slate-200', 'dark:border-slate-700');
  });
  if (btn) {
    btn.classList.add('border-amber-400', 'bg-amber-500/15', 'shadow-md');
    btn.classList.remove('border-slate-200', 'dark:border-slate-700');
  }
  updateHomeCalcTotal();
}

function updateHomeCalcTotal() {
  const bus = document.getElementById('homeCalcBus');
  const meal = document.getElementById('homeCalcMeal');
  const care = document.getElementById('homeCalcCare');
  let busFee = bus && bus.checked ? 180 : 0;
  let mealFee = meal && meal.checked ? 140 : 0;
  let careFee = care && care.checked ? 160 : 0;
  let termTotal = homeCalcBaseTier + busFee + mealFee + careFee;
  let monthly = Math.round(termTotal / 3);
  let annual = termTotal * 3;
  const termEl = document.getElementById('homeCalcTermDisplay');
  const monthEl = document.getElementById('homeCalcMonthlyDisplay');
  const annualEl = document.getElementById('homeCalcAnnualDisplay');
  if (termEl) termEl.textContent = `$${termTotal.toLocaleString()}`;
  if (monthEl) monthEl.textContent = `$${monthly.toLocaleString()} / mo`;
  if (annualEl) annualEl.textContent = `$${annual.toLocaleString()} / yr`;
}
function handleHeroSearch(event) {
  if (event) event.preventDefault();
  const progEl = document.getElementById('heroProgramSelect');
  const termEl = document.getElementById('heroTermSelect');
  const prog = progEl ? progEl.value : 'Selected Program';
  const term = termEl ? termEl.value : '2026';
  showToast(`Found matching classes for ${prog} (${term})!`, 'success');
  const target = document.querySelector('main section:nth-of-type(2)');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
function toggleCardDetails(tierId) {
  const drawer = document.getElementById(`cardDetails-${tierId}`);
  const btn = document.getElementById(`btn-details-${tierId}`);
  if (!drawer || !btn) return;

  const isHidden = drawer.classList.contains('hidden');
  const chevron = btn.querySelector('.chevron-icon');
  const btnText = btn.querySelector('.btn-text');

  if (isHidden) {
    drawer.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
    if (btnText) btnText.textContent = 'Hide Details';
    if (chevron) chevron.classList.add('rotate-180');
  } else {
    drawer.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
    if (btnText) btnText.textContent = 'View Details';
    if (chevron) chevron.classList.remove('rotate-180');
  }
}

const tierDetailsData = {
  toddler: {
    title: 'Toddler Discoverers',
    subtitle: 'Foundation of Senses, Motor Milestones & Loving Communication',
    badge: 'Ages 1.5 - 3 Years',
    ratio: '4:1 Caregiver Ratio',
    icon: 'fa-shapes',
    iconBg: 'bg-amber-400 text-slate-950',
    schedule: [
      { time: '08:30 AM', task: 'Warm Welcome & Soft Sensory Stations' },
      { time: '09:15 AM', task: 'Reggio Discovery Circle: Songs & Body Movement' },
      { time: '10:00 AM', task: 'Tactile Atelier: Water, Clay & Fine-Motor Blocks' },
      { time: '10:45 AM', task: 'Organic Chef Puree & Hydration Break' },
      { time: '11:15 AM', task: 'Turf Grass Outdoor Play & Sensory Walk' },
      { time: '12:15 PM', task: 'Lullaby Story Circle & Departure / Nap' }
    ],
    competencies: [
      { name: 'Sensory-Motor Integration', desc: 'Pincer grasp coordination, balancing pedestals, and textured exploration.' },
      { name: 'Early Expressive Language', desc: '500+ active words, gesture imitation, acoustic sound play, and baby sign.' },
      { name: 'Social Security & Independence', desc: 'Tear-free dropoff rituals, gentle self-soothing, and guided peer sharing.' },
      { name: 'Healthy Body Habits', desc: 'Self-feeding initiation, hand washing rituals, and sensory hygiene.' }
    ],
    inclusions: [
      '4:1 Certified Caregiver Ratio',
      'Organic Chef Purees & Snacks',
      'Hypoallergenic Bamboo Diapering',
      'HEPA Air Filtration in Pods',
      'Real-Time Photo Dashboard',
      'Custom Growth Dossier'
    ]
  },
  kindergarten: {
    title: 'Kindergarten Explorers',
    subtitle: 'Active Inquiry, Jolly Phonics, Singapore Math & STEAM Play',
    badge: 'Ages 3 - 5 Years',
    ratio: '8:1 Certified Early Educator Ratio',
    icon: 'fa-lightbulb',
    iconBg: 'bg-emerald-500 text-white',
    schedule: [
      { time: '08:15 AM', task: 'Provocation Table & Creative Loose Parts' },
      { time: '09:00 AM', task: 'Jolly Phonics Storytelling Circle' },
      { time: '09:45 AM', task: 'Singapore Math & Spatial Geometry' },
      { time: '10:30 AM', task: 'Fresh Organic Snack & Forest Canopy Free Play' },
      { time: '11:15 AM', task: 'STEAM Maker Atelier & Tangible Robotics' },
      { time: '01:00 PM', task: 'Botanical Greenhouse & Bilingual Songs' }
    ],
    competencies: [
      { name: 'Jolly Phonics & Dual Literacy', desc: '42 phonemic sounds, sight words, independent sentence formation, and French rhymes.' },
      { name: 'Early Singapore Math Logic', desc: 'Concrete-pictorial-abstract counting, ten-frame grids, and measurement balancing.' },
      { name: 'Tangible STEAM Exploration', desc: 'Screen-free robot paths, gear assembly, bridge load tests, and circuit discovery.' },
      { name: 'Bilingual Immersion', desc: 'Everyday dual-language singing, natural storytelling, and cultural appreciation.' }
    ],
    inclusions: [
      '8:1 Certified Educator Ratio',
      'Hot Farm-to-Table Lunch',
      'All STEAM Robotics Kits Included',
      'Botanical Greenhouse Access',
      'Term Progress Dossier on Dashboard',
      'Parent-Educator Symposiums'
    ]
  },
  primary: {
    title: 'Primary Innovators',
    subtitle: 'Project-Based Mastery, Computational Thinking & Socratic Debates',
    badge: 'Grades 1 - 5 • Ages 6 - 11',
    ratio: '12:1 Academic Mentor Ratio',
    icon: 'fa-graduation-cap',
    iconBg: 'bg-amber-400 text-slate-950',
    schedule: [
      { time: '08:00 AM', task: 'Advisory Morning Circle & Goal Forum' },
      { time: '08:45 AM', task: 'Cambridge English & Socratic Critical Debate' },
      { time: '09:45 AM', task: 'Robotics Lab, Python Logic & Computational Math' },
      { time: '11:00 AM', task: 'Turf Athletics, Team Sports & Swimming' },
      { time: '12:00 PM', task: 'Hot Organic Buffet & Peer Leadership Dining' },
      { time: '01:30 PM', task: 'Ecological Sustainability & Drama Guild' }
    ],
    competencies: [
      { name: 'Cambridge Curriculum Mastery', desc: 'Scientific inquiry methods, critical literary critique, and advanced problem-solving.' },
      { name: 'Computational & Python Logic', desc: 'Algorithmic sequencing, sensor robotics, automated motors, and debugging.' },
      { name: 'Public Oratory & Civic Ethics', desc: 'Inter-school debates, youth mock UN conferences, and environmental initiatives.' },
      { name: 'Global Stewardship', desc: 'Campus garden botany, renewable energy experiments, and community aid.' }
    ],
    inclusions: [
      '12:1 Master Mentor Ratio',
      'Complete Cambridge Textbook Suite',
      '1-on-1 Academic Counseling',
      'Inter-School Tournament Entry',
      'Digital Gradebook & Ledger',
      'Annual Innovation Expo Entry'
    ]
  }
};

function openTierModal(tierId) {
  switchTierModalTab(tierId);
  const modal = document.getElementById('tierDetailsModal');
  if (modal) modal.classList.remove('hidden');
}

function closeTierModal() {
  const modal = document.getElementById('tierDetailsModal');
  if (modal) modal.classList.add('hidden');
}

function switchTierModalTab(tierId) {
  const data = tierDetailsData[tierId];
  if (!data) return;
  ['toddler', 'kindergarten', 'primary'].forEach(id => {
    const tab = document.getElementById(`modalTab-${id}`);
    if (tab) {
      if (id === tierId) {
        tab.className = 'px-4 py-1.5 rounded-full text-xs font-black transition-all bg-amber-400 text-slate-950 shadow-sm';
      } else {
        tab.className = 'px-4 py-1.5 rounded-full text-xs font-black transition-all bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700';
      }
    }
  });
  const titleEl = document.getElementById('modalTierTitle');
  const subEl = document.getElementById('modalTierSubtitle');
  const badgeEl = document.getElementById('modalTierBadge');
  const ratioEl = document.getElementById('modalTierRatio');
  const iconEl = document.getElementById('modalTierIcon');
  const iconBox = document.getElementById('modalTierIconBox');

  if (titleEl) titleEl.textContent = data.title;
  if (subEl) subEl.textContent = data.subtitle;
  if (badgeEl) badgeEl.textContent = data.badge;
  if (ratioEl) ratioEl.textContent = data.ratio;
  if (iconEl) iconEl.className = `fa-solid ${data.icon}`;
  if (iconBox) iconBox.className = `w-12 h-12 rounded-2xl ${data.iconBg} flex items-center justify-center text-xl shrink-0 shadow-md`;
  const schedEl = document.getElementById('modalScheduleList');
  if (schedEl) {
    schedEl.innerHTML = data.schedule.map(item => `
      <div class="flex items-start gap-2 bg-white dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200/70 dark:border-slate-800">
        <span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-extrabold text-[10px] shrink-0">${item.time}</span>
        <span class="text-xs text-slate-600 dark:text-slate-300 font-medium leading-tight">${item.task}</span>
      </div>
    `).join('');
  }
  const compEl = document.getElementById('modalCompetenciesList');
  if (compEl) {
    compEl.innerHTML = data.competencies.map(item => `
      <div class="p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800">
        <span class="block font-black text-slate-900 dark:text-white text-xs">${item.name}</span>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">${item.desc}</p>
      </div>
    `).join('');
  }
  const incEl = document.getElementById('modalInclusionsList');
  if (incEl) {
    incEl.innerHTML = data.inclusions.map(item => `
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-check text-emerald-500 text-xs shrink-0"></i>
        <span>${item}</span>
      </div>
    `).join('');
  }
}
