import pptxgen from "pptxgenjs";

const gerarApresentacao = (apresentacao) => {
  // Caminho da imagem de fundo
  const imagePath = "https://raw.githubusercontent.com/Guimbo/presentation-generator-away/master/src/utils/background_image.png";

  // Caminho da imagem de canto esquerdo
  const cornerImagePath = "https://raw.githubusercontent.com/Guimbo/presentation-generator-away/master/src/utils/away_intercessao.png";

  // 1. Create a Presentation
  let pres = new pptxgen();

  // 2. Add slides
  // Primeiro slide: Nome do povo, País e continente
  let slide = pres.addSlide();
  slide.background = { path: imagePath };

  // Adicionando a imagem ao slide com as dimensões ajustadas
  const imageWidth = 500; // largura ajustada da imagem em pixels
  const imageHeight = 140; // altura da imagem em pixels
  const slideLayout = pres.layout || {}; // obtendo o layout do slide
  const slideWidth = slideLayout.width || 960; // largura do slide padrão
  const slideHeight = slideLayout.height || 540; // altura do slide padrão
  const imageWidthPercent = ((2/3) * imageWidth / slideWidth) * 100; // largura da imagem em porcentagem
  const imageHeightPercent = ((2/3) * imageHeight / slideHeight) * 100; // altura da imagem em porcentagem
  const imageXPercent = 2; // posição X da imagem em porcentagem
  const imageYPercent = 2; // posição Y da imagem em porcentagem
  slide.addImage({ path: cornerImagePath, w: `${imageWidthPercent}%`, h: `${imageHeightPercent}%`, x: `${imageXPercent}%`, y: `${imageYPercent}%` });

  // Adicionando um quadrado branco ao lado da imagem com 5pt de altura
  const squareWidthPercent = 100 - imageXPercent - imageWidthPercent; // largura do quadrado em porcentagem
  const squareHeightPercent = 5 / slideHeight * 100; // altura do quadrado em porcentagem
  const imageCenterYPercent = imageYPercent + (imageHeightPercent / 2); // centro vertical da imagem em porcentagem
  const squareCenterYPercent = imageCenterYPercent; // centro vertical do quadrado deve ser o mesmo da imagem
  const squareYPercent = squareCenterYPercent - (squareHeightPercent / 2); // posição Y do quadrado em porcentagem
  slide.addShape(pres.shapes.RECTANGLE, { x: `${imageXPercent + imageWidthPercent}%`, y: `${squareYPercent}%`, w: `${squareWidthPercent}%`, h: `${squareHeightPercent}%`, fill: { color: "FFFFFF" } });

  // Save the presentation as a PPTX file
  pres.writeFile({
    fileName: `${apresentacao.nomeDoPovo}.pptx`
  })
  .then(fileName => {
    console.log(`Presentation saved as: ${fileName}`);
  });
};

export default gerarApresentacao;
