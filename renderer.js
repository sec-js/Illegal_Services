let categories = [];

const listEl = document.querySelector('#linkList');
const searchEl = document.querySelector('#searchInput');
const chipsEl = document.querySelector('#categoryChips');

function renderCategories(filter = '') {
  const normalized = filter.trim().toLowerCase();

  const visibleCategories = categories
    .map((category) => ({
      ...category,
      links: category.links.filter((link) => {
        const haystack = `${link.label} ${link.url}`.toLowerCase();
        return haystack.includes(normalized);
      })
    }))
    .filter((category) => category.links.length > 0);

  const activeCategory = document.querySelector('[data-chip].active')?.dataset.chip || 'all';

  listEl.innerHTML = '';

  for (const category of visibleCategories) {
    if (activeCategory !== 'all' && category.name.toLowerCase() !== activeCategory.toLowerCase()) {
      continue;
    }

    const card = document.createElement('article');
    card.className = 'panel';

    const heading = document.createElement('h2');
    heading.textContent = category.name;
    card.appendChild(heading);

    const linkList = document.createElement('ul');
    linkList.className = 'link-list';

    for (const link of category.links) {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'link-button';
      button.textContent = link.label;
      button.title = link.url;
      button.addEventListener('click', () => window.app.openExternal(link.url));
      item.appendChild(button);
      linkList.appendChild(item);
    }

    card.appendChild(linkList);
    listEl.appendChild(card);
  }

  if (!listEl.childElementCount) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.textContent = 'No matching links found. Try a different search term.';
    listEl.appendChild(emptyState);
  }
}

function buildChips() {
  const allChip = document.createElement('button');
  allChip.type = 'button';
  allChip.dataset.chip = 'all';
  allChip.className = 'chip active';
  allChip.textContent = 'All';
  allChip.addEventListener('click', () => {
    document.querySelectorAll('[data-chip]').forEach((chip) => chip.classList.toggle('active', chip === allChip));
    renderCategories(searchEl.value);
  });
  chipsEl.appendChild(allChip);

  for (const category of categories) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.dataset.chip = category.name;
    chip.className = 'chip';
    chip.textContent = category.name;
    chip.addEventListener('click', () => {
      document.querySelectorAll('[data-chip]').forEach((item) => item.classList.toggle('active', item === chip));
      renderCategories(searchEl.value);
    });
    chipsEl.appendChild(chip);
  }
}

searchEl.addEventListener('input', (event) => {
  renderCategories(event.target.value);
});

window.app.getLinks().then((data) => {
  categories = data;
  buildChips();
  renderCategories();
});
