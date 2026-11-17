/* ==========================================================================
   T010 Architecture Dark — main.js
   功能：右側手機抽屉、FAQ accordion、表單假送出、案例索引 hover 換圖、
        回到頂部、smooth reveal、active nav、discipline 單開手風琴。
   全部可在 file:// 下運作，不依賴後端 API。
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Sticky header + back to top visibility ---------- */
  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');

  function onScroll() {
    var y = window.scrollY || window.pageYOffset || 0;
    if (header) header.classList.toggle('solid', y > 40);
    if (toTop) toTop.classList.toggle('show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer (RIGHT side) ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.drawer');
  var overlay = document.querySelector('.overlay');
  var drawerClose = document.querySelector('.drawer-close');

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
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (drawer) drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeDrawer);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ---------- Index hero: hover / focus image swap ---------- */
  var indexList = document.querySelector('.index-list');
  if (indexList) {
    var previewImg = document.querySelector('.preview-frame img');
    var previewTag = document.querySelector('.preview-tag');
    var previewCount = document.querySelector('.preview-count');
    var previewName = document.querySelector('[data-preview-name]');
    var previewDesc = document.querySelector('[data-preview-desc]');
    var items = Array.prototype.slice.call(indexList.querySelectorAll('li'));

    function activate(item) {
      if (!item) return;
      items.forEach(function (li) { li.classList.remove('is-active'); });
      item.classList.add('is-active');
      if (previewImg && item.getAttribute('data-img')) {
        previewImg.src = item.getAttribute('data-img');
        previewImg.alt = item.getAttribute('data-alt') || previewImg.alt;
      }
      if (previewTag && item.getAttribute('data-tag')) {
        previewTag.textContent = item.getAttribute('data-tag');
      }
      if (previewCount && item.getAttribute('data-num')) {
        previewCount.textContent = item.getAttribute('data-num') + ' / 04';
      }
      if (previewName && item.getAttribute('data-tag')) {
        previewName.textContent = item.getAttribute('data-tag');
      }
      if (previewDesc && item.getAttribute('data-desc')) {
        previewDesc.textContent = item.getAttribute('data-desc');
      }
    }

    items.forEach(function (item) {
      item.addEventListener('mouseenter', function () { activate(item); });
      item.addEventListener('focus', function () { activate(item); });
      item.addEventListener('click', function () { activate(item); });
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item .faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- Discipline list: only one open at a time ---------- */
  document.querySelectorAll('.discipline-list .discipline').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) {
        document.querySelectorAll('.discipline-list .discipline').forEach(function (other) {
          if (other !== d) other.open = false;
        });
      }
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

  /* ---------- Active nav by current file ---------- */
  var here = (location.pathname.split('/').pop() || 'index.html') || 'index.html';
  document.querySelectorAll('.nav a[data-page], .drawer a[data-page]').forEach(function (a) {
    if (a.getAttribute('data-page') === here) {
      a.classList.add('active');
      if (a.classList.contains('drawer-link')) a.setAttribute('aria-current', 'page');
    }
  });
})();
