(() => {
  const search = document.getElementById("codex-search");
  const categoryBar = document.getElementById("codex-categories");
  const count = document.getElementById("codex-count");
  const cards = [...document.querySelectorAll(".codex-card")];
  if (!search || !categoryBar || !count || !cards.length) return;

  let activeCategory = "all";
  const normalise = (value) => value.toLocaleLowerCase(document.documentElement.lang).normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  function applyFilters() {
    const query = normalise(search.value.trim());
    let visible = 0;
    cards.forEach((card) => {
      const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
      const matchesSearch = !query || normalise(card.dataset.search ?? card.textContent).includes(query);
      card.hidden = !(matchesCategory && matchesSearch);
      if (!card.hidden) visible += 1;
    });

    count.textContent = visible === 0
      ? count.dataset.none
      : visible === 1
        ? count.dataset.one
        : count.dataset.many.replace("{count}", visible);
  }

  categoryBar.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    categoryBar.querySelectorAll("button").forEach((candidate) => candidate.setAttribute("aria-pressed", String(candidate === button)));
    applyFilters();
  });

  search.addEventListener("input", applyFilters);
})();
