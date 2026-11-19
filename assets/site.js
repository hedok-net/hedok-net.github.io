document.addEventListener('DOMContentLoaded', function () {
  var b = document.querySelector('.burger'), m = document.querySelector('nav.menu');
  if (b && m) b.addEventListener('click', function () { m.classList.toggle('open'); });

  // 자가 확인 체크리스트: data-levels="3:문구|6:문구"
  document.querySelectorAll('.check').forEach(function (box) {
    var out = box.querySelector('.result');
    var levels = (box.dataset.levels || '').split('|').map(function (s) {
      var i = s.indexOf(':'); return { n: +s.slice(0, i), t: s.slice(i + 1) };
    });
    function update() {
      var n = box.querySelectorAll('input:checked').length;
      var msg = '해당하는 항목을 골라 보세요.';
      if (n > 0) msg = n + '개 해당합니다. 가볍게 생활 습관부터 살펴보세요.';
      levels.forEach(function (l) { if (n >= l.n) msg = n + '개 해당합니다. ' + l.t; });
      out.textContent = msg;
    }
    box.addEventListener('change', update); update();
  });
});
