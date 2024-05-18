import pptxgen from "pptxgenjs";
import addTitleSlide from "./titleSlide";
import AwaySlidePattern from "./AwaySlidePattern";
import addSlideText from "./awaySlideText";
import addWorldAndBrazilSlide from "./worldAndBrazilSlide";
import addLargeTextSlide from "./largeTextSlide";
import LogoSlide from "./logoSlide";

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

  // Adiciona slides adicionais com tratamento especial para textos longos
  addLargeTextSlide(pptxgen, pres, "Introdução", apresentacao.introducao);
  addLargeTextSlide(pptxgen, pres, "Como vivem", apresentacao.comoVivem);
  addLargeTextSlide(pptxgen, pres, "Em que acreditam", apresentacao.emQueAcreditam);
  addLargeTextSlide(pptxgen, pres, "Intercessão", apresentacao.intercessao);

  // Adiciona slide de logo
  let logoSlide = pres.addSlide();
  const logoSlidePattern = new LogoSlide();
  logoSlidePattern.addContent(pptxgen, logoSlide);

  // Salva a apresentação como arquivo PPTX
  pres.writeFile({
    fileName: `${apresentacao.nomeDoPovo}.pptx`
  })
  .then(fileName => {
    console.log(`Apresentação salva como: ${fileName}`);
  });
};

export default gerarApresentacao;
