window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.pageYOffset > 100) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });


  
  fetch("https://api.allorigins.win/get?url=https://somoskudasai.com/")
  .then((response) => response.json())
  .then((data) => {
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(data.contents, "text/html");
    const noticias = htmlDocument.querySelectorAll("article.ar");
    const noticiasDiv = document.getElementById("noticias");
let contador = 0;
noticias.forEach((noticia, i) => {
if (i >= 8 && i < 19) {
  if (contador % 2 === 0) {
    const noticiasContainer = document.createElement("div");
    noticiasContainer.classList.add("noticias-container");
    noticiasDiv.appendChild(noticiasContainer);
  }
  const titulo = noticia.querySelector("h2.ar-title").innerText;
  const fecha = noticia.querySelector("span.db").innerText;
  const imagenSrc = noticia.querySelector("figure.im img").src;
  const enlace = noticia.querySelector("a.lnk-blk").href;
  const noticiaDiv = document.createElement("div");
  noticiaDiv.classList.add("noticia");
  noticiaDiv.innerHTML = `
    <a href="#" class="noticia-link" onclick="mostrarDialogo(this)"> 
      <img src="${imagenSrc}" alt="${titulo}" class="noticia-imagen">
      <div class="noticia-info">
        <h2 class="noticia-titulo">${titulo}</h2>
      </div>
      <div id="dialogo" class="dialogo">
        <span class="cerrar" onclick="cerrarDialogo()">&times;</span>
        <iframe width="1500" height="800" 
      src="${enlace}" 
      frameborder="0" allowfullscreen></iframe>
      </div>
    </a>
  `;
  const noticiasContainer = noticiasDiv.lastChild;
  noticiasContainer.appendChild(noticiaDiv);
  contador++;
  if (contador % 2 === 0) {
    noticiasContainer.style.display = "flex";
    noticiasContainer.style.justifyContent = "flex-end";
  }
}
});
})
.catch((error) => {
console.error(error);
});
function abrirDialogo() {
      document.getElementById("dialogo").style.display = "block";
  }
  function cerrarDialogo() {
      document.getElementById("dialogo").style.display = "none";
  }
function mostrarDialogo(enlace) {
const noticia = enlace.closest('.noticia');
const dialogo = noticia.querySelector('.dialogo');
dialogo.style.display = 'block';
}
document.addEventListener("keydown", function (event) {
if (event.key === "Escape") {
const dialogos = document.querySelectorAll(".dialogo");
dialogos.forEach(function (dialogo) {
dialogo.style.display = "none";
});
}
});