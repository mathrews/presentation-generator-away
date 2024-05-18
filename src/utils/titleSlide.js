import AwaySlidePattern from "./AwaySlidePattern"; // Importação adicionada

const addTitleSlide = (pptxgen, slide, apresentacao) => {
  // Adiciona conteúdo padrão ao slide
  const slidePattern = new AwaySlidePattern();
  slidePattern.addDefaultContent(pptxgen, slide);

  // Adiciona o texto do campo "nome do povo" em uppercase no centro do slide
  const nomeDoPovoText = apresentacao.nomeDoPovo.toUpperCase(); // Transforma o texto em maiúsculas
  const nomeDoPovoTextOptions = {
    x: "0%", // Posição X no centro do slide
    y: "-10%", // Posição Y no centro do slide
    w: "100%", // Largura igual à largura do slide
    h: "100%", // Altura igual à altura do slide
    align: "center", // Alinhamento centralizado
    fontSize: 80, // Tamanho da fonte
    fontFace: "Calibri", // Tipo de fonte
    color: "FFFFFF", // Cor do texto (branco)
    bold: true // Negrito
  };
  slide.addText(nomeDoPovoText, nomeDoPovoTextOptions);

  // Adiciona o texto "País - Continente" logo abaixo do título
  const paisContinenteText = `${apresentacao.pais} - ${apresentacao.continente}`;
  const paisContinenteTextOptions = {
    x: "0%", // Posição X no centro do slide
    y: "10%", // Posição Y no centro do slide
    w: "100%", // Largura igual à largura do slide
    h: "100%", // Altura igual à altura do slide
    align: "center", // Alinhamento centralizado
    fontSize: 40, // Tamanho da fonte
    fontFace: "Calibri", // Tipo de fonte
    color: "FFFFFF", // Cor do texto (branco)
    bold: true // Negrito
  };
  slide.addText(paisContinenteText, paisContinenteTextOptions);
};

export default addTitleSlide;
