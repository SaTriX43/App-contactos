import React from "react";
import '../estilos/ImagenContacto.css'

function ImagenContacto({ name , number , image}) {
  return(
    <div className="main__container-image-contact">
      <div className="container__image-contact">
        <img className="image" src={image}/>
      </div>
      <p className="image__contact-name">{name}</p>
      <p className="image__contact-number">{number}</p>
    </div>
  )
}

export default ImagenContacto