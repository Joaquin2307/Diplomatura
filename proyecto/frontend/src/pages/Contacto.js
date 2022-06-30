const Contacto = (props) => {
    return(
<main class="holder">
    <div id="lista">
      <h2>Contactanos</h2>
      <ul id="contacto">
        <li>Telefono: 44452-3768</li>
        <li>Facebook: MarAndSimil</li>
      </ul>
      <p>Para contactarnos via mail:</p>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </div>
  </main>
    );
}
export default Contacto;