import AwaySlidePattern from "./AwaySlidePattern";

const addLargeTextSlide = (pptxgen, pres, title, text) => {
  const fontSize = 18;
  const fontFace = "Calibri";
  const color = "FFFFFF";

  // Função para adicionar texto em slides com formatação padrão
  const addSlideWithText = (title, text, text1) => {
    let slide = pres.addSlide();
    const slidePattern = new AwaySlidePattern();
    slidePattern.addDefaultContent(pptxgen, slide);

    slide.addText(title, {
      x: "1.6%",
      y: "27%",
      w: "99%",
      h: "0%",
      align: "left",
      fontSize: 40,
      fontFace: "Calibri",
      color: "FFFFFF",
      bold: true
    });

    slide.addText(text.trim(), {
      x: "1.6%",
      y: "32%",
      w: "50%",
      h: "70%",
      align: "left",
      valign: "top",
      fontSize: fontSize,
      fontFace: fontFace,
      color: color
    });

    slide.addText(text1.trim(), {
      x: "51.6%",
      y: "32%",
      w: "50%",
      h: "70%",
      align: "left",
      valign: "top",
      fontSize: fontSize,
      fontFace: fontFace,
      color: color
    });
  };
  
  // Função para dividir o texto em múltiplos slides ao detectar quebras de linha
  const addTextAcrossSlides = (title, text) => {
    const paragraphs = text.split(/\r?\n\r?\n/); // Considera duas quebras de linha seguidas como divisão de parágrafos
    if (paragraphs.length > 1) {
      for (let i = 0; i < paragraphs.length; i += 2) {
        const text1 = paragraphs[i];
        const text2 = paragraphs[i + 1];
        addSlideWithText(title, text1, text2);
      }
    }
  };


  addTextAcrossSlides(title, text);
};

export default addLargeTextSlide;
