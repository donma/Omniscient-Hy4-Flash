/* ==========================================================================
   T024 Community Festival — main.js
   手機右側 drawer、FAQ 手風琴、表單假送出、回到頂部、
   行程分日切換、reveal 動畫、彩紙 confetti 裝飾。
   ========================================================================== */
(function () {
  'use strict';

  var toTop = document.querySelector('.to-top');

  function onScroll() {
    if (toTop) toTop.classList.toggle('show', (window.scrollY || window.pageYOffset) > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer (right side) ---------- */
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

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item .faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- Schedule day tabs ---------- */
  var tabs = document.querySelectorAll('.schedule-tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-day');
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      document.querySelectorAll('.schedule-panel').forEach(function (panel) {
        panel.style.display = (panel.getAttribute('data-panel') === target) ? 'grid' : 'none';
      });
    });
  });

  /* ---------- Fake form submit ---------- */
  document.querySelectorAll('form[data-fake-submit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      if (msg) {
        msg.textContent = '感謝您的熱情參與！我們已收到您的報名資料，將盡快以電話或 Email 與您確認。（此為示範表單，未實際送出）';
        msg.classList.add('show');
      }
      form.reset();
    });
  });

  /* ---------- Back to top ---------- */
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Smooth anchor scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id && id.length > 1) {
        var el = document.querySelector(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
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
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Active nav by current file ---------- */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[data-page], .drawer a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });

  /* ---------- Playful confetti burst on primary buttons (optional) ---------- */
  var colors = ['#ffd23f', '#ff6b5b', '#2ec4b6', '#7b5cff'];
  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      for (var i = 0; i < 6; i++) {
        (function (n) {
          var bit = document.createElement('i');
          bit.style.cssText = 'position:fixed;z-index:9999;pointer-events:none;width:9px;height:9px;border-radius:' +
            (n % 2 ? '50%' : '2px') + ';background:' + colors[n % colors.length] +
            ';left:' + (btn.getBoundingClientRect().left + btn.offsetWidth / 2) + 'px;top:' +
            (btn.getBoundingClientRect().top + btn.offsetHeight / 2) + 'px;transition:all .7s ease-out;opacity:1;';
          document.body.appendChild(bit);
          requestAnimationFrame(function () {
            var dx = (Math.random() - 0.5) * 220;
            var dy = -60 - Math.random() * 120;
            bit.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + (Math.random() * 540) + 'deg)';
            bit.style.opacity = '0';
          });
          setTimeout(function () { if (bit.parentNode) bit.parentNode.removeChild(bit); }, 750);
        })(i);
      }
    });
  });
})();
