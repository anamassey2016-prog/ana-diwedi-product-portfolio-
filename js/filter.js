/* ==========================================================================
   Ana Diwedi Portfolio - Project & Skills Filter Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Project Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update Active Tab
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-categories') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Skills Tabs Switcher
  const skillTabBtns = document.querySelectorAll('.skills-tab-btn');
  const skillGrids = document.querySelectorAll('.skills-category-group');

  skillTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      skillTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCategory = btn.getAttribute('data-skill-target');

      skillGrids.forEach(grid => {
        if (targetCategory === 'all' || grid.getAttribute('data-category') === targetCategory) {
          grid.style.display = 'grid';
        } else {
          grid.style.display = 'none';
        }
      });
    });
  });
});
