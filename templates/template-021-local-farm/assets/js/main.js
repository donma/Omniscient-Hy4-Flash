/* ==========================================================================
   T021 Local Farm — main.js
   左側 drawer · 平滑滾動錨點 · FAQ 手風琴 · 表單假送出 · 回到頂部 · 捲動顯現
   所有功能皆可在 file:// 下運作，不依賴後端 API
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Header solid on scroll + back-to-top ---------- */
  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset || 0;
    if (header) header.classList.toggle('solid', y > 60);
    if (toTop) toTop.classList.toggle('show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer (LEFT side) ---------- */
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

  /* ---------- Smooth scroll anchors (same-page # links) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var headerH = (header && header.classList.contains('solid')) ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 10;
      window.scrollTo({ top: top < 0 ? 0 : top, behavior: 'smooth' });
      if (history.replaceState) history.replaceState(null, '', href);
    });
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item .faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- Fake form submit ---------- */
  document.querySelectorAll('form[data-fake-submit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      if (msg) {
        msg.textContent = '感謝您的填寫，我們已收到您的訊息，將盡快與您聯繫。（此為示範表單，未實際送出）';
        msg.classList.add('show');
        msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
    });
  });

  /* ---------- Back to top ---------- */
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Active nav by current file + anchor highlight ---------- */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });
  document.querySelectorAll('.drawer a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });

  /* ---------- Section anchor active state on index scroll ---------- */
  var anchors = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"], .drawer a[href^="#"]'));
  var sections = anchors.map(function (a) {
    return document.querySelector(a.getAttribute('href'));
  }).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = '#' + en.target.id;
        anchors.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { so.observe(s); });
  }
})();
