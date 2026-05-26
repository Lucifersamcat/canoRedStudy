/* ===== Curso de Redes Avanzado — interacción compartida ===== */

// Genera el header/nav desde config.js
(function () {
  var header = document.querySelector('.topnav');
  if (!header || typeof COURSE === 'undefined') return;

  var page = location.pathname.split('/').pop() || 'index.html';
  var isIndex = (page === 'index.html' || page === '');

  var brand = isIndex
    ? '<span class="brand">' + COURSE.brand.pre + '<span class="dot">.</span>' + COURSE.brand.suf + '</span>'
    : '<a class="brand" href="../../index.html">' + COURSE.brand.pre + '<span class="dot">.</span>' + COURSE.brand.suf + '</a>';

  var links = ['<a href="index.html"' + (isIndex ? ' class="active"' : '') + '>Inicio</a>']
    .concat(COURSE.modules.map(function (m) {
      return '<a href="' + m.href + '"' + (m.href === page ? ' class="active"' : '') + '>' + m.label + '</a>';
    })).join('');

  header.innerHTML = '<div class="wrap">' + brand + '<nav>' + links + '</nav></div>';
})();

// Flashcards: clic para girar
document.addEventListener('click', function (e) {
  var fc = e.target.closest('.flashcard');
  if (fc) fc.classList.toggle('flipped');
});

// Quiz: cada bloque define data-quiz con las respuestas correctas en cada input
function checkQuiz(quizId) {
  var quiz = document.getElementById(quizId);
  if (!quiz) return;
  var questions = quiz.querySelectorAll('.q');
  var total = questions.length;
  var score = 0;

  questions.forEach(function (q) {
    q.classList.add('answered');
    var correctVal = q.getAttribute('data-answer');
    var labels = q.querySelectorAll('label');
    var chosen = q.querySelector('input:checked');
    labels.forEach(function (lbl) {
      var inp = lbl.querySelector('input');
      lbl.classList.remove('correct', 'wrong');
      if (inp.value === correctVal) lbl.classList.add('correct');
      if (inp.checked && inp.value !== correctVal) lbl.classList.add('wrong');
    });
    if (chosen && chosen.value === correctVal) score++;
  });

  var res = quiz.querySelector('.quiz-result');
  var pct = Math.round((score / total) * 100);
  var msg = pct === 100 ? '¡Perfecto! Dominas este bloque.'
          : pct >= 70 ? 'Buen trabajo. Repasa lo marcado en rojo.'
          : 'Conviene repasar la teoría de este bloque.';
  res.textContent = 'Resultado: ' + score + ' / ' + total + '  (' + pct + '%) — ' + msg;
  res.classList.add('show');
  res.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetQuiz(quizId) {
  var quiz = document.getElementById(quizId);
  if (!quiz) return;
  quiz.querySelectorAll('.q').forEach(function (q) {
    q.classList.remove('answered');
    q.querySelectorAll('label').forEach(function (l) { l.classList.remove('correct', 'wrong'); });
    q.querySelectorAll('input').forEach(function (i) { i.checked = false; });
  });
  var res = quiz.querySelector('.quiz-result');
  res.classList.remove('show');
}

