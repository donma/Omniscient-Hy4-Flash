/* ==========================================================================
   T002 Cyber Security — main.js
   All features work under file:// with no backend dependency.
   Right-side drawer, FAQ accordion, fake form submit, back-to-top,
   reveal-on-scroll, fake live security log typing effect, active nav.
   ========================================================================== */
(function(){
  'use strict';

  /* ---------- Mobile drawer (RIGHT side) ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var drawer = document.querySelector('.drawer');
  var overlay = document.querySelector('.overlay');

  function openDrawer(){
    if(drawer){ drawer.classList.add('open'); }
    if(overlay){ overlay.classList.add('show'); }
    document.body.style.overflow = 'hidden';
    if(toggle){ toggle.setAttribute('aria-expanded','true'); }
  }
  function closeDrawer(){
    if(drawer){ drawer.classList.remove('open'); }
    if(overlay){ overlay.classList.remove('show'); }
    document.body.style.overflow = '';
    if(toggle){ toggle.setAttribute('aria-expanded','false'); }
  }
  if(toggle){ toggle.addEventListener('click', function(){ openDrawer(); }); }
  var dclose = document.querySelector('.drawer-close');
  if(dclose){ dclose.addEventListener('click', closeDrawer); }
  if(overlay){ overlay.addEventListener('click', closeDrawer); }
  /* Drawer links also close it */
  if(drawer){
    drawer.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeDrawer); });
  }
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){ closeDrawer(); }
  });

  /* ---------- Active nav by current page ---------- */
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if(page === ''){ page = 'index.html'; }
  document.querySelectorAll('.nav a[data-page], .drawer a[data-page]').forEach(function(a){
    if(a.getAttribute('data-page') === page){ a.classList.add('active'); }
  });

  /* ---------- Header shadow + back-to-top visibility on scroll ---------- */
  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');
  function onScroll(){
    var y = window.scrollY || window.pageYOffset;
    if(header){ if(y > 12){ header.classList.add('scrolled'); } else { header.classList.remove('scrolled'); } }
    if(toTop){ if(y > 400){ toTop.classList.add('show'); } else { toTop.classList.remove('show'); } }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ---------- Back to top ---------- */
  if(toTop){
    toTop.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
    toTop.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ window.scrollTo({top:0, behavior:'smooth'}); }
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqQuestions = document.querySelectorAll('.faq-q');
  if(faqQuestions.length){
    faqQuestions.forEach(function(q){
      q.addEventListener('click', function(){
        var item = q.parentElement;
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(function(it){ it.classList.remove('open'); });
        if(!isOpen){ item.classList.add('open'); }
      });
    });
  }

  /* ---------- Fake form submit (no real send) ---------- */
  document.querySelectorAll('form[data-fake-submit]').forEach(function(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var msg = form.querySelector('.form-msg');
      if(msg){
        msg.textContent = '✓ 訊息已送出（示意），我們將於 1 個工作天內與您聯絡。';
        msg.classList.add('show');
      }
      form.reset();
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, {threshold:0.12});
    reveals.forEach(function(r){ io.observe(r); });
  } else {
    reveals.forEach(function(r){ r.classList.add('in'); });
  }

  /* ---------- Fake live security log typing (hero console) ---------- */
  var logEl = document.querySelector('[data-live-log]');
  if(logEl){
    var lines = [
      '[掃描] 外部連線行為分析 .......... 正常',
      '[防護] WAF 規則更新完成 .......... v4.2',
      '[告警] 異常登入嘗試已攔截 ........ 已阻斷',
      '[監控] 端點代理心跳 .............. 128/128',
      '[情報] 威脅情資同步 .............. 完成',
      '[加密] 資料通道 TLS 1.3 .......... 啟用'
    ];
    var i = 0;
    function typeLine(){
      if(i >= lines.length){ i = 0; logEl.innerHTML = ''; }
      var div = document.createElement('div');
      div.className = 'lg';
      var text = lines[i];
      var j = 0;
      (function type(){
        if(j <= text.length){
          div.textContent = text.slice(0, j);
          j++;
          window.setTimeout(type, 16);
        } else {
          logEl.appendChild(div);
          i++;
          window.setTimeout(typeLine, 850);
        }
      })();
    }
    window.setTimeout(typeLine, 700);
  }

  /* ---------- Smooth scroll for same-page anchors ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var id = a.getAttribute('href');
      if(id && id.length > 1){
        var target = document.querySelector(id);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });

})();
