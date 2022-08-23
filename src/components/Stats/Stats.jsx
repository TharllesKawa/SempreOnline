import React from "react";

import { SiInternetarchive } from "react-icons/si";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAdminPanelSettings, MdOutlineLocalLibrary } from "react-icons/md";
import { BsShop } from "react-icons/bs";

import "./Stats.css";

const Stats = () => {
  return (
    <div className="container-fluid">
      <h1>
        POR QUE <br></br>A <span>SEMPREONLINE?</span>
      </h1>
      <div className="stats-container">
        
        <div className="container-stats">
          <div class="card w-55">
            <div class="card-body">
              <h5 class="card-title">
                <SiInternetarchive />
              </h5>
              <p class="card-text">
                Servidores do Google, Facebook e Netflix dentro da nossa
                rede.
              </p>
            </div>
          </div>

          <div class="card w-55">
            <div class="card-body">
              <h5 class="card-title">
                <RiCustomerService2Fill />
              </h5>
              <p class="card-text">
                Atendimento das redes sociais: Facebook, Instagram e
                Whatsapp.
              </p>
            </div>
          </div>
        </div>

        <div className="container-stats">
          <div class="card w-55">
            <div class="card-body">
              <h5 class="card-title">
                <MdAdminPanelSettings />
              </h5>
              <p class="card-text">
                Único provedor a contar com um Administrador de Redes com
                a certificação treiner, ou seja, a máxima da próxima
                Mikrotik.
              </p>
            </div>
          </div>

          <div class="card w-55">
            <div class="card-body">
              <h5 class="card-title">
                <BsShop />
              </h5>
              <p class="card-text">
                Lojas Físicas, atendimento presencial, mais humano e
                atencioso, onde os clientes tem condições de fazer
                solicitações e tirar dúvidas de forma rápida.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="stats-location">
        <div className="stats-location-container">
          <MdOutlineLocalLibrary />
          <div className='stats-text'>
            <h3>Além da nossa central, atualmente possuímos 17 lojas físicas</h3>
            <p>Anápolis, Carmo do Rio Verde, Ceres, Goianésia, Goiânia, Inhumas, Itaberaí, Itapaci, Itapuranga, Jaraguá, Nova Glória, Petrolina de Goiás, Pirenópolis, Rubiataba, São Francisco de Goiás, Trindade e Uruana.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
