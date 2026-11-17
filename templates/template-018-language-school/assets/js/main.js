/* ==========================================================================
   T018 Language School — main.js
   右側手機選單、FAQ 手風琴、表單假送出、方案月/年切換、回到頂部、捲動效果
   全部可在 file:// 下運作，不依賴後端 API
   ========================================================================== */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('solid', y > 40);
    if (toTop) toTop.classList.toggle('show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 右側抽屜選單 ---------- */
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

  /* ---------- FAQ 手風琴 ---------- */
  document.querySelectorAll('.faq-item .faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- 表單假送出 ---------- */
  document.querySelectorAll('form[data-fake-submit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      if (msg) {
        msg.textContent = '感謝您的填寫！我們已收到您的資訊，客服將在 1 個工作天內與您聯繫。（此為示範表單，未實際送出）';
        msg.classList.add('show');
      }
      form.reset();
    });
  });

  /* ---------- 方案月繳 / 年繳切換 ---------- */
  document.querySelectorAll('.toggle-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var group = btn.closest('.pricing-toggle');
      if (!group) return;
      group.querySelectorAll('.toggle-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var period = btn.getAttribute('data-period');
      var scope = group.getAttribute('data-target') || '';
      var root = scope ? document.querySelector(scope) : document;
      if (!root) root = document;
      root.querySelectorAll('.plan-price').forEach(function (price) {
        var numEl = price.querySelector('.num');
        var perEl = price.querySelector('.per');
        if (!numEl) return;
        var monthly = numEl.getAttribute('data-monthly');
        var yearly = numEl.getAttribute('data-yearly');
        if (!monthly) return;
        numEl.textContent = (period === 'yearly' && yearly) ? yearly : monthly;
        if (perEl) perEl.textContent = (period === 'yearly') ? '/ 月（年繳）' : '/ 月';
      });
    });
  });

  /* ---------- 回到頂部 ---------- */
  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- 錨點平滑滾動 ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- 捲動顯示 ---------- */
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

  /* ---------- 目前頁面導覽高亮 ---------- */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[data-page], .drawer a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) a.classList.add('active');
  });
})();
