import pptxgen from "pptxgenjs";
import addTitleSlide from "./titleSlide";
import AwaySlidePattern from "./AwaySlidePattern"; // Importação adicionada
import addSlideText from "./awaySlideText"; // Importação adicionada

const gerarApresentacao = (apresentacao) => {
  let pres = new pptxgen();
  
  // Adiciona o slide de título
  let slide = pres.addSlide();
  addTitleSlide(pptxgen, slide, apresentacao);

  // Adiciona um novo slide com o título "Onde vivem" e o texto desse campo
  let ondeVivemSlide = pres.addSlide();

  // Adiciona conteúdo padrão ao slide "Onde vivem"
  const slidePattern = new AwaySlidePattern();
  slidePattern.addDefaultContent(pptxgen, ondeVivemSlide);

  // Adiciona o título e o texto ao slide "Onde vivem" usando as configurações de awaySlideText
  addSlideText(pptxgen, ondeVivemSlide, "Onde vivem", apresentacao.ondeVivem);

  // Salva a apresentação como arquivo PPTX
  pres.writeFile({
    fileName: `${apresentacao.nomeDoPovo}.pptx`
  })
  .then(fileName => {
    console.log(`Apresentação salva como: ${fileName}`);
  });
};

export default gerarApresentacao;
