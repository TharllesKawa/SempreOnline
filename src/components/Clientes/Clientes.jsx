import React from "react";

import cliente1 from "../../assets/cliente1.png";
import cliente2 from "../../assets/cliente2.png";
import cliente3 from "../../assets/cliente3.png";

import iphone from "../../assets/iphone.png";
import "./Clientes.css";

function Clientes() {
  return (
    <div>
      <div className="cliente-container">
        <h1>
          O QUE <br></br>NOSSOS <span>CLIENTES</span>
          <br></br>ESTÃO DIZENDO?
        </h1>

        <figure>
            <img src="https://media.giphy.com/media/JjzEFFsdokOaSufldL/giphy.gif" alt="" />
        </figure>

      </div>
    </div>
  );
}

export default Clientes;
