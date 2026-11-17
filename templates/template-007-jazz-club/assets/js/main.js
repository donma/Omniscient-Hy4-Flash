/* ==========================================================================
   T007 Jazz Club — main.js
   左側手機抽屜、FAQ 手風琴、表單假送出、回到頂部、跑馬燈、捲動顯現
   全部能在 file:// 下運作，不依賴後端 API。
   ========================================================================== */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');

  /* ---- 捲動：固定表頭 + 回到頂部顯示 ---- */
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (toTop) toTop.classList.toggle('show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- 手機抽屜（左側）---- */
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.drawer');
  var overlay = document.querySelector('.overlay');
  var close = document.querySelector('.drawer-close');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
  }
  if (toggle) toggle.addEventListener('click', openDrawer);
  if (close) close.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (drawer) drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeDrawer);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ---- FAQ 手風琴 ---- */
  document.querySelectorAll('.faq-item .faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---- 表單假送出 ---- */
  document.querySelectorAll('form[data-fake-submit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      if (msg) {
        msg.textContent = '感謝您！我們已收到您的訂位需求，將盡快以電話或訊息與您確認。（此為示範表單，未實際送出）';
        msg.classList.add('show');
      }
      form.reset();
      if (msg) msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  /* ---- 回到頂部 ---- */
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---- 播放紐（示意回饋）---- */
  var playBtn = document.querySelector('.play-btn');
  if (playBtn) playBtn.addEventListener('click', function () {
    var playing = playBtn.classList.toggle('playing');
    playBtn.setAttribute('aria-label', playing ? '暫停試聽' : '播放試聽');
    playBtn.textContent = playing ? '❚❚' : '▶';
    var label = document.querySelector('.play-label');
    if (label) label.textContent = playing ? '正在播放 · Blue Note 精選輯' : '點擊試聽 · 現場錄音片段';
  });

  /* ---- 捲動顯現 ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- 依目前檔案高亮導覽 ---- */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });
  document.querySelectorAll('.drawer a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });
})();
