import backgroundImage from "../assets/background_image.png";

class AwaySlidePattern {
  addDefaultContent(pptx, slide, logo) {
      // Paths to images
      const imagePath = backgroundImage;
      const cornerImagePath = logo;

      // Set slide background image
      slide.background = { path: imagePath };

      // Dimensions for the corner image
      let imageWidth = 750;
      let imageHeight = 126;
      
      if (logo === "/static/media/Captura_de_tela_de_2024-06-06_15-11-44-removebg-preview.cc53139bd5133df2b58c.png") {
          imageWidth = 500;
          imageHeight = 140;
      }

      const slideWidth = 960;
      const slideHeight = 540;

      // Image position and size as a percentage of the slide
      const imageWidthPercent = (2 / 3) * imageWidth / slideWidth * 100;
      const imageHeightPercent = (2 / 3) * imageHeight / slideHeight * 100;
      const imageXPercent = 1;
      const imageYPercent = 2;

      slide.addImage({ path: cornerImagePath, w: `${imageWidthPercent}%`, h: `${imageHeightPercent}%`, x: `${imageXPercent}%`, y: `${imageYPercent}%` });

      // Adding a white rectangle next to the image
      const distancePercent = 3;
      const squareWidthPercent = 100 - imageXPercent - imageWidthPercent - distancePercent;
      const squareHeightPercent = 5 / slideHeight * 100;
      const imageCenterYPercent = imageYPercent + imageHeightPercent / 2;
      const squareYPercent = imageCenterYPercent - squareHeightPercent / 2;

      slide.addShape("rect", { x: `${imageXPercent + imageWidthPercent + distancePercent}%`, y: `${squareYPercent}%`, w: `${squareWidthPercent}%`, h: `${squareHeightPercent}%`, fill: { color: "FFFFFF" } });

      // Adding text at the bottom of the slide
      const textoXPercent = imageXPercent;
      const textoYPercent = 100 - 10;
      slide.addText("Around the World Announcing Yeshua", { x: `${textoXPercent}%`, y: `${textoYPercent}%`, w: "44%", h: "10%", align: pptx.AlignLeft, fontSize: 14, fontFace: "Calibri", color: "FFFFFF", bold: true });

      // Adding a white rectangle next to the text
      const textWidthPercent = 44;
      let availableWidthPercent = 100 - textoXPercent - textWidthPercent - distancePercent;
      const squareTextHeightPercent = squareHeightPercent;
      const squareTextCenterYPercent = textoYPercent - squareHeightPercent / 2 + 5.5;
      const squareTextXPercent = textoXPercent + textWidthPercent + distancePercent;

      // Ensure the white rectangle next to the text does not overflow the slide
      if (squareTextXPercent + availableWidthPercent > 100) {
          availableWidthPercent = 100 - squareTextXPercent;
      }

      slide.addShape("rect", { x: `${squareTextXPercent}%`, y: `${squareTextCenterYPercent}%`, w: `${availableWidthPercent}%`, h: `${squareTextHeightPercent}%`, fill: { color: "FFFFFF" } });
  }
}

export default AwaySlidePattern;