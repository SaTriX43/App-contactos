import React, { useState } from "react";
import '../estilos/Alphabet.css'

function Alphabet() {

  const [abecedario , setAbecedario] = useState([
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]);

  return (
    <div className="container__Alphabet">
      {abecedario.map((letter, index) => (
        <p className="Alphabet-text" key={index}>{letter}</p>
      ))}
    </div>
  );
}

export default Alphabet;
