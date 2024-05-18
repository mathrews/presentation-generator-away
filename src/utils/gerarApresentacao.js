import pptxgen from "pptxgenjs";
import addTitleSlide from "./titleSlide";
import AwaySlidePattern from "./AwaySlidePattern";
import addSlideText from "./awaySlideText";
import addWorldAndBrazilSlide from "./worldAndBrazilSlide";

const gerarApresentacao = (apresentacao) => {
  let pres = new pptxgen();

  // Adiciona o slide de título
  let slide = pres.addSlide();
  addTitleSlide(pptxgen, slide, apresentacao);

  // Função para adicionar um slide com título e texto
  const addCustomSlide = (title, text) => {
    let slide = pres.addSlide();
    const slidePattern = new AwaySlidePattern();
    slidePattern.addDefaultContent(pptxgen, slide);
    addSlideText(pptxgen, slide, title, text);
  };

  // Adiciona slides personalizados
  addCustomSlide("Onde vivem", apresentacao.ondeVivem);
  addCustomSlide("População", apresentacao.populacao);
  addCustomSlide("Idioma e Tradução", apresentacao.idiomaETraducao);
  addCustomSlide("Religião", apresentacao.religiao);
  addCustomSlide("Relação com o Cristianismo", apresentacao.relacaoComOCristianismo);

  // Adiciona slide "Brasil e No Mundo"
  let worldAndBrazilSlide = pres.addSlide();
  addWorldAndBrazilSlide(pptxgen, worldAndBrazilSlide, {
    cristaosNoBrasil: apresentacao.cristaosNoBrasil,
    evangelicosNoBrasil: apresentacao.evangelicosNoBrasil,
    cristaosPeloMundo: apresentacao.cristaosPeloMundo,
    evangelicosPeloMundo: apresentacao.evangelicosPeloMundo
  });

  // Salva a apresentação como arquivo PPTX
  pres.writeFile({
    fileName: `${apresentacao.nomeDoPovo}.pptx`
  })
  .then(fileName => {
    console.log(`Apresentação salva como: ${fileName}`);
  });
};

export default gerarApresentacao;
