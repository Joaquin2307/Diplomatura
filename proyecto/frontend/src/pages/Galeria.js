import "../styles/Galeria.css"
const Galeria = (props) => {
    return(
        <main className="holder">
        <h2 className="nov">Galeria</h2>
        <div className="galeria">
            <img src="imagenes/img01.jpg" className="img-thumbnail" alt=""/>
            <img src="imagenes/img02.jpg"className="img-thumbnail" alt=""/>
            <img src="imagenes/img03.jpg"className="img-thumbnail" alt=""/>
            <img src="imagenes/img04.jpg" className="img-thumbnail" alt=""/>
            <img src="imagenes/img05.jpg" className="img-thumbnail" alt=""/>
            <img src="imagenes/img06.jpg"className="img-thumbnail" alt=""/>
            <img src="imagenes/img07.jpg"className="img-thumbnail" alt=""/>
        </div>
    </main>


    );
}
export default Galeria;