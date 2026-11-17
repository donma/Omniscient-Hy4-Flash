/* ==========================================================================
   全職設計視角 — Gallery logic (file:// safe, no build step)
   ========================================================================== */

/* Fallback: only 3 demo records, per spec section 16. */
const FALLBACK_TEMPLATES = [
  {
    id: "template-001", slug: "luxury-bar", name: "Luxury Bar",
    description: "適合酒吧、餐酒館與夜間活動品牌的黑金沉浸式網站。",
    industry: "酒吧", industryCategory: "餐飲甜點", colorTheme: "黑金低光源",
    backgroundMode: "dark", layoutType: "大圖沉浸式 Hero",
    previewImage: "assets/img/previews/template-001.jpg",
    demoUrl: "templates/template-001-luxury-bar/index.html",
    promptUrl: "templates/template-001-luxury-bar/prompt.md",
    zipUrl: "downloads/template-001-luxury-bar.zip", hasZip: false,
    pageCount: 12, imageRich: true, isFeatured: true,
    tags: ["餐飲甜點", "酒吧", "深色底", "黑金色", "大圖沉浸式 Hero", "訂位 CTA"]
  },
  {
    id: "template-006", slug: "ai-saas", name: "AI SaaS",
    description: "適合 AI 工具、新創與軟體服務的深色科技漸層 Bento 網站。",
    industry: "AI 軟體", industryCategory: "科技商務", colorTheme: "深色科技漸層",
    backgroundMode: "dark", layoutType: "Bento Grid 現代資訊版",
    previewImage: "assets/img/previews/template-006.jpg",
    demoUrl: "templates/template-006-ai-saas/index.html",
    promptUrl: "templates/template-006-ai-saas/prompt.md",
    zipUrl: "downloads/template-006-ai-saas.zip", hasZip: false,
    pageCount: 12, imageRich: true, isFeatured: true,
    tags: ["科技商務", "AI 軟體", "深色底", "紫藍漸層", "Bento Grid", "免費試用"]
  },
  {
    id: "template-013", slug: "beauty-studio", name: "Beauty Studio",
    description: "適合美容工作室、美妝沙龍與護膚品牌的奶茶色左右分割信任型網站。",
    industry: "美容工作室", industryCategory: "美妝美業", colorTheme: "奶茶色柔和",
    backgroundMode: "light", layoutType: "左右分割 Split Layout",
    previewImage: "assets/img/previews/template-013.jpg",
    demoUrl: "templates/template-013-beauty-studio/index.html",
    promptUrl: "templates/template-013-beauty-studio/prompt.md",
    zipUrl: "downloads/template-013-beauty-studio.zip", hasZip: false,
    pageCount: 12, imageRich: true, isFeatured: true,
    tags: ["美妝美業", "美容工作室", "淺色底", "奶茶色", "Split Layout", "預約 CTA"]
  }
];

function getTemplates() {
  if (typeof TEMPLATES_DATA !== 'undefined' && Array.isArray(TEMPLATES_DATA) && TEMPLATES_DATA.length) {
    return TEMPLATES_DATA;
  }
  return FALLBACK_TEMPLATES;
}

/* tags 容錯 — spec section 23.1 */
function getTemplateTags(template) {
  if (Array.isArray(template.tags)) {
    return template.tags;
  }
  if (template.tags && typeof template.tags === 'object') {
    return Object.values(template.tags).flat().filter(Boolean);
  }
  return [];
}

function esc(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

const state = {
  industry: '全部',
  bg: '全部',
  layout: '全部',
  hotTag: '全部',
  query: '',
  view: 'grid'
};

const INDUSTRIES = ['全部','餐飲甜點','美容健康','美妝美業','零售商品','專業服務','教育課程','創意設計','空間生活','旅遊休閒','科技商務','地方品牌','個人品牌','活動組織','寵物服務'];
const LAYOUTS = ['全部','大圖沉浸式 Hero','左右分割 Split Layout','Magazine 雜誌式首頁','Masonry 作品牆','商品型 Grid Catalog','Storytelling 長卷軸','Bento Grid 現代資訊版','Editorial 文字導向','Dashboard Data 信任型','Event Campaign 活動型','Left Rail 左側導覽型','Pricing-first 方案導向型','Knowledge Hub 知識中心型'];
const HOT_TAGS = ['深色底','淺色底','圖片豐富','訂位 CTA','預約 Demo','商品目錄','作品牆','Strong SEO','強 SEO'];

/* ---------------- Gallery rendering ---------------- */
function renderFilterGroup(container, options, active, key) {
  container.innerHTML = options.map(opt =>
    `<button type="button" data-key="${key}" data-value="${esc(opt)}" class="${opt === active ? 'active' : ''}">${esc(opt)}</button>`
  ).join('');
  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const k = btn.dataset.key, v = btn.dataset.value;
      state[k] = v;
      container.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === btn));
      renderCards();
    });
  });
}

