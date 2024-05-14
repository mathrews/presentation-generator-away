import pptxgen from "pptxgenjs";

const gerarApresentacao = (apresentacao) => {
  // Caminho da imagem de fundo
  const imagePath = "https://raw.githubusercontent.com/Guimbo/presentation-generator-away/master/src/utils/background_image.png";

  // 1. Create a Presentation
  let pres = new pptxgen();

  // 2. Add a Slide to the presentation
  let slide = pres.addSlide();

  // 3. Add background image
  slide.background = { path: imagePath }
  // 4. Add text to the Slide
  slide.addText("Hello Slides", {
    x: 1.5,
    y: 1.5,
    color: "363636",
    fill: { color: "F1F1F1" },
    align: pres.AlignH.center,
  });

  // Save the presentation as a PPTX file
  pres.writeFile({
    fileName: `${apresentacao.titulo}.pptx`
  })
  .then(fileName => {
    console.log(`Presentation saved as: ${fileName}`);
  });
};

export default gerarApresentacao;
