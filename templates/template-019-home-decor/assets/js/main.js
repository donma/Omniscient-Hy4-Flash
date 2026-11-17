/* ==========================================================================
   T019 Home Decor — main.js
   手機左側 drawer、FAQ accordion、表單假送出、回到頂部、捲動效果
   全部在 file:// 下運作，不依賴後端 API。
   ========================================================================== */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
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
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });
  if (drawer) drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeDrawer);
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
      }
      form.reset();
    });
  });

  /* ---------- Newsletter fake submit ---------- */
  var nlForm = document.querySelector('.newsletter form');
  if (nlForm) {
    nlForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = nlForm.querySelector('.nl-msg');
      if (msg) {
        msg.textContent = '感謝訂閱，生活提案將定期寄送給您。（示範功能）';
        msg.classList.add('show');
      }
      nlForm.reset();
    });
  }

  /* ---------- Product thumbnail switch ---------- */
  var mainImg = document.querySelector('.product-main img');
  document.querySelectorAll('.product-thumbs img').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      if (mainImg) mainImg.src = thumb.src;
      document.querySelectorAll('.product-thumbs img').forEach(function (t) { t.classList.remove('active'); });
      thumb.classList.add('active');
    });
  });

  /* ---------- Back to top ---------- */
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Reveal on scroll ---------- */
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

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---------- Active nav by current file ---------- */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });
})();
