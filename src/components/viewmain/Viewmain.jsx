import React from "react";
import { Slider } from "../slider/Slider";

export const Viewmain = () => {
  return (
    <>
      <Slider
        imgArr={[
          "https://dsnyk1xc1sxw4.cloudfront.net/media/wysiwyg/1660664940_banner-desktop-lasagna-1280x381.webp",
          "https://dsnyk1xc1sxw4.cloudfront.net/media/wysiwyg/1663339808_banner-desktop-borde-de-queso-1280x381.webp",
          "https://dsnyk1xc1sxw4.cloudfront.net/media/wysiwyg/1659979216_banner-signature-hot-chicken-1280x381.webp",
          "https://dsnyk1xc1sxw4.cloudfront.net/media/wysiwyg/1657749783_beneficios-1280x381-banner.webp",
        ]}
      />

      <div className="details-container grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-8 px-[200px]">
        <div className="mezcla flex bg-white py-4 rounded-lg shadow-md">
          <div className="text-center">
            <img src="https://pe.littlecaesars.com/static/1656619996-site_newcheesethrow_550x370.png" />

            <h2 className="font-bold text-[22px] text-[#00795B]">QUESO</h2>
            <p>
              nuestra mezcla <br />
              emblemática
            </p>
          </div>
          <div className="text-center">
            <img src="https://pe.littlecaesars.com/static/1656620003-site_newdoughball_550x370.png" />
            <h2 className="font-bold text-[22px] text-[#00795B]">MASA</h2>
            <p>
              fresca hecha todos los <br />
              días
            </p>
          </div>
          <div className="text-center">
            <img src="https://pe.littlecaesars.com/static/1599762672-caesar-man-tomato-weights.png" />
            <h2 className="font-bold text-[22px] text-[#00795B]">SALSA</h2>
            <p>
              hecha con tomates <br />
              maduros de la huerta
            </p>
          </div>
        </div>

        <div className="bg-white flex h-[300px] justify-start flex-col items-center pt-4 xl:h-full relative rounded-lg shadow-md pb-14">
          <h2 className="text-[30px] font-lcscript">Hot-N-Ready</h2>
          <div className="text-center px-5 text-[20px] text-[#00795B] font-bold">
          LA PIZZA RECIÉN HECHA SALIDA DEL HORNO CUANDO ENTRAS. SIN LLAMAR. SIN ESPERAR.
          </div>
          <img
            className="w-[200px] lg:w-[36%] absolute bottom-0"
            src="https://pe.littlecaesars.com/static/1599765329-caesar-man-with-pizza.svg"
          />
        </div>
      </div>
    </>
  );
};
