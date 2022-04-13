const menu = document.querySelector(".menu-mobile");

function activateMenu(event) {
  if (event.type === "touchstart") event.preventDefault();

  const body = document.getElementById("body");
  body.classList.toggle("active");

  const active = body.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);

  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

menu.addEventListener("click", activateMenu);
menu.addEventListener("touchstart", activateMenu);