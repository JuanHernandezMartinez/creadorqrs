import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./App.css";
import { DownloadService } from "./services/DownloadService";

export const Formulario = () => {
  const service = new DownloadService();
  const [formulario, setFormulario] = useState({
    nombre: "https://",
  });
  const formatos = ['png', 'jpeg', 'svg']
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleDownload = (format) => {
    const qrCodeElement = document.getElementById("qrcode");
    console.log("Formato a descargar: ", format)
    if (qrCodeElement) {

      switch(format){
        case 'png': service.downloadPng(qrCodeElement, formulario);
        case 'jpeg': service.downloadJpeg(qrCodeElement, formulario);
        case 'svg': service.downloadSvg(qrCodeElement, formulario);
      }

      // if(format === 'png'){
      //   downloadPng(qrCodeElement);
      //   return;
      // }
      // else if(format === 'jpeg'){
      //   downloadJpeg(qrCodeElement);
      //   return;
      // }
    }
  };

  return (
    <div>
      <form>
        <h1>
          <label htmlFor="nombre">Introduczca la URL</label>
        </h1>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={formulario.nombre}
          onChange={handleChange}
        />
      </form>
      <div className="qr">
        <QRCodeSVG id="qrcode" className="qrcode" value={formulario.nombre} />
      </div>
      <div style={{display: 'flex', flexDirection:'row', justifySelf:'center'}}>
        {formatos.map((formato, index)=>(
          <div key={index} style={{padding:'5px'}}>
            <button onClick={() => handleDownload(formato)}>Descargar <b>{formato.toUpperCase()}</b></button>
          </div>
        ))}
      </div>
    </div>
  );
};
