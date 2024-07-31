import React, { useState } from "react";
import '../estilos/InfoEditar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

function InfoEditar( { image , clickBackEditar  , setUpdateContactName , setUpdateContactNumber , updateContactName , updateContactNumber , handleUpdateContact} ) {


  function contactName (e) {
    setUpdateContactName(e.target.value)
  }

  function contactNumber (e) {
    setUpdateContactNumber(e.target.value)
  }


  return(
    <div className="container__info-edit">

      <h2>Editar perfil</h2>
      {/* imagen info-edit  */}

      <div className="container__info-edit-image">
        <img className="image" src={image}/>
        <div className="info-edit-fondo-img">
          <FontAwesomeIcon
            icon={faPen}
            className="info-edit-icon"
          />
        </div>
      </div>

      {/* seccion del formulario info-edit  */}

      <form className="form__info-edit">
        <div className="form__info-edit-container">
          <label for='name'>Nombre</label>
          <input 
            placeholder="Ingrese su nuevo nombre" 
            type="text" 
            id="name" 
            className="info-edit__input edit__input-name"
            value={updateContactName}
            onChange={contactName}
          />
        </div>

        <div className="form__info-edit-container">
          <label for='number'>Number</label>
          <input 
            placeholder="Ingrese su nuevo numero" 
            type="number" 
            id="number" 
            className="info-edit__input edit__input-number"
            value={updateContactNumber}
            onChange={contactNumber}
          /> 
        </div>
          
        <button className="info-edit__button" onClick={handleUpdateContact}>Aceptar</button>
       </form>

       <div className="info-edit__close" onClick={clickBackEditar}>X</div>
    </div>
  )
}

export default InfoEditar