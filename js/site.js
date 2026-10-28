/* Navigation, homepage, publications, and datasets behaviour. Light theme only. */

(function () {
  const root = document.documentElement;
  root.removeAttribute("data-theme");
  try { localStorage.removeItem("theme"); } catch (e) { /* ignore */ }

  const menuBtn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menu.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const toTop = document.getElementById("to-top");
  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const bioBtn = document.getElementById("bio-toggle");
  const bioPanel = document.getElementById("bio-panel");
  if (bioBtn && bioPanel) {
    bioBtn.addEventListener("click", () => {
      const open = bioPanel.classList.toggle("is-open");
      bioBtn.setAttribute("aria-expanded", String(open));
      if (open) bioPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  const stack = document.querySelector(".portrait-stack");
  if (stack) {
    const slides = Array.from(stack.querySelectorAll(".portrait-image"));
    if (slides.length > 1) {
      let i = 0;
      setInterval(() => {
        slides[i].classList.remove("is-active");
        i = (i + 1) % slides.length;
        slides[i].classList.add("is-active");
      }, 5200);
    }
  }

  function highlightAuthors(authors) {
    return authors.replace(/Haseeb Javed/g, '<span class="me">Haseeb Javed</span>');
  }

  function actionButtons(links, extra) {
    const parts = [];
    if (links && links.paper) parts.push(`<a class="btn btn-primary" href="${links.paper}" rel="noopener">Paper</a>`);
    if (links && links.code) parts.push(`<a class="btn" href="${links.code}" rel="noopener">Code</a>`);
    if (links && links.dataset) parts.push(`<a class="btn" href="${links.dataset}" rel="noopener">Dataset</a>`);
    if (extra) parts.push(extra);
    return parts.join("");
  }

  function badgeClass(type) {
    if (type === "journal") return "pub-badge pub-badge--journal";
    if (type === "manuscript") return "pub-badge pub-badge--manuscript";
    return "pub-badge pub-badge--conference";
  }

  function metricRow(p) {
    const stats = p.metrics
      ? `<span class="metric-row__stats">${p.metrics}</span>`
      : "";
    return `<div class="metric-row">
      <span class="${badgeClass(p.type)}">${p.badge}</span>
      ${stats}
      <span class="pub-year">${p.year}</span>
    </div>`;
  }

  /* Homepage news */
  const newsList = document.getElementById("news-list");
  const newsTabs = document.getElementById("news-tabs");
  if (newsList && window.SITE) {
    const years = [...new Set(window.SITE.news.map((n) => n.year))];
    const latest = years[0];
    if (newsTabs) {
      newsTabs.innerHTML = years.map((y, idx) =>
        `<button type="button" data-year="${y}" class="${idx === 0 ? "is-active" : ""}" aria-pressed="${idx === 0}">${y}</button>`
      ).join("");
    }
    newsList.innerHTML = window.SITE.news.map((n) =>
      `<li class="news-flow__item${n.highlight ? " news-flow__item--highlight" : ""}" data-year="${n.year}">
         <span class="news-flow__date">${n.date}</span>
         <span class="news-flow__text">${n.html}</span>
       </li>`
    ).join("");
    function filterNews(year) {
      newsList.querySelectorAll(".news-flow__item").forEach((el) => {
        el.classList.toggle("is-hidden", el.dataset.year !== year);
      });
    }
    filterNews(latest);
    if (newsTabs) {
      newsTabs.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        newsTabs.querySelectorAll("button").forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        filterNews(btn.dataset.year);
      });
    }
  }

  /* Homepage highlights */
  const highlightGrid = document.getElementById("highlight-grid");
  if (highlightGrid && window.SITE) {
    const featured = window.SITE.pubs
      .filter((p) => p.featured)
      .sort((a, b) => a.featuredOrder - b.featuredOrder);
    highlightGrid.innerHTML = featured.map((p) => `
      <article class="highlight-card">
        <div class="highlight-card__media"><img src="${p.img}" alt="${p.alt || p.short}" loading="lazy"></div>
        <div class="highlight-card__body">
          ${metricRow(p)}
          <h3 class="highlight-card__title">${p.short || p.title}</h3>
          <p class="highlight-card__venue">${p.venue}</p>
          <div class="highlight-card__links">${actionButtons(p.links)}</div>
        </div>
      </article>`).join("");
  }

  /* Publications page */
  const pubRoot = document.getElementById("pub-root");
  if (pubRoot && window.SITE) {
    const pubs = window.SITE.pubs;
    const journals = pubs.filter((p) => p.type === "journal").length;
    const conferences = pubs.filter((p) => p.type === "conference").length;
    const patents = pubs.filter((p) => p.type === "patent").length;
    const chapters = pubs.filter((p) => p.type === "chapter").length;

    const stats = [];
    stats.push(`<div class="pub-stat"><span class="pub-stat__num">${journals}</span><span class="pub-stat__label">Journal Articles</span></div>`);
    stats.push(`<div class="pub-stat"><span class="pub-stat__num">${conferences}</span><span class="pub-stat__label">Conference Papers</span></div>`);
    document.getElementById("pub-stats").innerHTML = stats.join("");

    const typeFilters = ["all", "conference", "journal"];
    if (patents) typeFilters.push("patent");
    if (chapters) typeFilters.push("chapter");
    const typeLabels = { all: "All", conference: "Conferences", journal: "Journals", patent: "Patents", chapter: "Chapters" };
    document.getElementById("type-filters").innerHTML = typeFilters.map((t, i) =>
      `<button type="button" class="filter-chip${i === 0 ? " is-active" : ""}" data-type="${t}">${typeLabels[t]}</button>`
    ).join("");

    const years = [...new Set(pubs.map((p) => String(p.year)))].sort((a, b) => b - a);
    document.getElementById("year-filters").innerHTML =
      `<button type="button" class="filter-chip is-active" data-year="all">All Years</button>` +
      years.map((y) => `<button type="button" class="filter-chip" data-year="${y}">${y}</button>`).join("");

    const groups = document.getElementById("pub-groups");
    groups.innerHTML = years.map((y) => {
      const items = pubs.filter((p) => String(p.year) === y);
      return `<section class="pub-year-group" data-year="${y}">
        <h2 class="pub-year-heading">${y}</h2>
        <div class="pub-list">
          ${items.map((p, idx) => `
            <article class="pub-card" data-type="${p.type}" data-year="${p.year}" data-search="${(p.title + " " + p.authors + " " + p.venue + " " + p.badge + " " + (p.metrics || "")).toLowerCase()}">
              ${metricRow(p)}
              <h3 class="pub-card__title">${p.title}</h3>
              <p class="pub-card__authors">${highlightAuthors(p.authors)}</p>
              <p class="pub-card__venue">${p.venue}</p>
              <div class="pub-card__actions">
                ${actionButtons(p.links, (p.bibtex ? `<button type="button" class="btn bib-btn" data-key="${y}-${idx}">Copy BibTeX</button>` : "") + (p.abstract ? `<button type="button" class="btn abs-btn" data-key="${y}-${idx}">Abstract</button>` : ""))}
              </div>
              ${p.abstract ? `<div class="pub-card__abstract" id="abs-${y}-${idx}" hidden><p>${p.abstract}</p></div>` : ""}
              ${p.bibtex ? `<pre class="pub-card__bibtex" id="bib-${y}-${idx}" hidden>${p.bibtex.replace(/</g, "&lt;")}</pre>` : ""}
            </article>`).join("")}
        </div>
      </section>`;
    }).join("");

    let type = "all";
    let year = "all";
    let q = "";
    const empty = document.getElementById("pub-empty");

    function apply() {
      let visible = 0;
      groups.querySelectorAll(".pub-card").forEach((card) => {
        const typeOk = type === "all" || card.dataset.type === type;
        const yearOk = year === "all" || card.dataset.year === year;
        const qOk = !q || card.dataset.search.includes(q);
        const show = typeOk && yearOk && qOk;
        card.classList.toggle("is-hidden", !show);
        if (show) visible += 1;
      });
      groups.querySelectorAll(".pub-year-group").forEach((g) => {
        const any = Array.from(g.querySelectorAll(".pub-card")).some((c) => !c.classList.contains("is-hidden"));
        g.classList.toggle("is-hidden", !any);
      });
      empty.style.display = visible ? "none" : "block";
    }

    document.getElementById("type-filters").addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      type = btn.dataset.type;
      document.getElementById("type-filters").querySelectorAll("button").forEach((b) => b.classList.toggle("is-active", b === btn));
      apply();
    });
    document.getElementById("year-filters").addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      year = btn.dataset.year;
      document.getElementById("year-filters").querySelectorAll("button").forEach((b) => b.classList.toggle("is-active", b === btn));
      apply();
    });
    document.getElementById("pub-search").addEventListener("input", (e) => {
      q = e.target.value.trim().toLowerCase();
      apply();
    });

    groups.addEventListener("click", async (e) => {
      const bibBtn = e.target.closest(".bib-btn");
      if (bibBtn) {
        const pre = document.getElementById("bib-" + bibBtn.dataset.key);
        if (!pre) return;
        try {
          await navigator.clipboard.writeText(pre.textContent);
          bibBtn.textContent = "Copied";
          setTimeout(() => { bibBtn.textContent = "Copy BibTeX"; }, 1600);
        } catch (err) {
          pre.hidden = !pre.hidden;
        }
        return;
      }
      const absBtn = e.target.closest(".abs-btn");
      if (absBtn) {
        const box = document.getElementById("abs-" + absBtn.dataset.key);
        if (box) box.hidden = !box.hidden;
      }
    });
  }

  /* Datasets page */
  const dsGrid = document.getElementById("dataset-grid");
  if (dsGrid && window.SITE) {
    dsGrid.innerHTML = window.SITE.datasets.map((d, i) => `
      <article class="dataset-card">
        <p class="dataset-card__tagline">${d.tagline}</p>
        <h2 class="dataset-card__name">${d.name}</h2>
        <p class="dataset-card__description">${d.description}</p>
        <div class="dataset-card__actions">
          ${d.links.dataset ? `<a class="btn btn-primary" href="${d.links.dataset}" rel="noopener">Dataset</a>` : ""}
          ${d.links.paper ? `<a class="btn" href="${d.links.paper}" rel="noopener">Paper</a>` : ""}
          ${d.bibtex ? `<button type="button" class="btn ds-bib" data-i="${i}">Copy BibTeX</button>` : ""}
        </div>
        ${d.bibtex ? `<pre class="dataset-card__bibtex" id="ds-bib-${i}">${d.bibtex.replace(/</g, "&lt;")}</pre>` : ""}
      </article>`).join("");
    dsGrid.addEventListener("click", async (e) => {
      const btn = e.target.closest(".ds-bib");
      if (!btn) return;
      const rec = window.SITE.datasets[Number(btn.dataset.i)];
      try {
        await navigator.clipboard.writeText(rec.bibtex);
        btn.textContent = "Copied";
        setTimeout(() => { btn.textContent = "Copy BibTeX"; }, 1600);
      } catch (err) {
        document.getElementById("ds-bib-" + btn.dataset.i).classList.toggle("is-open");
      }
    });
  }
})();