function initFilters() {
  const ind = document.getElementById('filter-industry');
  const bg = document.getElementById('filter-bg');
  const layout = document.getElementById('filter-layout');
  const hot = document.getElementById('hot-tags');
  if (ind) renderFilterGroup(ind, INDUSTRIES, state.industry, 'industry');
  if (bg) renderFilterGroup(bg, ['全部','深色底','淺色底'], state.bg, 'bg');
  if (layout) renderFilterGroup(layout, LAYOUTS, state.layout, 'layout');
  if (hot) {
    hot.innerHTML = `<span class="g-hot-label">熱門標籤</span>` + HOT_TAGS.map(t =>
      `<button type="button" class="g-tag ${t === state.hotTag ? 'active' : ''}" data-tag="${esc(t)}">${esc(t)}</button>`
    ).join('');
    hot.querySelectorAll('.g-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        state.hotTag = (state.hotTag === btn.dataset.tag) ? '全部' : btn.dataset.tag;
        hot.querySelectorAll('.g-tag').forEach(b => b.classList.toggle('active', b.dataset.tag === state.hotTag));
        renderCards();
      });
    });
  }
}

function initToolbar() {
  const search = document.getElementById('g-search-input');
  if (search) {
    search.addEventListener('input', e => { state.query = e.target.value.trim().toLowerCase(); renderCards(); });
  }
  const gridBtn = document.getElementById('view-grid');
  const listBtn = document.getElementById('view-list');
  if (gridBtn) gridBtn.addEventListener('click', () => setView('grid'));
  if (listBtn) listBtn.addEventListener('click', () => setView('list'));
  const menu = document.getElementById('g-menu-toggle');
  const nav = document.getElementById('g-nav');
  if (menu && nav) menu.addEventListener('click', () => nav.classList.toggle('open'));
}

function setView(view) {
  state.view = view;
  document.getElementById('view-grid')?.classList.toggle('active', view === 'grid');
  document.getElementById('view-list')?.classList.toggle('active', view === 'list');
  renderCards();
}

function matches(t) {
  const tags = getTemplateTags(t);
  if (state.industry !== '全部' && t.industryCategory !== state.industry && t.industry !== state.industry) return false;
  if (state.bg === '深色底' && t.backgroundMode !== 'dark') return false;
  if (state.bg === '淺色底' && t.backgroundMode !== 'light') return false;
  if (state.layout !== '全部' && t.layoutType !== state.layout && !String(t.layoutType).includes(state.layout)) return false;
  if (state.hotTag !== '全部' && !tags.includes(state.hotTag)) return false;
  if (state.query) {
    const hay = [t.name, t.description, t.industry, t.industryCategory, t.layoutType, t.colorTheme, ...tags].join(' ').toLowerCase();
    if (!hay.includes(state.query)) return false;
  }
  return true;
}

function cardHTML(t) {
  const tags = getTemplateTags(t);
  const isDark = t.backgroundMode === 'dark';
  const badgeMode = isDark
    ? `<span class="g-badge g-badge-dark">深色底</span>`
    : `<span class="g-badge g-badge-light">淺色底</span>`;
  const featured = t.isFeatured ? `<span class="g-badge g-badge-featured">代表作品</span>` : '';
  const markZip = t.hasZip ? 'ZIP 可下載' : 'ZIP 待打包';
  return `
  <article class="g-card" data-id="${esc(t.id)}">
    <div class="g-card-media">
      <img src="${esc(t.previewImage)}" alt="${esc(t.name)} 首頁預覽" loading="lazy" onerror="this.style.opacity='.15'">
      <div class="g-card-badges">${badgeMode}${featured}</div>
    </div>
    <div class="g-card-body">
      <div class="g-card-main">
        <div class="g-card-top">
          <span class="g-card-id">${esc(t.id).toUpperCase()}</span>
          <span class="g-card-cat">${esc(t.industryCategory)}</span>
        </div>
        <h3>${esc(t.name)}</h3>
        <div class="g-card-layout">${esc(t.layoutType)} · ${esc(t.colorTheme)}</div>
        <div class="g-card-tags">${tags.slice(0, 4).map(x => `<span>${esc(x)}</span>`).join('')}</div>
        <div class="g-card-marks">
          <span><i>●</i> 12 Pages</span>
          <span><i>●</i> Prompt</span>
          <span><i>●</i> 圖片豐富</span>
          <span>${esc(markZip)}</span>
        </div>
      </div>
      <div class="g-card-actions">
        <a class="g-primary full" href="${esc(t.demoUrl)}" target="_blank" rel="noopener">預覽網站</a>
        <a href="template-detail.html?id=${encodeURIComponent(t.id)}">查看詳情</a>
        <a href="${esc(t.promptUrl)}" target="_blank" rel="noopener">查看 Prompt</a>
        <button class="full" disabled>${esc(markZip)}</button>
      </div>
    </div>
  </article>`;
}

