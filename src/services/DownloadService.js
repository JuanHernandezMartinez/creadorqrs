import * as htmlToImage from 'html-to-image'
import { saveAs } from 'file-saver';
export class DownloadService {

    constructor(){}

  downloadPng(qrCodeElement, formulario) {
    htmlToImage
      .toPng(qrCodeElement)
      .then(function (blob) {
        saveAs(blob, `${formulario.nombre.toString().split("://")[1]}.png`);
      })
      .catch(function (error) {
        console.error("Error saving image:", error);
      });
  }

  downloadJpeg(qrCodeElement, formulario) {
    htmlToImage
      .toJpeg(qrCodeElement)
      .then(function (blob) {
        saveAs(blob, `${formulario.nombre.toString().split("://")[1]}.jpeg`);
      })
      .catch(function (error) {
        console.error("Error saving image:", error);
      });
  }

  downloadSvg(qrCodeElement, formulario) {
    htmlToImage
      .toSvg(qrCodeElement)
      .then(function (blob) {
        saveAs(blob, `${formulario?.nombre.toString().split("://")[1]}.svg`);
      })
      .catch(function (error) {
        console.error("Error saving image:", error);
      });
  }

}
