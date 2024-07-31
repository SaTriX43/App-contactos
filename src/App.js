// 1.-Importamos 
import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
// -------COMPONENETES-------------- 
import ImagenContacto from './componentes/ImagenContacto';
import InfoContact from './componentes/InfoContact';
import AddContact from './componentes/AddContact';
import Contact from './componentes/contacto';
import Alphabet from './componentes/Alphabet';
// -----------IMAGENES------------------- 
import Jose from './imagenes/jose.png'
import User from './imagenes/user.png'


function App() {

  // variable booleana para mostrar seccionInfo 
  const [infoContact , setInfoContact] = useState(false)

  // Agregar contacto
  const [addContact , setAddContact] = useState(false) //variable booleana para mostrar apartado addContacto
  const [inputAddName , setInputAddName] = useState('') // variable que guarda el name
  const [inputAddNumber , setInputAddNumber] = useState('') // variable que guarda el number
  const [contacts , setContacts] = useState(
    [{id:1 , name:'Jose' , number:'0913114120' , image:Jose}]
  )// arreglo de objetos que guarda el name y number

  // --------------------------------------------------- 
  const[selectedContact , setSelectedContact] = useState(null)//variable que guarda
  // ----------------------------------------------------- 

  // Actualizar contacto 
  const [updateContactName , setUpdateContactName] = useState('')//variable que guarda el name en actualizarCotacto
  const [updateContactNumber , setUpdateContactNumber] = useState('')//variable que guarda el number en actualizarCotacto

  // Cambia el valor de addContact 
  function handleClickAddContact () {
    setAddContact(!addContact)//actualiza el valor boolean 
  }

  //maneja el click en Agregar
  function handleAddContact(newContact) {// parametro creado 
    setContacts([...contacts , newContact])//actauliza la variable contact object agrega uno nuevo y su cntenido newContact
    setInputAddName('')//actualiza el input name a ''
    setInputAddNumber('')//actualiza el input number a ''
    setAddContact(false)//oculta el apartado contact
  }

// ---------------------------------------------------
// Actualizar Contacto 
function handleUpdateContact() {
  // actualiza contacts itera sobre el crea contact
  setContacts(contacts.map((contact)=> (
    //si contact.id === selectedContact.id
    contact.id === selectedContact.id
    // si {...crea un nuevo object con valor , image: ingresa a contact y busca el image , name: valor de el nombre actualizado}
    // number: el valod actualizado de number}
    ? {...contacts , image: contact.image , name: updateContactName , number: updateContactNumber}
    //si no contact
    : contact
  )))
  
  
  setInfoContact(false)//oculta la seccion de contact
  setSelectedContact(null)//pone en null selectedContact
}



// --------------------------------------------- 
  // funcion click en un contacto 
  function handleClickContacto(contact) {//recibe un parametro contact
    // actualiza selectedContact con el contact 
    setSelectedContact(contact)
    setInfoContact(true)//muestra setInfoContact
  }

  // maneja el click en eliminar 
  function handleEliminarContacto() {
    // actualiza Contacts lo filtra dependiendo de la id de contact y el selectContact id
    setContacts(contacts.filter(contact => contact.id !== selectedContact.id));
    setInfoContact(false);//muestra el InfoContact
    setSelectedContact(null);//selectedContact en null
  }


  return (
    <div className="App">
      <div className='mobil-boton'></div>
      {/* header principal  */}
      <div className='pantalla'>
        <header className='main__header'>
          <div className='main__header-container-img'>
            <img className='image' src={Jose}/>
          </div>
          <p className='main__header-text'>Contactos</p>
          <FontAwesomeIcon className='main__header-icon' icon={faPlus} onClick={handleClickAddContact} />
        </header>

        {/* Apartado de input search */}
        <section className='main__section-input-search'>
          <FontAwesomeIcon className='main__input-search-icon' icon={faMagnifyingGlass}/>
          <input className='main__input-search' placeholder='Search'/>
        </section>

        {/* Apartado de imagenes contacto */}
        <section className='main__section-image-contact'>
          {/* Itera sobre contacts  y crea un contact
              crea componente <ImagenContacto/>
              key = {contact.id}
              name= {contact.name}
              number={contact.number}
              image={contact.image}
          */}
          {contacts.map((contact)=> (
            <ImagenContacto
              key={contact.id}
              name={contact.name}
              number={contact.number}
              image={contact.image}
            /> 
          ))}
          
          
        </section>
        
        {/* div con letra adentro  */}
        <div className='main__container-separete'>
          <p className='separete-text'>A</p>
        </div>

        {/* seccion de contactos */}
        <section className='main__section-contact'>
          <div className='main__section-container-contact'>
            {/* Itera sobre contacts y crea un contact
              llama al componente <Contact/>
                key={contact.id}
                name={contact.name}
                number={contact.number}
                image={contact.image}
                handleClick={() => handleClickContacto(contact)} = pasa como argumento contact para que pueda acceder dede f(HandleContact)
            */}
            {contacts.map((contact)=>(
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                image={contact.image}
                handleClick={() => handleClickContacto(contact)}
              />
            ))} 
          </div>
          <Alphabet/>
        </section>

            {/* se muestra cuando addContact es true y si no no se muestra  */}
        <section className={`main__section-add-contact ${addContact ? 'main__section-add-contact-visible' : ''}`}>
          {/* Crea un componente <AddContact/>  
              inputAddName={inputAddName}
              setInputAddName = {setInputAddName}
              inputAddNumber={inputAddNumber}
              setInputAddNumber = {setInputAddNumber}
              image={User}
              clickBackAddContact={handleClickAddContact} // desactiva la vision de addContact
              handleAddContact={handleAddContact}// llama a la funcion handleAddContact
          */}
          <AddContact
            inputAddName={inputAddName}
            setInputAddName = {setInputAddName}
            inputAddNumber={inputAddNumber}
            setInputAddNumber = {setInputAddNumber}
            image={User}
            clickBackAddContact={handleClickAddContact}
            handleAddContact={handleAddContact}
          />
        </section>
        
        {/* si selectedContact es true  */}
        {selectedContact && (
          // mustra cuando infoContact sea true 
          <section className={`main__section-info-contact ${infoContact ? 'main__section-info-contact-visible' : ''}`}>
            {/* Crear un componente <InfoContact/> 
                image={selectedContact.image}
                name={selectedContact.name}
                number={selectedContact.number}
                clickBack={() => setInfoContact(false)}//retrocede
                clickEliminarContacto={handleEliminarContacto}//elimina

                ---------------------------------
                handleUpdateContact = {handleUpdateContact}
                updateContactName = {updateContactName}
                updateContactNumber = {updateContactNumber}
                setUpdateContactName = {setUpdateContactName}
                setUpdateContactNumber = {setUpdateContactNumber}

            */}
            <InfoContact
              image={selectedContact.image}
              name={selectedContact.name}
              number={selectedContact.number}
              clickBack={() => setInfoContact(false)}
              clickEliminarContacto={handleEliminarContacto}

              // ---------------------------------------------------- 

              handleUpdateContact = {handleUpdateContact}
              updateContactName = {updateContactName}
              updateContactNumber = {updateContactNumber}
              setUpdateContactName = {setUpdateContactName}
              setUpdateContactNumber = {setUpdateContactNumber}
              
            />
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
