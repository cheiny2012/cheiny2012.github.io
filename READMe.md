<html lang="es">

  <head>
    <style>
      body {
        background-image: url('images/giphy2.gif'); 
        background-repeat:repeat;
      }
      header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #171616;
        padding: 10px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      }
      #logo {
        height: 50px;
        margin-right: 10px;
      }
#noticias {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: right;
}
.noticias-container {
  display: none;
  flex-basis: 48%;
  margin-bottom: 20px;
}
.noticia {
  position: relative;
}
.noticia-link {
  display: block;
  position: relative;
}
.noticia-imagen {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.noticia-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
}
.noticia-titulo {
  margin: 0;
  }
      #imagen_noticia{
        height: 150px;
      }
      </style>
        <script>
      window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.pageYOffset > 100) {
          header.classList.add('scroll');
        } else {
          header.classList.remove('scroll');
        }
      });
    </script>
    

  </head>

  <body>
    <header>
      <a href="https://anilist.co/home"><img src="images/AniList_logo.png" id="logo" ></a>
      <a href="https://anilist.co/home"><img src="images/AniList_logo.png" id="logo"></a>
      <a href="https://anilist.co/home"><img src="images/AniList_logo.png" id="logo"></a>
      <a href="https://anilist.co/home"><img src="images/AniList_logo.png" id="logo"></a>
    </header>
    <div>
      <button onclick="window.open('https://anilist.co/home', '_blank')">IR A ANILIST</button>
      <button onclick="location.href='https://cheiny2012.github.io/mi_pagina_web/index'">IR A LA OTRA PAGINA</button>
    </div> 
    <div id="noticias"></div>
    <script>
      fetch("https://api.allorigins.win/get?url=https://somoskudasai.com/")
        .then((response) => response.json())
        .then((data) => {
          const parser = new DOMParser();
          const htmlDocument = parser.parseFromString(data.contents, "text/html");
          const noticias = htmlDocument.querySelectorAll("article.ar");
          const noticiasDiv = document.getElementById("noticias");
    let contador = 0;
    noticias.forEach((noticia, i) => {
      if (i >= 9 && i < 30) {
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
          <a href="${enlace}" class="noticia-link">
            <img src="${imagenSrc}" alt="${titulo}" class="noticia-imagen">
            <div class="noticia-info">
              <h2 class="noticia-titulo">${titulo}</h2>
              <p class="noticia-fecha">${fecha}</p>
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

    </script>


  </body>

</html>


