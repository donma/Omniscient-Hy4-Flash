/* ==========================================================================
   T005 Film Studio — main.js
   左側手機抽屜、FAQ 手風琴、表單假送出、Showreel 模擬播放器、
   回到頂部、捲動效果、復古時間碼。全部可在 file:// 下運作。
   ========================================================================== */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');

  /* ---------- Scroll: solid header + back-to-top ---------- */
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
  var closeBtn = document.querySelector('.drawer-close');

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
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
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
        msg.textContent = '感謝您的填寫，我們已收到拍攝需求，將於一個工作天內與您聯繫。（此為示範表單，未實際送出）';
        msg.classList.add('show');
      }
      form.reset();
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
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Smooth anchor scroll ---------- */
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  /* ---------- Showreel modal (fake looping image slideshow) ---------- */
  var modal = document.querySelector('.showreel-modal');
  var openers = document.querySelectorAll('[data-showreel]');
  var modalClose = document.querySelector('.modal-close');
  var slides = document.querySelectorAll('.modal-slide');
  var captionCode = document.querySelector('.modal-caption .timecode');
  var captionName = document.querySelector('.modal-caption b');
  var modalBar = document.querySelector('.modal-bar .bar-status');
  var slideIndex = 0;
  var slideTimer = null;
  var frameCount = 0;

  function renderSlide() {
    if (!slides.length) return;
    slides.forEach(function (s, i) { s.classList.toggle('active', i === slideIndex); });
    if (captionName && slides[slideIndex].getAttribute('data-title')) {
      captionName.textContent = slides[slideIndex].getAttribute('data-title');
    }
    frameCount++;
    if (captionCode) captionCode.textContent = 'TC 00:01:' + String(24 + slideIndex).padStart(2, '0') + ':' + String(frameCount % 25).padStart(2, '0');
    if (modalBar) modalBar.textContent = 'PLAYING · REEL 2026 · ' + (slideIndex + 1) + ' / ' + slides.length;
  }
  function startReel() {
    if (!slides.length) return;
    slideIndex = 0; renderSlide();
    stopReel();
    slideTimer = window.setInterval(function () {
      slideIndex = (slideIndex + 1) % slides.length;
      renderSlide();
    }, 2600);
  }
  function stopReel() { if (slideTimer) { window.clearInterval(slideTimer); slideTimer = null; } }
  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    startReel();
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    stopReel();
  }
  openers.forEach(function (b) { b.addEventListener('click', openModal); });
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  /* ---------- Live timecode motif (hero / page-hero) ---------- */
  var tcEls = document.querySelectorAll('[data-live-tc]');
  if (tcEls.length) {
    var start = Date.now();
    window.setInterval(function () {
      var secs = Math.floor((Date.now() - start) / 1000);
      var hh = String(Math.floor(secs / 3600)).padStart(2, '0');
      var mm = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
      var ss = String(secs % 60).padStart(2, '0');
      var ff = String(Math.floor((Date.now() % 1000) / 40)).padStart(2, '0');
      tcEls.forEach(function (el) { el.textContent = 'TC 00:' + mm + ':' + ss + ':' + ff; });
    }, 40);
  }

  /* ---------- Active nav by current file ---------- */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[data-page], .drawer a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });
})();
