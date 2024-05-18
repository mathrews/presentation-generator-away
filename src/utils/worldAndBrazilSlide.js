import AwaySlidePattern from "./AwaySlidePattern";

const addWorldAndBrazilSlide = (pptxgen, slide, textos) => {
  // Adiciona conteúdo padrão ao slide
  const slidePattern = new AwaySlidePattern();
  slidePattern.addDefaultContent(pptxgen, slide);

  // Configurações de texto para o título
  const titleOptions = {
    x: "0%",
    y: "30%",
    w: "50%",
    h: "10%",
    align: "left",
    fontSize: 40,
    fontFace: "Calibri",
    color: "FFFFFF",
    bold: true
  };

  // Adiciona título "Brasil" na esquerda
  slide.addText("No Brasil", { ...titleOptions, x: "5%" });

  // Adiciona título "No mundo" na direita
  slide.addText("No mundo", { ...titleOptions, x: "55%" });

  // Configurações de texto para os subtítulos
  const subtitleOptions = {
    x: "5.5%",
    y: "15%",
    w: "45%",
    h: "10%",
    align: "left",
    fontSize: 25,
    fontFace: "Calibri",
    color: "FFFFFF",
    bold: false
  };

  // Adiciona subtítulos e textos para "Brasil"
  slide.addText(`Cristãos: ${textos.cristaosNoBrasil}`, { ...subtitleOptions, y: "40%" });
  slide.addText(`Evangélicos: ${textos.evangelicosNoBrasil}`, { ...subtitleOptions, y: "50%" });

  // Adiciona subtítulos e textos para "No mundo"
  slide.addText(`Cristãos: ${textos.cristaosPeloMundo}`, { ...subtitleOptions, x: "55.5%", y: "40%" });
  slide.addText(`Evangélicos: ${textos.evangelicosPeloMundo}`, { ...subtitleOptions, x: "55.5%", y: "50%" });
};

export default addWorldAndBrazilSlide;
