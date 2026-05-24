/* ===== Curso de Redes Básicas — interacción compartida ===== */

// Flashcards: clic para girar
document.addEventListener('click', function (e) {
  var fc = e.target.closest('.flashcard');
  if (fc) fc.classList.toggle('flipped');
});

// Quiz autoevaluable
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
  var msg = pct === 100 ? '¡Perfecto! Dominas este módulo.'
          : pct >= 70 ? 'Buen trabajo. Repasa lo marcado en rojo.'
          : 'Conviene repasar la teoría de este módulo.';
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

// Marca el enlace activo en la barra de navegación
document.addEventListener('DOMContentLoaded', function () {
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topnav nav a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
});
