import React, { useState } from "react";
import '../estilos/InfoContacto.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCamera, faEnvelope, faLocation, faMessage, faPhone, faQrcode, faShareFromSquare, faTrash, faUserPen, faVideo } from "@fortawesome/free-solid-svg-icons";
import InfoEditar from "./InfoEditar";

function InfoContact( { image , name , number , clickBack , clickEliminarContacto , setUpdateContactName , setUpdateContactNumber , updateContactName , updateContactNumber , handleUpdateContact } ) {

  const [infoEditar , setInfoEditar] = useState(false)

  function mostrarInfoEditar () {
    setInfoEditar(!infoEditar)
  }


  return(
    <div className="container-info-contact">
      {/* header info  */}
      <header className="header__info-contact">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="info-contact-icon"
          onClick={clickBack}
        />
        <FontAwesomeIcon
          icon={faUserPen}
          className="info-contact-icon"
          onClick={mostrarInfoEditar}
        />

        <FontAwesomeIcon
          icon={faTrash}
          className="info-contact-icon trash"
          onClick={clickEliminarContacto}
        />
      </header>

      {/* section de info-contact-img  */}
      <section className="section__info-contact-img">
        <div className="container__info-contact-img">
          <img className="image" src={image}/>
        </div>
        <p className="contact-info-text-name">{name}</p>
        <p className="contact-info-text-number">+593 {number}</p>
        <div className="container__contact-info-iconos">

          <div className="container-info-contact-icon phone">
            <FontAwesomeIcon icon={faPhone} className="info-icono"/>
          </div>
          
          <div className="container-info-contact-icon video">
            <FontAwesomeIcon icon={faCamera} className="info-icono"/>
          </div>
          
          <div className="container-info-contact-icon gmail">
            <FontAwesomeIcon icon={faEnvelope} className="info-icono"/>
          </div>
          
        </div>
      </section>

      {/* DIV SEPARADOR  */}
      <div className="main__container-separete"></div>

      {/* SECCION DE INFO-DETAILS  */}
      <section className="section__info-details">
        <div className="container__info-details">
          <div className="info__container-details-text">
            <p className="details-text">Mobile</p>
            <p className="details-text-number">+593 {number}</p>
          </div>
          <div className="info__container-details-icons">
            <FontAwesomeIcon
              icon={faMessage}
              className="info-details-icon"
            />
            <FontAwesomeIcon
              icon={faPhone}
              className="info-details-icon"
            />
          </div>
        </div>

        {/* ---------------------------------------------------------  */}

        <div className="container__info-details">
          <div className="info__container-details-text">
            <p className="details-text">Home</p>
            <p className="details-text-number">+593 0923371372</p>
          </div>
          <div className="info__container-details-icons">
            <FontAwesomeIcon
              icon={faMessage}
              className="info-details-icon"
            />
            <FontAwesomeIcon
              icon={faPhone}
              className="info-details-icon"
            />
          </div>
        </div>
        
        {/* -----------------------------------------------------------------------  */}

        <div className="container__info-details">
          <div className="info__container-details-text">
            <p className="details-text">Home</p>
            <p className="details-text-number">+593 0923371372</p>
          </div>
          <div className="info__container-details-icons">
            <FontAwesomeIcon
              icon={faVideo}
              className="info-details-icon"
            />
          </div>
        </div>
      </section>

      <section className="section__info-icons">
        <div className="container__info-icon">
          <div className="info-icon location">
            <FontAwesomeIcon 
              icon={faLocation}
            />
          </div>
          
          <p className="info-icon-text">Location</p>
        </div>
        
        <div className="container__info-icon">
          <div className="info-icon qr">
            <FontAwesomeIcon 
              icon={faQrcode}
            />
          </div>
          
          <p className="info-icon-text">QR Code</p>
        </div>
        
        <div className="container__info-icon">
          <div className="info-icon share">
            <FontAwesomeIcon 
              icon={faShareFromSquare}
            />
          </div>
          
          <p className="info-icon-text">Share</p>
        </div>
      </section>

      <section className= {`section__info-editar ${infoEditar ? 'section__info-editar-visible' : ''}`} >
        <InfoEditar
          handleUpdateContact = {handleUpdateContact}
          setUpdateContactName = {setUpdateContactName}
          setUpdateContactNumber={setUpdateContactNumber}   
          updateContactName = {updateContactName}
          updateContactNumber = {updateContactNumber}    
          image={image}
          clickBackEditar={mostrarInfoEditar}
        />
      </section>
    </div>
  )
}


export default InfoContact