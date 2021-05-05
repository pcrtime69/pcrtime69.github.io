const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
function verif() {
  var prenom = document.getElementById("prenom").value;
  alert(prenom + " votre commande est en cours de traitement ")
console.log(prenom);
}