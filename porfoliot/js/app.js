document.getElementById('voir-competence').addEventListener('click', function() {
  document.getElementById('secompetence').scrollIntoView({behavior:'smooth'});
});

document.getElementById('voir-parcours').addEventListener('click', function() {
  document.getElementById('secformation').scrollIntoView({behavior:'smooth'});
});

document.getElementById('voir-projet').addEventListener('click', function() {
  document.getElementById('secprojets').scrollIntoView({behavior:'smooth'});
});

document.getElementById('voir-doc').addEventListener('click', function() {
  document.getElementById('secdoc').scrollIntoView({behavior:'smooth'});
});

document.getElementById('voir-contact').addEventListener('click', function() {
  document.getElementById('seccont').scrollIntoView({behavior:'smooth'});
});

document.getElementById('up').addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});