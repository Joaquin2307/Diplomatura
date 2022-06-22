const Header = (props)=> {
    return (
        <header>
    <div class="holder">
      <img src="imagenes/logo.png" alt="MaraAndSimil" />
      <h1>MarAndSimil</h1>
      <nav>
        <ul>
          <li><a class="activo" href="index.html">Home</a></li>
          <li><a href="quienessomos.html">Quienes Somos</a></li>
          <li><a href="productos.html">Productos</a></li>
          <li><a href="novedades.html">Novedades</a></li>
          <li><a href="pyme.html">Home</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>
    );
}
export default Header;