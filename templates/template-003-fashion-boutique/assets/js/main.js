/* ==========================================================================
   T003 Fashion Boutique — main.js
   左側手機抽屜、FAQ 手風琴、表單假送出、回到頂部、捲動效果
   全部可在 file:// 下運作，不依賴後端 API。
   ========================================================================== */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');

  /* Sticky header + back-to-top visibility */
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
  var closeBtn = document.querySelector('.drawer-close');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('show');
    if (toggle) toggle.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    if (toggle) toggle.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (toggle) toggle.addEventListener('click', function () {
    if (drawer && drawer.classList.contains('open')) closeDrawer();
    else openDrawer();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (drawer) drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeDrawer);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
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
        msg.textContent = '感謝您的訊息，我們已收到，將盡快與您聯繫。（此為示範表單，未實際送出）';
        msg.classList.add('show');
      }
      form.reset();
    });
  });

  /* ---------- Back to top ---------- */
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Smooth scroll for in-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id && id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Active nav by current file ---------- */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });

  /* ---------- Product size selection (service-detail) ---------- */
  document.querySelectorAll('.size-row').forEach(function (row) {
    row.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        row.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
  });

  /* ---------- Lookbook thumbnails (service-detail) ---------- */
  var mainShot = document.querySelector('.product-shot img');
  document.querySelectorAll('.detail-thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      if (!mainShot) return;
      var img = thumb.querySelector('img');
      if (img) mainShot.src = img.src;
      document.querySelectorAll('.detail-thumb').forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
    });
  });
})();
