import"../styles/Contacto.css"

const Contacto = (props) => {
    return(
<main claclassNamess="holder">
    <div id="lista">
      <h2>Contactanos</h2>
      <ul id="contacto">
        <li>Telefono: 44452-3768</li>
        <li>Facebook: MarAndSimil</li>
      </ul>
      <p>Para contactarnos via mail:</p>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email </label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com"/>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Enviar</button>
    </div>
  </main>
    );
}
export default Contacto;