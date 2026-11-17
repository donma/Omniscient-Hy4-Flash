/* ==========================================================================
   T011 Music Festival — main.js
   手机右侧抽屉 / FAQ 手风琴 / 表单假送出 / 日程分日页签 / 回到顶部
   纯前端，可直接在 file:// 下运作，不依赖后端 API。
   ========================================================================== */
(function () {
  'use strict';

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------- 1. Mobile drawer (RIGHT side) ---------- */
  var toggle = $('.nav-toggle');
  var drawer = $('.drawer');
  var overlay = $('.overlay');

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
  if (overlay) overlay.addEventListener('click', closeDrawer);
  $$('.drawer-close').forEach(function (btn) {
    btn.addEventListener('click', closeDrawer);
  });
  $$('.drawer a').forEach(function (link) {
    link.addEventListener('click', closeDrawer);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ---------- 2. Header solid on scroll ---------- */
  var header = $('.site-header');
  function onScrollHeader() {
    if (header) header.classList.toggle('solid', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- 3. FAQ accordion ---------- */
  $$('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      $$('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- 4. Fake form submit ---------- */
  $$('form[data-fake-submit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = $('.form-msg', form.parentNode) || $('.form-msg');
      if (msg) {
        msg.textContent = '已收到您的訊息！這是一段示範訊息，我們會盡快與您聯絡。';
        msg.classList.add('show');
      }
      form.reset();
    });
  });

  /* ---------- 5. Day tabs (schedule) ---------- */
  var tabs = $$('.day-tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var group = tab.closest('.schedule-wrap');
      var scope = group || document;
      $$('.day-tab', scope).forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var target = tab.getAttribute('data-day');
      $$('.schedule-grid', scope).forEach(function (grid) {
        var show = grid.getAttribute('data-day') === target;
        grid.style.display = show ? 'grid' : 'none';
      });
    });
  });

  /* ---------- 6. Back to top ---------- */
  var toTop = $('.to-top');
  function onScrollTop() {
    if (toTop) toTop.classList.toggle('show', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScrollTop, { passive: true });
  onScrollTop();
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 7. Reveal on scroll ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- 8. Active nav link by current page ---------- */
  var current = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (!current) current = 'index.html';
  $$('[data-page]').forEach(function (link) {
    if (link.getAttribute('data-page').toLowerCase() === current) {
      link.classList.add('active');
    }
  });
})();
