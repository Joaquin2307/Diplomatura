const Main = (props) => {
    return(
        <main class="holder">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="imagenes/calzado 1.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="imagenes/imagen fabrica.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="imagenes/calzado 2.jpg" class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <H2 id="bienvenidos">Bienvenidos</H2>
          <p id="textobienvenidos">Pyme familiar dedicada al calzado,  vendemos productos de alta calidad de goma o pvc. Suelas de seguridad, planchas, ojotas, y mucha mas variedad mirar el catalogo para mas informacion a cerca de los productos.</p>
        </div>
      </main>
    
    )
}