function renderCards() {
  const grid = document.getElementById('g-grid');
  if (!grid) return;
  const all = getTemplates();
  const filtered = all.filter(matches);
  grid.classList.toggle('list', state.view === 'list');
  if (!filtered.length) {
    grid.innerHTML = `<div class="g-empty"><b>找不到符合的樣板</b>試著調整篩選條件或搜尋關鍵字。</div>`;
  } else {
    grid.innerHTML = filtered.map(cardHTML).join('');
  }
  const count = document.getElementById('g-result-count');
  if (count) count.textContent = `顯示 ${filtered.length} / ${all.length} 套`;
}

function initGallery() {
  initFilters();
  initToolbar();
  renderCards();
}

/* ---------------- Detail page rendering ---------------- */
function initDetail() {
  const root = document.getElementById('detail-root');
  if (!root) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const t = getTemplates().find(x => x.id === id);
  if (!t) {
    root.innerHTML = `<div class="g-empty"><b>找不到此樣板</b>請從<a href="index.html" style="color:var(--g-accent)">主展示站</a>重新選擇。</div>`;
    return;
  }
  const tags = getTemplateTags(t);
  const pages = ["index.html","about.html","services.html","service-detail.html","portfolio.html","reviews.html","faq.html","booking.html","process.html","blog.html","blog-detail.html","contact.html"];
  const isDark = t.backgroundMode === 'dark';
  document.title = `${t.name}｜樣板詳情｜全職設計視角`;
  root.innerHTML = `
    <a class="g-back" href="index.html">← 返回樣板列表</a>
    <div class="g-detail-hero">
      <div class="g-detail-shot">
        <img src="${esc(t.previewImage)}" alt="${esc(t.name)} 首頁預覽大圖" onerror="this.style.opacity='.15'">
      </div>
      <div>
        <div class="g-detail-eyebrow">${esc(t.id).toUpperCase()} · ${esc(t.industryCategory)}</div>
        <h1>${esc(t.name)}</h1>
        <p class="g-detail-desc">${esc(t.description)}</p>
        <div class="g-detail-cta">
          <a class="g-btn g-btn-primary" href="${esc(t.demoUrl)}" target="_blank" rel="noopener">預覽網站</a>
          <a class="g-btn g-btn-ghost" href="${esc(t.promptUrl)}" target="_blank" rel="noopener">查看 Prompt</a>
          <button class="g-btn g-btn-ghost" disabled>${t.hasZip ? '下載 ZIP' : 'ZIP 待打包'}</button>
        </div>
        <div class="g-meta-grid">
          <div class="g-meta-item"><span>產業分類</span><b>${esc(t.industryCategory)}</b></div>
          <div class="g-meta-item"><span>色系分類</span><b>${esc(t.colorTheme)}</b></div>
          <div class="g-meta-item"><span>背景模式</span><b>${isDark ? '深色底' : '淺色底'}</b></div>
          <div class="g-meta-item"><span>版型類型</span><b>${esc(t.layoutType)}</b></div>
          <div class="g-meta-item"><span>Hero Pattern</span><b>${esc(t.heroPattern || '—')}</b></div>
          <div class="g-meta-item"><span>Content Rhythm</span><b>${esc(t.contentRhythm || '—')}</b></div>
        </div>
      </div>
    </div>
    <div class="g-detail-section">
      <h2>功能標籤</h2>
      <div class="g-card-tags">${tags.map(x => `<span>${esc(x)}</span>`).join('')}</div>
    </div>
    <div class="g-detail-section">
      <h2>12 頁頁面清單</h2>
      <div class="g-pages-grid">${pages.map(p => `<span>${esc(p)}</span>`).join('')}</div>
    </div>
    <div class="g-detail-section">
      <h2>適用產業</h2>
      <p class="g-note">${esc(t.industry)}、${esc(t.industryCategory)} 及相關品牌。本樣板可作為設計基底，交付前請依客戶實際產業調整文案、圖片與聯絡資訊。</p>
    </div>
    <div class="g-detail-section">
      <h2>SEO 結構說明</h2>
      <p class="g-note">每頁皆含 title、meta description、canonical placeholder、Open Graph 完整標記與語意化 HTML5 結構。首頁單一 h1，並依產業放置 LocalBusiness / Organization Schema placeholder；文章頁含 Article Schema placeholder。</p>
    </div>
    <div class="g-detail-section">
      <h2>圖片來源注意事項</h2>
      <p class="g-note">本站圖片僅作為設計示意，來源記錄於各樣板 assets/img/image-sources.md。正式交付客戶前，請替換為客戶自有圖片或已授權圖片，避免版權爭議。</p>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initDetail();
});
