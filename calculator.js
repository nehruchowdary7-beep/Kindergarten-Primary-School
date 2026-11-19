document.addEventListener("DOMContentLoaded", () => {
  initAdmissionsCalculator();
});

function initAdmissionsCalculator() {
  const tierSelect = document.getElementById('calcProgramTier');
  const busCheck = document.getElementById('calcBusService');
  const mealCheck = document.getElementById('calcOrganicMeal');
  const extendedCheck = document.getElementById('calcExtendedCare');

  const updateCost = () => {
    if (!tierSelect) return;
    let baseTuition = parseInt(tierSelect.value) || 1250;
    let busFee = busCheck && busCheck.checked ? 180 : 0;
    let mealFee = mealCheck && mealCheck.checked ? 140 : 0;
    let extendedFee = extendedCheck && extendedCheck.checked ? 160 : 0;

    let totalTerm = baseTuition + busFee + mealFee + extendedFee;
    let annualTotal = totalTerm * 3;

    const termTotalEl = document.getElementById('calcTermTotal');
    const annualTotalEl = document.getElementById('calcAnnualTotal');

    if (termTotalEl) termTotalEl.textContent = `$${totalTerm.toLocaleString()}`;
    if (annualTotalEl) annualTotalEl.textContent = `$${annualTotal.toLocaleString()}`;
  };

  [tierSelect, busCheck, mealCheck, extendedCheck].forEach(el => {
    if (el) el.addEventListener('change', updateCost);
  });

  updateCost();
}

function handleAdmissionsInquiry(e) {
  e.preventDefault();
  e.target.reset();
}
