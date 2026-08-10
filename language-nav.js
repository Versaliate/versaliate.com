(() => {
  const select = document.getElementById("language-select");
  if (!select) return;

  select.addEventListener("change", () => {
    const destination = select.value;
    if (!destination.startsWith("/")) return;
    try {
      localStorage.setItem("versaliate-language", select.options[select.selectedIndex]?.textContent ?? "");
    } catch {
      // Language navigation works even when browser storage is unavailable.
    }
    window.location.assign(destination);
  });
})();
