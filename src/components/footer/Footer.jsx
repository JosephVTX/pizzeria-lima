import React from "react";

import libro from "./img/libro.png"
export const Footer = () => {
  return (
    <>
      <footer className="font-antique-olive-condensed font-light mt-[20px] p-[30px] w-full bg-[#000] text-white flex justify-between items-center">
        <div className="details">
          <div className="restaurant">
            <h2 className="font-bold py-[2px] text-[20px]">
              LITTLE MIRAFLORES PIZZERIA
            </h2>
            <p className="py-[2px]">
              Lunes a Sabados de 12:30 P.M. a 10.30 P.M.
            </p>
            <p className="py-[2px]">Dirección los Alisos 2456</p>
          </div>

          <div className="delivery">
            <h2 className="font-bold py-[2px] text-[20px]">LITTLE DELIVERY</h2>
            <p className="py-[2px]">
              Lunes a Sábado de 12:00 P.M. a 10:00 P.M.
            </p>
            <p className="py-[2px]">
              Domingos y Feriados de 11:30 A.M. a 10:00 P.M.
            </p>
            <p className="py-[2px] mt-[10px]">
              {"PIDE LLAMANDO AL: (01) 500 - 6188"}
            </p>
          </div>

          <div className="atencion">
            <h2 className="font-bold py-[2px] text-[20px]">
              ATENCIÓN AL CLIENTE
            </h2>
            <p className="py-[2px]">{"TELÉFONO: 986 592 177"}</p>
          </div>
        </div>

        <div className="book-claimer h-[150px] w-[200px]">

            <img className="h-full w-full" src={libro}/>
        </div>
      </footer>
    </>
  );
};