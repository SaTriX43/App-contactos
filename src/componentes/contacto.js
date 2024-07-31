// Importamos 
import React from "react";
import '../estilos/contacto.css'

// creamos componente Contact 
function Contact( { name , image , number , handleClick } ) {
  return(
    <div className="container__contact" onClick={handleClick}>
      <div className="container__contact-image">
        <img className="image" src={image}/>
      </div>
      <div className="container__contact-image-text">
        <p className="contact-text-name">{name}</p>
        <p className="contact-text-number">{number}</p>
        <hr className="contact-hr"/>
      </div>
      
    </div>
  )
}

export default Contact