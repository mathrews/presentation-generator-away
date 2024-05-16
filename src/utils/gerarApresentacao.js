import pptxgen from "pptxgenjs";
import AwaySlidePattern from "./AwaySlidePattern";

const gerarApresentacao = (apresentacao) => {
  let pres = new pptxgen();
  let slide = pres.addSlide();

  // Adiciona conteúdo padrão ao slide
  const slidePattern = new AwaySlidePattern();
  slidePattern.addDefaultContent(pptxgen, slide);

  // Dimensões da imagem de fundo
  const imagemFundoWidth = 1280; // Largura da imagem de fundo em pixels
  const imagemFundoHeight = 720; // Altura da imagem de fundo em pixels

  // Adiciona o texto do campo "nome do povo" em uppercase no centro do slide
  const nomeDoPovoText = apresentacao.nomeDoPovo.toUpperCase(); // Transforma o texto em maiúsculas
  const nomeDoPovoTextOptions = {
    x: imagemFundoWidth / 2, // Posição X no centro do slide
    y: imagemFundoHeight / 2, // Posição Y no centro do slide
    w: "100%", // Largura igual à largura do slide
    h: "100%", // Altura igual à altura do slide
    align: pptxgen.TextAlignCenter, // Alinhamento centralizado
    fontSize: 80, // Tamanho da fonte
    fontFace: "Calibri", // Tipo de fonte
    color: "FFFFFF", // Cor do texto (branco)
    bold: true // Negrito
  };
  slide.addText(nomeDoPovoText, nomeDoPovoTextOptions);

  // Salva a apresentação como arquivo PPTX
  pres.writeFile({
    fileName: `${apresentacao.nomeDoPovo}.pptx`
  })
  .then(fileName => {
    console.log(`Apresentação salva como: ${fileName}`);
  });
};

export default gerarApresentacao;
