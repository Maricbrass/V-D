// script.js
document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('nameInput').value;
    localStorage.setItem('username', name);
    window.location.href = 'valentine.html';
  });
  