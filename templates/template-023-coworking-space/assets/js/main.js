/* ==========================================================================
   T023 Coworking Space — main.js
   手機右側 drawer、FAQ accordion、表單假送出、回到頂部、捲動效果
   ========================================================================== */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 10);
    if (toTop) toTop.classList.toggle('show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer (RIGHT side) ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.drawer');
  var overlay = document.querySelector('.overlay');
  var close = document.querySelector('.drawer-close');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('show');
    if (toggle) toggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    if (toggle) toggle.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (toggle) toggle.addEventListener('click', function () {
    if (drawer && drawer.classList.contains('open')) closeDrawer(); else openDrawer();
  });
  if (close) close.addEventListener('click', closeDrawer);
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
      var msg = form.parentElement.querySelector('.form-msg') || form.querySelector('.form-msg');
      if (!msg) {
        msg = document.createElement('div');
        msg.className = 'form-msg';
        form.after(msg);
      }
      msg.textContent = '感謝您的填寫，我們已收到您的訊息，將盡快與您聯繫。（此為示範表單，未實際送出）';
      msg.classList.add('show');
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
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
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
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Active nav by current file ---------- */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[data-page], .drawer-link[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });
})();
