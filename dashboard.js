const dashboardData = {
  parent: {
    name: "Sarah Jenkins",
    email: "sarah.jenkins@lumikids.edu",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    phone: "+1 (555) 382-LUMI"
  },
  children: {
    leo: {
      id: "leo",
      name: "Leo Jenkins",
      grade: "Grade 1 - Innovators",
      age: "6 Years",
      avatar: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=200&q=80",
      teacher: "Ms. Claire Simmons",
      classroom: "Sunflower Hall 102",
      studentId: "LK-2024-089",
      bloodGroup: "O+",
      allergies: "None (Peanut Safe)",
      attendance: {
        percentage: 96.5,
        totalDays: 85,
        present: 82,
        absent: 2,
        excused: 1,
        streak: 18,
        history: [
          { day: "Mon", date: "Nov 10", status: "present", note: "On time (8:15 AM)" },
          { day: "Tue", date: "Nov 11", status: "present", note: "On time (8:20 AM)" },
          { day: "Wed", date: "Nov 12", status: "present", note: "On time (8:10 AM)" },
          { day: "Thu", date: "Nov 13", status: "present", note: "On time (8:15 AM)" },
          { day: "Fri", date: "Nov 14", status: "present", note: "On time (8:25 AM)" },
          { day: "Mon", date: "Nov 17", status: "present", note: "Today" }
        ]
      },
      skills: [
        { name: "Early Literacy & Phonics", score: 95, grade: "A+", desc: "Reads independently with fantastic voice inflection" },
        { name: "STEAM & Math Reasoning", score: 92, grade: "A", desc: "Superb 2-digit addition and spatial building blocks" },
        { name: "Creative Arts & Expression", score: 88, grade: "B+", desc: "Very imaginative storytelling through watercolour" },
        { name: "Social-Emotional & Empathy", score: 98, grade: "A+", desc: "Classroom helper, shows great patience and teamwork" },
        { name: "Physical Agility & Sports", score: 94, grade: "A", desc: "High coordination in balance beam and soccer drills" }
      ],
      teacherNote: "Leo has had an exceptional term! His curiosity during our 'Young Botanists' module inspired the whole class to plant our windowsill herb garden. Keep fostering his love for books at home!",
      fees: {
        totalDue: 1450.00,
        status: "Pending",
        dueDate: "Nov 30, 2026",
        invoices: [
          { id: "INV-2026-081", title: "Term 3 Tuition & STEAM Kit", amount: 1450.00, status: "Unpaid", due: "Nov 30, 2026" },
          { id: "INV-2026-044", title: "Term 2 Tuition & Field Trip", amount: 1450.00, status: "Paid", due: "Aug 15, 2026" },
          { id: "INV-2026-012", title: "Term 1 School Uniform & Books", amount: 380.00, status: "Paid", due: "Jan 10, 2026" }
        ]
      },
      scheduleToday: [
        { time: "08:30 AM", title: "Morning Circle & Mindful Breathing", room: "Sunflower Hall" },
        { time: "09:30 AM", title: "Robotics & Pattern Logic", room: "STEAM Lab Alpha" },
        { time: "11:00 AM", title: "Outdoor Eco-Play & Garden Care", room: "Lumi Eco-Park" },
        { time: "12:30 PM", title: "Farm-to-Table Organic Lunch", room: "Sunny Cafeteria" },
        { time: "01:30 PM", title: "Story Circle & Guided Phonics", room: "Reading Teepee" }
      ],
      messages: [
        { sender: "Ms. Claire Simmons", time: "Yesterday, 3:45 PM", text: "Hello Mrs. Jenkins! Leo built an incredible magnetic maze in STEM lab today. He wanted me to tell you he loves science!", isTeacher: true },
        { sender: "You", time: "Yesterday, 4:10 PM", text: "That is wonderful to hear! Thank you for sharing Ms. Claire, he wouldn't stop talking about magnets during dinner.", isTeacher: false },
        { sender: "Ms. Claire Simmons", time: "Today, 9:00 AM", text: "Don't forget tomorrow is dress-up day for International Children's Week!", isTeacher: true }
      ]
    },
    mia: {
      id: "mia",
      name: "Mia Jenkins",
      grade: "Kindergarten - Little Explorers",
      age: "4 Years",
      avatar: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=200&q=80",
      teacher: "Mr. David Miller",
      classroom: "Rainbow Blossom Room 04",
      studentId: "LK-2025-042",
      bloodGroup: "A+",
      allergies: "Mild Dairy Sensitivity (Noted)",
      attendance: {
        percentage: 98.2,
        totalDays: 85,
        present: 84,
        absent: 1,
        excused: 0,
        streak: 22,
        history: [
          { day: "Mon", date: "Nov 10", status: "present", note: "On time (8:30 AM)" },
          { day: "Tue", date: "Nov 11", status: "present", note: "On time (8:25 AM)" },
          { day: "Wed", date: "Nov 12", status: "present", note: "On time (8:30 AM)" },
          { day: "Thu", date: "Nov 13", status: "present", note: "On time (8:20 AM)" },
          { day: "Fri", date: "Nov 14", status: "present", note: "On time (8:30 AM)" },
          { day: "Mon", date: "Nov 17", status: "present", note: "Today" }
        ]
      },
      skills: [
        { name: "Sensory Discovery & Motor Skills", score: 96, grade: "A+", desc: "Finger grip and scissor handling skills are outstanding" },
        { name: "Phonemic Awareness & Rhymes", score: 91, grade: "A", desc: "Recognizes all 26 letter sounds and sings alphabet rhymes" },
        { name: "Music, Rhythm & Dance", score: 98, grade: "A+", desc: "Loves the mini xylophone and keeping tempo in circle time" },
        { name: "Social Sharing & Kindness", score: 94, grade: "A", desc: "Very gentle with classmates and loves sharing puzzle pieces" },
        { name: "Outdoor Wonder & Curiosity", score: 95, grade: "A+", desc: "Fascinated by butterflies, leaves and sand table sculptures" }
      ],
      teacherNote: "Mia is a bright ray of sunshine! She helped welcome our new classmate this week and led the singing of the clean-up song with unmatched enthusiasm.",
      fees: {
        totalDue: 0.00,
        status: "Paid in Full",
        dueDate: "All settled",
        invoices: [
          { id: "INV-2026-092", title: "Term 3 Kindergarten Tuition", amount: 1250.00, status: "Paid", due: "Nov 01, 2026" },
          { id: "INV-2026-051", title: "Term 2 Kindergarten Tuition", amount: 1250.00, status: "Paid", due: "Aug 15, 2026" },
          { id: "INV-2026-020", title: "Art Supplies & Snack Program", amount: 220.00, status: "Paid", due: "Jan 12, 2026" }
        ]
      },
      scheduleToday: [
        { time: "08:45 AM", title: "Welcome & Sensory Sand & Water Discovery", room: "Rainbow Blossom Room" },
        { time: "09:45 AM", title: "Music, Movement & Rhyme Rhythms", room: "Acoustic Joy Studio" },
        { time: "11:15 AM", title: "Story Theater & Puppet Play", room: "Puppet Corner" },
        { time: "12:15 PM", title: "Organic Fruit & Warm Lunch", room: "Sunny Cafeteria" },
        { time: "01:15 PM", title: "Rest & Sweet Dreams Nap Time", room: "Quiet Cloud Haven" }
      ],
      messages: [
        { sender: "Mr. David Miller", time: "Friday, 2:30 PM", text: "Mia painted a delightful pastel rainbow today. It is currently hanging on our honor gallery board!", isTeacher: true },
        { sender: "You", time: "Friday, 3:00 PM", text: "Oh she told me all about her rainbow colors! Thank you Mr. David.", isTeacher: false }
      ]
    }
  },
  activeChildId: "leo",
  activeTab: "overview"
};
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("dashboardTabContent")) {
    renderDashboardContent();
  }
});
function selectChild(childId) {
  if (!dashboardData.children[childId]) return;
  dashboardData.activeChildId = childId;
  const child = dashboardData.children[childId];
  const attRate = document.getElementById('metricAttendanceRate');
  const attSub = document.getElementById('metricAttendanceSub');
  const progStanding = document.getElementById('metricProgressStanding');
  const progSub = document.getElementById('metricProgressSub');
  const calEvents = document.getElementById('metricCalendarEvents');
  const feeStatus = document.getElementById('metricFeeStatus');
  const feeSub = document.getElementById('metricFeeSub');

  if (childId === 'leo') {
    if (attRate) attRate.innerText = '96.5%';
    if (attSub) attSub.innerHTML = '<span>&uarr;</span> 82 of 85 Days Attended';
    if (progStanding) progStanding.innerText = 'Distinction';
    if (progSub) progSub.innerHTML = '<span>&uarr;</span> 5 Core Skills Mastered';
    if (calEvents) calEvents.innerText = '3 Events';
    if (feeStatus) feeStatus.innerText = '$1,450.00';
    if (feeSub) feeSub.innerHTML = '<span>&bull;</span> Due Nov 30 (Term 3)';
  } else {
    if (attRate) attRate.innerText = '98.2%';
    if (attSub) attSub.innerHTML = '<span>&uarr;</span> 84 of 85 Days Attended';
    if (progStanding) progStanding.innerText = 'Exemplary';
    if (progSub) progSub.innerHTML = '<span>&uarr;</span> Sensory &amp; Rhyme Leader';
    if (calEvents) calEvents.innerText = '4 Events';
    if (feeStatus) feeStatus.innerText = '$0.00 Due';
    if (feeSub) feeSub.innerHTML = '<span>&bull;</span> All Settled for Term';
  }
  const sideName = document.getElementById('sideChildName');
  const sideGrade = document.getElementById('sideChildGrade');
  const sideRoom = document.getElementById('sideChildRoom');
  const sideTeacher = document.getElementById('sideChildTeacher');
  const sideId = document.getElementById('sideChildId');
  const btnLeo = document.getElementById('sideBtn-leo');
  const btnMia = document.getElementById('sideBtn-mia');

  if (sideName) sideName.textContent = child.name;
  if (sideGrade) sideGrade.textContent = child.grade;
  if (sideRoom) sideRoom.textContent = child.classroom;
  if (sideTeacher) sideTeacher.textContent = child.teacher;
  if (sideId) sideId.textContent = child.studentId;

  if (btnLeo && btnMia) {
    if (childId === 'leo') {
      btnLeo.className = 'px-2.5 py-1 rounded-lg text-xs font-black bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs transition';
      btnMia.className = 'px-2.5 py-1 rounded-lg text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition';
    } else {
      btnMia.className = 'px-2.5 py-1 rounded-lg text-xs font-black bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs transition';
      btnLeo.className = 'px-2.5 py-1 rounded-lg text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition';
    }
  }
  const avatarBtn = document.getElementById('topAvatarBtn');
  if (avatarBtn) {
    avatarBtn.innerText = childId === 'leo' ? 'LJ' : 'MJ';
  }
  const absenceStudent = document.getElementById('absenceStudentName');
  if (absenceStudent) {
    absenceStudent.value = `${child.name} (${child.grade})`;
  }

  renderDashboardContent();
  showToast(`Switched profile to ${child.name}`, "success");
}
function switchView(tabKey) {
  if (typeof dashboardData !== 'undefined') {
    dashboardData.activeTab = tabKey;
  }
  document.querySelectorAll('.dash-sidebar-link').forEach(el => {
    el.classList.remove('active');
    el.classList.add('text-slate-600', 'dark:text-slate-400');
  });
  const activeSidebarEl = document.getElementById('nav-' + tabKey);
  if (activeSidebarEl) {
    activeSidebarEl.classList.add('active');
    activeSidebarEl.classList.remove('text-slate-600', 'dark:text-slate-400');
  }
  const metricCards = ['attendance', 'progress', 'calendar', 'fees'];
  metricCards.forEach(key => {
    const cardEl = document.getElementById('card-' + key);
    if (cardEl) {
      if (tabKey === key) {
        cardEl.classList.add('ring-2', 'ring-amber-400', 'bg-amber-500/10', 'dark:bg-amber-950/30', 'border-amber-400/80');
      } else {
        cardEl.classList.remove('ring-2', 'ring-amber-400', 'ring-emerald-400', 'bg-amber-500/10', 'dark:bg-amber-950/30', 'border-amber-400/80', 'bg-emerald-50/50', 'dark:bg-emerald-950/20', 'border-emerald-400/80');
      }
    }
  });
  renderDashboardContent();
}
window.switchView = switchView;
window.switchDashTab = switchView;
function renderDashboardContent() {
  const child = dashboardData.children[dashboardData.activeChildId];
  const container = document.getElementById("dashboardLeftMain") || document.getElementById("dashboardTabContent");
  if (!container) return;
  switch (dashboardData.activeTab) {
    case "overview":
      renderOverviewTab(child, container);
      break;
    case "attendance":
      renderAttendanceTab(child, container);
      break;
    case "progress":
      renderProgressTab(child, container);
      break;
    case "calendar":
      renderCalendarTab(child, container);
      break;
    case "fees":
      renderFeesTab(child, container);
      break;
    case "meals":
      renderMealsTab(child, container);
      break;
    case "messages":
      renderMessagesTab(child, container);
      break;
    default:
      renderOverviewTab(child, container);
  }
}
function renderOverviewTab(child, container) {
  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-sm">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-lg font-black font-heading text-slate-950 dark:text-white leading-tight">
            Monthly Attendance &amp; Learning Hours
          </h2>
          <p class="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">
            Classroom hours attended across Reggio inquiry, STEAM labs &amp; outdoor ateliers
          </p>
        </div>
        <button onclick="switchView('attendance')" class="text-xs font-black text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 hover:underline inline-flex items-center gap-1 cursor-pointer">
          <span>View Attendance Log</span>
          <span>&rarr;</span>
        </button>
      </div>
      <div class="relative pt-4 pb-2">
        <div class="flex items-stretch h-56 gap-4">
          <div class="w-8 flex flex-col justify-between text-right text-[11px] font-bold text-slate-400 select-none pb-7">
            <span>120</span>
            <span>90</span>
            <span>60</span>
            <span>30</span>
            <span>0</span>
          </div>
          <div class="flex-1 relative flex flex-col justify-between">
            <div class="absolute inset-x-0 top-0 border-b border-slate-100 dark:border-slate-800"></div>
            <div class="absolute inset-x-0 top-1/4 border-b border-slate-100 dark:border-slate-800"></div>
            <div class="absolute inset-x-0 top-2/4 border-b border-slate-100 dark:border-slate-800"></div>
            <div class="absolute inset-x-0 top-3/4 border-b border-slate-100 dark:border-slate-800"></div>
            <div class="absolute inset-x-0 bottom-7 border-b border-slate-200 dark:border-slate-700"></div>

            <div class="relative z-10 h-full flex items-end justify-between px-3 sm:px-6 pb-7">
              <div class="chart-bar-group flex flex-col items-center gap-2 group cursor-pointer" title="May: 84 Learning Hours">
                <div class="relative w-9 sm:w-12 h-36 bg-gradient-to-t from-amber-500 to-amber-400 hover:from-amber-400 hover:to-emerald-400 rounded-t-xl chart-bar shadow-sm">
                  <span class="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition shadow pointer-events-none whitespace-nowrap">84 hrs</span>
                </div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 absolute -bottom-6">May</span>
              </div>
              <div class="chart-bar-group flex flex-col items-center gap-2 group cursor-pointer" title="June: 96 Learning Hours">
                <div class="relative w-9 sm:w-12 h-44 bg-gradient-to-t from-amber-500 to-amber-400 hover:from-amber-400 hover:to-emerald-400 rounded-t-xl chart-bar shadow-sm">
                  <span class="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition shadow pointer-events-none whitespace-nowrap">96 hrs</span>
                </div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 absolute -bottom-6">Jun</span>
              </div>
              <div class="chart-bar-group flex flex-col items-center gap-2 group cursor-pointer" title="July: 88 Learning Hours">
                <div class="relative w-9 sm:w-12 h-40 bg-gradient-to-t from-amber-500 to-amber-400 hover:from-amber-400 hover:to-emerald-400 rounded-t-xl chart-bar shadow-sm">
                  <span class="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition shadow pointer-events-none whitespace-nowrap">88 hrs</span>
                </div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 absolute -bottom-6">Jul</span>
              </div>
              <div class="chart-bar-group flex flex-col items-center gap-2 group cursor-pointer" title="August: 104 Learning Hours">
                <div class="relative w-9 sm:w-12 h-48 bg-gradient-to-t from-amber-500 to-amber-400 hover:from-amber-400 hover:to-emerald-400 rounded-t-xl chart-bar shadow-sm">
                  <span class="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition shadow pointer-events-none whitespace-nowrap">104 hrs</span>
                </div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 absolute -bottom-6">Aug</span>
              </div>
              <div class="chart-bar-group flex flex-col items-center gap-2 group cursor-pointer" title="September: 110 Learning Hours">
                <div class="relative w-9 sm:w-12 h-50 bg-gradient-to-t from-amber-500 to-amber-400 hover:from-amber-400 hover:to-emerald-400 rounded-t-xl chart-bar shadow-sm">
                  <span class="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition shadow pointer-events-none whitespace-nowrap">110 hrs</span>
                </div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 absolute -bottom-6">Sep</span>
              </div>
              <div class="chart-bar-group flex flex-col items-center gap-2 group cursor-pointer" title="October: 116 Learning Hours">
                <div class="relative w-9 sm:w-12 h-52 bg-gradient-to-t from-amber-500 to-amber-400 hover:from-amber-400 hover:to-emerald-400 rounded-t-xl chart-bar shadow-sm">
                  <span class="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition shadow pointer-events-none whitespace-nowrap">116 hrs</span>
                </div>
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400 absolute -bottom-6">Oct</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h4 class="text-base font-black font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            Today's Learning Journey
          </h4>
          <span class="text-[10px] px-2.5 py-0.5 rounded-full font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200">
            Live
          </span>
        </div>
        <div class="space-y-3">
          ${child.scheduleToday.map(item => `
            <div class="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-amber-50/50 dark:hover:bg-slate-800 transition">
              <span class="text-[11px] font-extrabold text-amber-600 dark:text-amber-400 bg-white dark:bg-slate-900 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xs shrink-0">
                ${item.time}
              </span>
              <div class="min-w-0">
                <p class="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">${item.title}</p>
                <p class="text-[11px] text-slate-400 mt-0.5 truncate">${item.room}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Educator" class="w-full h-full object-cover">
            </div>
            <div>
              <h5 class="text-sm font-bold text-slate-900 dark:text-white">${child.teacher}</h5>
              <p class="text-[11px] text-slate-400">Homeroom Lead Educator</p>
            </div>
          </div>
          <blockquote class="text-xs text-slate-600 dark:text-slate-300 italic border-l-2 border-amber-400 pl-3 py-0.5 leading-relaxed">
            "${child.teacherNote}"
          </blockquote>
        </div>

        <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <span class="text-[11px] text-slate-400">Weekly evaluation</span>
          <button onclick="switchView('messages')" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
            Reply to Teacher &rarr;
          </button>
        </div>
      </div>
    </div>
  `;
}
function renderAttendanceTab(child, container) {
  const att = child.attendance;
  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <button onclick="switchView('overview')" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5 mb-2 group cursor-pointer">
            <span class="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Overview Graph
          </button>
          <h3 class="text-xl font-black font-heading text-slate-900 dark:text-white">Attendance Tracker &amp; Daily Records</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Academic Year 2026-2027 &bull; Student: ${child.name} (${child.grade})</p>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="openAbsenceModal()" class="px-5 py-2.5 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-400/20 transition flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            <span>Request Leave / Absence</span>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
          <p class="text-[11px] uppercase font-extrabold text-emerald-700 dark:text-emerald-300">Days Present</p>
          <p class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">${att.present}</p>
          <span class="text-[10px] text-emerald-800/70 dark:text-emerald-300/70">On-time rate 98%</span>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
          <p class="text-[11px] uppercase font-extrabold text-amber-700 dark:text-amber-300">Excused Leaves</p>
          <p class="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">${att.excused}</p>
          <span class="text-[10px] text-amber-800/70 dark:text-amber-300/70">Doctor / Travel</span>
        </div>
        <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
          <p class="text-[11px] uppercase font-extrabold text-amber-700 dark:text-amber-300">Unexcused</p>
          <p class="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">${att.absent}</p>
          <span class="text-[10px] text-amber-800/70 dark:text-amber-300/70">Pending note</span>
        </div>
        <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
          <p class="text-[11px] uppercase font-extrabold text-emerald-700 dark:text-emerald-300">Current Streak</p>
          <p class="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">${att.streak} Days</p>
          <span class="text-[10px] text-emerald-800/70 dark:text-emerald-300/70">Star Learner Badge</span>
        </div>
      </div>
      <h4 class="text-base font-bold font-heading text-slate-800 dark:text-slate-100 mb-3">Past School Days Log</h4>
      <div class="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-slate-800">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-100/80 dark:bg-slate-800/80 text-[11px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
            <tr>
              <th class="py-3 px-4">Day &amp; Date</th>
              <th class="py-3 px-4">Status</th>
              <th class="py-3 px-4">Check-in Time</th>
              <th class="py-3 px-4">Pick-up Authorized</th>
              <th class="py-3 px-4">Educator Sign-off</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            ${att.history.map(row => `
              <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                <td class="py-3 px-4 font-bold text-slate-800 dark:text-white">${row.day}, ${row.date}</td>
                <td class="py-3 px-4">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Present
                  </span>
                </td>
                <td class="py-3 px-4 text-slate-600 dark:text-slate-400">${row.note}</td>
                <td class="py-3 px-4 text-slate-600 dark:text-slate-400">Sarah Jenkins (Mother)</td>
                <td class="py-3 px-4 font-medium text-slate-700 dark:text-slate-300">${child.teacher}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
function renderProgressTab(child, container) {
  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <button onclick="switchView('overview')" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5 mb-2 group cursor-pointer">
            <span class="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Overview Graph
          </button>
          <h3 class="text-xl font-black font-heading text-slate-900 dark:text-white">Academic Progress &amp; Developmental Milestones</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Continuous Assessment &bull; Reggio Emilia &amp; STEAM Framework</p>
        </div>
        <button onclick="printOrDownloadReport()" class="px-5 py-2.5 rounded-xl text-xs font-black bg-emerald-500 hover:bg-emerald-400 text-white shadow-md shadow-emerald-500/20 transition flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
          <span>Print Official Report Card</span>
        </button>
      </div>
      <div class="space-y-4 mb-6">
        ${child.skills.map(skill => `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
            <div class="flex items-center justify-between mb-1.5">
              <div>
                <span class="text-sm font-bold text-slate-800 dark:text-white">${skill.name}</span>
                <p class="text-[11px] text-slate-500 dark:text-slate-400">${skill.desc}</p>
              </div>
              <div class="text-right">
                <span class="text-base font-extrabold text-amber-500">${skill.grade}</span>
                <span class="text-xs text-slate-400 ml-1">(${skill.score}%)</span>
              </div>
            </div>
            <div class="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-amber-400 to-emerald-400 h-full rounded-full transition-all duration-700" style="width: ${skill.score}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40">
        <h4 class="text-sm font-bold text-amber-900 dark:text-amber-200 mb-1.5 font-heading">Lead Educator's Developmental Summary</h4>
        <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
          "${child.teacherNote} Demonstrated marked growth in emotional resilience when tackling challenging puzzle patterns. Continues to demonstrate kindness towards peers in collaborative project groups."
        </p>
        <div class="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-t border-amber-200/60 dark:border-amber-800/40 pt-2.5">
          <span>Signed electronically: <strong>${child.teacher}</strong></span>
          <span>Verified by: <strong>Dr. Evelyn Vance (Head of School)</strong></span>
        </div>
      </div>
    </div>
  `;
}
function renderCalendarTab(child, container) {
  const events = [
    { date: "Nov 21, 2026", time: "09:30 AM", title: "Autumn STEM Fair & Young Maker Expo", tag: "Academy Wide", color: "amber" },
    { date: "Nov 27, 2026", time: "02:00 PM", title: "Parent-Teacher Developmental Dialogue", tag: "Conferences", color: "emerald" },
    { date: "Dec 05, 2026", time: "10:00 AM", title: "Winter Solstice Musical & Play", tag: "Celebration", color: "amber" },
    { date: "Dec 18, 2026", time: "All Day", title: "Winter Break Commences", tag: "Holiday", color: "emerald" }
  ];

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <button onclick="switchView('overview')" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5 mb-2 group cursor-pointer">
            <span class="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Overview Graph
          </button>
          <h3 class="text-xl font-black font-heading text-slate-900 dark:text-white">School Calendar &amp; Upcoming Events</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Upcoming festivals, academic milestones, and parent meetings</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${events.map(ev => `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex items-start gap-4 hover:border-amber-400/50 transition">
            <div class="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex flex-col items-center justify-center font-bold shrink-0 border border-amber-300/40">
              <span class="text-[10px] uppercase">${ev.date.split(" ")[0]}</span>
              <span class="text-base font-black leading-tight">${ev.date.split(" ")[1].replace(",", "")}</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300">
                  ${ev.tag}
                </span>
                <span class="text-[10px] text-slate-400">${ev.time}</span>
              </div>
              <h5 class="text-sm font-bold text-slate-800 dark:text-white truncate">${ev.title}</h5>
              <button onclick="addToGoogleCalendarMock('${ev.title}')" class="text-xs text-amber-500 font-bold hover:underline mt-1.5 inline-flex items-center gap-1">
                + Add to My Calendar
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
function renderFeesTab(child, container) {
  const isPaid = child.fees.totalDue === 0;

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <button onclick="switchView('overview')" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5 mb-2 group cursor-pointer">
            <span class="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Overview Graph
          </button>
          <h3 class="text-xl font-black font-heading text-slate-900 dark:text-white">Tuition &amp; Fee Portal</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Secure Online Payments &bull; Powered by LumiPay Student Ledger</p>
        </div>
        ${!isPaid ? `
          <button onclick="openPaymentModal()" class="px-5 py-2.5 rounded-xl text-xs font-black bg-emerald-500 hover:bg-emerald-400 text-white shadow-md shadow-emerald-500/20 transition flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            <span>Pay Outstanding Fee ($${child.fees.totalDue.toFixed(2)})</span>
          </button>
        ` : `
          <div class="px-4 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center gap-2">
            <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>Tuition Account All Paid</span>
          </div>
        `}
      </div>
      <div class="space-y-3">
        ${child.fees.invoices.map(inv => `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-slate-400">${inv.id}</span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  inv.status === 'Paid'
                    ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                    : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 animate-pulse'
                }">
                  ${inv.status}
                </span>
              </div>
              <h5 class="text-sm font-bold text-slate-800 dark:text-white mt-1">${inv.title}</h5>
              <p class="text-[11px] text-slate-500 dark:text-slate-400">Due date: ${inv.due}</p>
            </div>

            <div class="flex items-center gap-4">
              <span class="text-lg font-black text-slate-800 dark:text-white">$${inv.amount.toFixed(2)}</span>
              ${inv.status === 'Paid' ? `
                <button onclick="downloadReceiptMock('${inv.id}')" class="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-400 inline-flex items-center gap-1.5">
                  <span>Receipt PDF</span>
                  <svg class="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </button>
              ` : `
                <button onclick="openPaymentModal()" class="px-4 py-1.5 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-slate-950 transition">
                  Pay Now
                </button>
              `}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
function renderMealsTab(child, container) {
  const weeklyMenu = [
    { day: "Monday", date: "Nov 17", snack: "Organic Apple Slices & Whole Wheat Crisps", lunch: "Baked Vegetable Pasta & Parmesan Herb Bread", fruit: "Fresh Cantaloupe Cubes", allergens: "Nut-Free • Dairy (Optional)" },
    { day: "Tuesday", date: "Nov 18", snack: "Carrot & Cucumber Sticks with Creamy Hummus", lunch: "Farm-Fresh Chicken & Rice Pot with Steamed Broccoli", fruit: "Seasonal Sweet Blueberries", allergens: "Nut-Free • Gluten-Free Option" },
    { day: "Wednesday", date: "Nov 19", snack: "Warm Oatmeal Banana Muffin", lunch: "Rainbow Veggie Quesadillas with Mild Salsa", fruit: "Orange Smiles & Strawberries", allergens: "Nut-Free • Vegetarian" },
    { day: "Thursday", date: "Nov 20", snack: "Sunflower Seed Butter & Rice Crisps", lunch: "Mild Coconut Lentil Curry & Jasmine Rice", fruit: "Ripe Sweet Bananas", allergens: "100% Vegan • Nut-Free" },
    { day: "Friday", date: "Nov 21", snack: "Greek Yogurt & Wild Honey Swirl", lunch: "Handmade Pita Pocket with Falafel & Crispy Slaw", fruit: "Fresh Red Watermelon", allergens: "Nut-Free • Dairy" }
  ];

  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <button onclick="switchView('overview')" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5 mb-2 group cursor-pointer">
            <span class="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Overview Graph
          </button>
          <h3 class="text-xl font-black font-heading text-slate-900 dark:text-white">Daily Farm-to-Table Nutrition Menu</h3>
          <p class="text-xs text-slate-400 mt-0.5">Organic, nut-free, dietitian-approved weekly meals for ${child.name}</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-300/40">
            100% Nut-Free Eco Kitchen
          </span>
        </div>
      </div>

      <div class="space-y-3">
        ${weeklyMenu.map(item => `
          <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:border-amber-400/50 transition">
            <div class="flex items-start gap-3.5">
              <div class="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex flex-col items-center justify-center font-bold shrink-0">
                <span class="text-[10px] uppercase">${item.day.slice(0, 3)}</span>
                <span class="text-sm font-black leading-tight">${item.date.split(" ")[1]}</span>
              </div>
              <div>
                <span class="text-sm font-black text-slate-900 dark:text-white">${item.day} Lunch: ${item.lunch}</span>
                <div class="flex flex-wrap items-center gap-x-4 gap-y-0.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  <span><strong>Morning:</strong> ${item.snack}</span>
                  <span><strong>Afternoon:</strong> ${item.fruit}</span>
                </div>
              </div>
            </div>
            <div class="shrink-0 text-right">
              <span class="inline-block px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                ${item.allergens}
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
function renderMessagesTab(child, container) {
  container.innerHTML = `
    <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div>
          <button onclick="switchView('overview')" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5 mb-2 group cursor-pointer">
            <span class="transition-transform group-hover:-translate-x-1">&larr;</span> Back to Overview Graph
          </button>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Educator" class="w-full h-full object-cover">
            </div>
            <div>
              <h4 class="text-base font-bold text-slate-800 dark:text-white">${child.teacher}</h4>
              <p class="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Active in Room 102
              </p>
            </div>
          </div>
        </div>
        <span class="text-xs text-slate-400">Direct Parent-Teacher Channel</span>
      </div>
      <div id="chatMessagesList" class="space-y-4 max-h-[350px] overflow-y-auto pr-2 mb-6">
        ${child.messages.map(msg => `
          <div class="flex flex-col ${msg.isTeacher ? 'items-start' : 'items-end'}">
            <div class="max-w-[80%] p-3.5 rounded-2xl ${
              msg.isTeacher
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none border border-slate-200 dark:border-slate-700'
                : 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-medium rounded-tr-none shadow-md'
            }">
              <p class="text-[10px] font-bold mb-1 opacity-75">${msg.sender}</p>
              <p class="text-xs leading-relaxed">${msg.text}</p>
            </div>
            <span class="text-[10px] text-slate-400 mt-1 px-1">${msg.time}</span>
          </div>
        `).join('')}
      </div>
      <div class="flex gap-2">
        <input
          id="teacherMsgInput"
          type="text"
          placeholder="Type a message to ${child.teacher}..."
          class="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:border-amber-400 dark:text-white"
          onkeypress="if(event.key === 'Enter') sendParentMessage()"
        >
        <button onclick="sendParentMessage()" class="px-5 py-2.5 rounded-xl text-xs font-black bg-amber-400 hover:bg-amber-300 text-slate-950 transition flex items-center gap-2">
          <span>Send</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
        </button>
      </div>
    </div>
  `;
}
function sendParentMessage() {
  const input = document.getElementById("teacherMsgInput");
  if (!input || !input.value.trim()) return;

  const child = dashboardData.children[dashboardData.activeChildId];
  const userText = input.value.trim();
  input.value = "";

  child.messages.push({
    sender: "You",
    time: "Just now",
    text: userText,
    isTeacher: false
  });

  renderDashboardContent();
  setTimeout(() => {
    const replies = [
      `Thank you for letting me know, Mrs. Jenkins! I'll make sure ${child.name} is well prepared.`,
      `Wonderful! ${child.name} is doing fantastic today in class. Have a lovely evening!`,
      `Received! I have noted this in ${child.name}'s daily journal. Warm regards.`
    ];
    const replyText = replies[Math.floor(Math.random() * replies.length)];

    child.messages.push({
      sender: child.teacher,
      time: "Just now",
      text: replyText,
      isTeacher: true
    });
    renderDashboardContent();
    showToast(`New message from ${child.teacher}!`, "info");
  }, 1200);
}
function openPaymentModal() {
  const modal = document.getElementById("paymentModal");
  if (modal) modal.classList.remove("hidden");
}

function closePaymentModal() {
  const modal = document.getElementById("paymentModal");
  if (modal) modal.classList.add("hidden");
}

function processPaymentSimulation() {
  const child = dashboardData.children[dashboardData.activeChildId];
  child.fees.invoices.forEach(inv => {
    inv.status = "Paid";
  });
  child.fees.totalDue = 0.00;
  child.fees.status = "Paid in Full";

  closePaymentModal();
  renderDashboardContent();

  showToast(`Payment of $1,450.00 successful! Receipt #REC-9821 generated.`, "success");
}
function openAbsenceModal() {
  const modal = document.getElementById("absenceModal");
  if (modal) modal.classList.remove("hidden");
}

function closeAbsenceModal() {
  const modal = document.getElementById("absenceModal");
  if (modal) modal.classList.add("hidden");
}

function submitAbsenceRequest(e) {
  if (e) e.preventDefault();
  closeAbsenceModal();
  showToast("Leave request submitted to administration & homeroom teacher.", "success");
}
function printOrDownloadReport() {
  const child = dashboardData.children[dashboardData.activeChildId];
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>LumiKids Academy - Official Report Card (${child.name})</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #1E293B; }
          .header { text-align: center; border-bottom: 3px solid #FFB547; padding-bottom: 20px; margin-bottom: 30px; }
          .logo { font-size: 28px; font-weight: bold; color: #FF9E1B; }
          .logo span { color: #4CBF9F; }
          .tagline { font-size: 13px; color: #64748B; margin-top: 4px; }
          .student-info { display: flex; justify-content: space-between; background: #F8FAFC; padding: 15px; border-radius: 10px; margin-bottom: 25px; }
          .table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          .table th, .table td { border: 1px solid #E2E8F0; padding: 10px 14px; text-align: left; }
          .table th { background: #FFB547; color: #1E293B; }
          .signature { display: flex; justify-content: space-between; margin-top: 50px; padding-top: 20px; border-top: 1px dashed #CBD5E1; }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="logo-light.png" alt="LumiKids Academy" style="height: 60px; display: block; margin: 0 auto 10px auto;">
          <div class="logo">Lumi<span style="color:#4CBF9F;">Kids</span> Academy</div>
          <div class="tagline">"Little Minds, Big Dreams!" • Official Academic Transcript</div>
        </div>
        <div class="student-info">
          <div>
            <strong>Student:</strong> ${child.name}<br>
            <strong>Class:</strong> ${child.grade}<br>
            <strong>ID:</strong> ${child.studentId}
          </div>
          <div>
            <strong>Lead Teacher:</strong> ${child.teacher}<br>
            <strong>Attendance:</strong> ${child.attendance.percentage}%<br>
            <strong>Term:</strong> Academic Year 2026-2027
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Curricular Domain</th>
              <th>Assessment</th>
              <th>Score</th>
              <th>Educator Observations</th>
            </tr>
          </thead>
          <tbody>
            ${child.skills.map(s => `
              <tr>
                <td><strong>${s.name}</strong></td>
                <td><span style="font-weight:bold;color:#E6961E;">${s.grade}</span></td>
                <td>${s.score}%</td>
                <td>${s.desc}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div style="background:#FFF9EB; padding: 15px; border-radius: 8px; border-left: 4px solid #FFB547; margin-bottom: 30px;">
          <strong>Homeroom Educator Note:</strong><br>
          <em>"${child.teacherNote}"</em>
        </div>
        <div class="signature">
          <div>____________________________<br><strong>${child.teacher}</strong><br>Lead Educator</div>
          <div>____________________________<br><strong>Dr. Evelyn Vance</strong><br>Head of Academy</div>
          <div>____________________________<br><strong>School Seal & Date</strong><br>Nov 16, 2026</div>
        </div>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    printWindow.print();
  }, 400);
}
function downloadReceiptMock(invoiceId) {
  showToast(`Receipt for ${invoiceId} generated & sent to sarah.jenkins@lumikids.edu`, "success");
}

function addToGoogleCalendarMock(title) {
  showToast(`Added "${title}" to your calendar!`, "success");
}

function openBusTrackerModal() {
  showToast("Bus #14 is 4 mins away from Sunflower Station (Driver: Mr. Thomas)", "info");
}
function toggleProfileDropdown(event) {
  if (event) {
    event.stopPropagation();
  }
  const menu = document.getElementById("profileDropdownMenu");
  const chevron = document.getElementById("profileChevron");
  const btn = document.getElementById("topProfileBtn");
  if (!menu) return;

  const isHidden = menu.classList.contains("hidden");
  if (isHidden) {
    menu.classList.remove("hidden");
    if (chevron) chevron.classList.add("rotate-180");
    if (btn) btn.setAttribute("aria-expanded", "true");
  } else {
    menu.classList.add("hidden");
    if (chevron) chevron.classList.remove("rotate-180");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }
}
document.addEventListener("click", function(event) {
  const wrapper = document.getElementById("profileDropdownWrapper");
  const menu = document.getElementById("profileDropdownMenu");
  const chevron = document.getElementById("profileChevron");
  const btn = document.getElementById("topProfileBtn");
  if (wrapper && menu && !wrapper.contains(event.target)) {
    menu.classList.add("hidden");
    if (chevron) chevron.classList.remove("rotate-180");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }
});
