class AwaySlidePattern {
    addDefaultContent(pptx, slide) {
      // Caminho da imagem de fundo
      const imagePath = "https://raw.githubusercontent.com/Guimbo/presentation-generator-away/master/src/assets/background_image.png";
  
      // Caminho da imagem de canto esquerdo
      const cornerImagePath = "https://raw.githubusercontent.com/Guimbo/presentation-generator-away/master/src/assets/away_intercessao.png";
  
      slide.background = { path: imagePath };
  
      // Adicionando a imagem ao slide com as dimensões ajustadas
      const imageWidth = 500; // largura ajustada da imagem em pixels
      const imageHeight = 140; // altura da imagem em pixels
      const slideLayout = slide.layout || {}; // obtendo o layout do slide
      const slideWidth = slideLayout.width || 960; // largura do slide padrão
      const slideHeight = slideLayout.height || 540; // altura do slide padrão
      const imageWidthPercent = ((2/3) * imageWidth / slideWidth) * 100; // largura da imagem em porcentagem
      const imageHeightPercent = ((2/3) * imageHeight / slideHeight) * 100; // altura da imagem em porcentagem
      const imageXPercent = 2; // posição X da imagem em porcentagem
      const imageYPercent = 2; // posição Y da imagem em porcentagem
      slide.addImage({ path: cornerImagePath, w: `${imageWidthPercent}%`, h: `${imageHeightPercent}%`, x: `${imageXPercent}%`, y: `${imageYPercent}%` });
  
      // Adicionando um quadrado branco ao lado da imagem com distância de 3% e aumentando em 30pt
      const distancePercent = 3; // distância em porcentagem
      const squareWidthPercent = 100 - imageXPercent - imageWidthPercent - distancePercent; // largura do quadrado em porcentagem
      const squareHeightPercent = 5 / slideHeight * 100; // altura do quadrado em porcentagem
      const imageCenterYPercent = imageYPercent + (imageHeightPercent / 2); // centro vertical da imagem em porcentagem
      const squareCenterYPercent = imageCenterYPercent; // centro vertical do quadrado deve ser o mesmo da imagem
      const squareYPercent = squareCenterYPercent - (squareHeightPercent / 2); // posição Y do quadrado em porcentagem
      slide.addShape("rect", { x: `${imageXPercent + imageWidthPercent + distancePercent}%`, y: `${squareYPercent}%`, w: `${squareWidthPercent}%`, h: `${squareHeightPercent}%`, fill: { color: "FFFFFF" } });
  
      // Adicionando texto na parte inferior do slide
      const textoXPercent = imageXPercent; // borda esquerda alinhada com a borda esquerda da imagem
      const textoYPercent = 100 - 10; // 10pt de distância do bottom do slide
      slide.addText("Around the World Announcing Yeshua", { x: `${textoXPercent}%`, y: `${textoYPercent}%`, w: "44%", h: "10%", align: pptx.AlignLeft, fontSize: 18, fontFace: "Calibri", color: "FFFFFF", bold: true });
  
      // Adicionando um quadrado branco ao lado direito do texto com distância de 3% e aumentando em 30pt
      const squareTextWidthPercent = 100 - textoXPercent - 44; // largura do quadrado em porcentagem
      const squareTextHeightPercent = squareHeightPercent; // altura do quadrado igual ao do quadrado superior
      const squareTextCenterYPercent = textoYPercent - (squareHeightPercent / 2) + 5.5; // centro vertical do quadrado igual ao do texto
      const squareTextXPercent = textoXPercent + 44 + distancePercent; // posição X do quadrado em porcentagem
      slide.addShape("rect", { x: `${squareTextXPercent}%`, y: `${squareTextCenterYPercent}%`, w: `${squareTextWidthPercent}%`, h: `${squareTextHeightPercent}%`, fill: { color: "FFFFFF" } });
    }
  }
  
  export default AwaySlidePattern;
  