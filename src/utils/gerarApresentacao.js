import pptxgen from "pptxgenjs";
import AwaySlidePattern from "./AwaySlidePattern";

const gerarApresentacao = (apresentacao) => {
  let pres = new pptxgen();
  let slide = pres.addSlide();

  // Adiciona conteúdo padrão ao slide
  const slidePattern = new AwaySlidePattern();
  slidePattern.addDefaultContent(pptxgen, slide);

  // Salva a apresentação como arquivo PPTX
  pres.writeFile({
    fileName: `${apresentacao.nomeDoPovo}.pptx`
  })
  .then(fileName => {
    console.log(`Apresentação salva como: ${fileName}`);
  });
};

export default gerarApresentacao;
