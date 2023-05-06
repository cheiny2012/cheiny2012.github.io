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
        background-color:#171616;
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
          noticias.forEach((noticia) => {
            const titulo = noticia.querySelector("h2.ar-title").innerText;
            const fecha = noticia.querySelector("span.db").innerText;
            const imagenSrc = noticia.querySelector("figure.im img").src;
            const enlace = noticia.querySelector("a.lnk-blk").href;
            const noticiaDiv = document.createElement("div");
            noticiaDiv.innerHTML = `
              <h2>${titulo}</h2>
              <p>${fecha}</p>
              <a href="${enlace}">
                <img src="${imagenSrc}" alt="${titulo}">
              </a>
            `;
            noticiasDiv.appendChild(noticiaDiv);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    </script>


  </body>

</html>


