import AwaySlidePattern from "./AwaySlidePattern";
import logo from "../assets/Captura_de_tela_de_2024-06-06_15-11-44-removebg-preview.png";

const addWorldAndBrazilSlide = (pptxgen, slide, textos) => {
  // Adiciona conteúdo padrão ao slide
  const slidePattern = new AwaySlidePattern();
  slidePattern.addDefaultContent(pptxgen, slide, logo);

  // Configurações de texto para o título
  const titleOptions = {
    x: "0%",
    y: "26%",
    w: "50%",
    h: "10%",
    align: "left",
    fontSize: 34,
    fontFace: "Calibri",
    color: "FFFFFF",
    shadow: { type: "outer", color: "ed7d31", blur: 1, offset: 3, angle: 45, opacity: 1 },
    bold: false,
  };

  const titleOptions2 = {
    x: "0%",
    y: "26%",
    w: "50%",
    h: "10%",
    align: "left",
    fontSize: 34,
    fontFace: "Calibri",
    color: "FFFFFF",
    shadow: { type: "outer", color: "ed7d31", blur: 1, offset: 3, angle: 45, opacity: 1 },
    bold: false,
  };

  // Adiciona título "Brasil" na esquerda
  slide.addText("No Brasil:", { ...titleOptions, x: "5%" });

  // Adiciona título "No mundo" na direita
  slide.addText("No mundo:", { ...titleOptions2, x: "55%" });

  // Configurações de texto para os subtítulos
  const subtitleOptions = {
    x: "5.5%",
    y: "15%",
    w: "45%",
    h: "10%",
    align: "left",
    fontSize: 25,
    fontFace: "Congenial Black",
    color: "FFFFFF",
    bold: true
  };

  // Adiciona subtítulos e textos para "Brasil"
  slide.addText(`Cristãos: ${textos.cristaosNoBrasil}%`, { ...subtitleOptions, y: "40%" });
  slide.addText(`Evangélicos: ${textos.evangelicosNoBrasil}%`, { ...subtitleOptions, y: "50%" });

  // Adiciona subtítulos e textos para "No mundo"
  slide.addText(`Cristãos: ${textos.cristaosPeloMundo}%`, { ...subtitleOptions, x: "55.5%", y: "40%" });
  slide.addText(`Evangélicos: ${textos.evangelicosPeloMundo}%`, { ...subtitleOptions, x: "55.5%", y: "50%" });
};

export default addWorldAndBrazilSlide;
