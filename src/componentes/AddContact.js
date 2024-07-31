// importamos 
import React, { useState } from "react";
import '../estilos/AddContact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// crea componente  <AddContact/>
function AddContact( { image  , clickBackAddContact , inputAddName , inputAddNumber , setInputAddName , setInputAddNumber, handleAddContact } ) {
  // crea una variable para guardar imagen 
  const [selectedImage, setSelectedImage] = useState(null);

  // maneja el conseguir la imagen 
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }


  // maneja el click en agregar 
  function handleClickAgregar(e) {
    // previene la carga automatica 
    e.preventDefault();
    // crea un objeto newContact con 
    /*
      id: fecha actual 
      name:el prop inputAddName
      number:el prop inputAddNumber
      image :la variable selectedImage o || image
    */ 
    const newContact = {
      id: Date.now(),
      name: inputAddName,
      number: inputAddNumber,
      image: selectedImage || image
    };
    handleAddContact(newContact);//llama a funcion con el argumento newContact 
  }

  // actualiza el valor de inputAddName 
  function updateValueInputName(e) {
    setInputAddName(e.target.value);
  }

  // actualiza el valor de inputAddNumber
  function updateValueInputNumber(e) {
    setInputAddNumber(e.target.value);
  }

  return (
    <div className="container__add-contact">
      <h2>Agregar contacto</h2>
      <div className="container__add-contact-image">
        <img className="image" src={selectedImage || image} alt="Contact" />
        <div className="add-contact-fondo-img">
          <FontAwesomeIcon icon={faPlus} className="add-contact-icon" />
        </div>
      </div>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      <form className="form__add-contact">
        <div className="form__add-contact-container">
          <label htmlFor="name">Nombre</label>
          <input
            placeholder="Ingrese un nombre"
            type="text"
            id="name"
            className="info-contact__input contact__input-name"
            onChange={updateValueInputName}
            value={inputAddName}
          />
        </div>

        <div className="form__add-contact-container">
          <label htmlFor="number">Number</label>
          <input
            placeholder="Ingrese un numero"
            type="number"
            id="number"
            className="info-contact__input contact__input-number"
            onChange={updateValueInputNumber}
            value={inputAddNumber}
          />
        </div>

        <button className="info-contact__button" onClick={handleClickAgregar}>Agregar</button>
      </form>

      <div className="info-contact__close" onClick={clickBackAddContact}>X</div>
    </div>
  );
}

export default AddContact;
