(function(){
  const cfg = window.SITE_CONFIG || {};
  document.querySelectorAll("[data-studio]").forEach(el => el.textContent = cfg.studioName || "ANBAO Studio");
  document.querySelectorAll("[data-email]").forEach(el => {
    el.textContent = cfg.supportEmail || "YOUR_EMAIL@gmail.com";
    if (el.tagName === "A") el.href = "mailto:" + (cfg.supportEmail || "YOUR_EMAIL@gmail.com");
  });
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = year);

  const gamesRoot = document.querySelector("#games");
  if (gamesRoot && Array.isArray(cfg.games)) {
    gamesRoot.innerHTML = cfg.games.map(game => `
      <article class="card game-card">
        <img class="game-icon" src="${game.icon}" alt="${game.title} icon">
        <div>
          <h3>${game.title}</h3>
          <div class="muted">${game.platform || ""}</div>
          <p class="muted">${game.description || ""}</p>
          <a class="btn secondary" href="games/${game.slug}.html">View game</a>
        </div>
      </article>
    `).join("");
  }
})();