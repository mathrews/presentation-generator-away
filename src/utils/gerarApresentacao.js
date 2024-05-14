import pptxgen from "pptxgenjs";

const gerarApresentacao = (apresentacao) => {
  // Caminho da imagem de fundo
  const imagePath = "https://raw.githubusercontent.com/Guimbo/presentation-generator-away/master/src/utils/background_image.png";

  // 1. Create a Presentation
  let pres = new pptxgen();

  // Configuração da fonte
  const fonteTitulo = { fontFace: "Arial", fontSize: 30, color: "FFFFFF", bold: true };
  const fonteTexto = { fontFace: "Calibri", fontSize: 25, color: "FFFFFF" };

  // 2. Add slides
  // Primeiro slide: Nome do povo, País e continente
  let slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("Nome do Povo:", { ...fonteTitulo });
  slide.addText(apresentacao.nomeDoPovo, { ...fonteTexto });
  slide.addText("País:", { ...fonteTitulo });
  slide.addText(apresentacao.pais, { ...fonteTexto });
  slide.addText("Continente:", { ...fonteTitulo });
  slide.addText(apresentacao.continente, { ...fonteTexto });

  // Segundo slide: Onde vivem
  slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("Onde Vivem:", { ...fonteTitulo });
  slide.addText(apresentacao.ondeVivem, { ...fonteTexto });

  // Terceiro slide: População
  slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("População:", { ...fonteTitulo });
  slide.addText(apresentacao.populacao, { ...fonteTexto });

  // Quarto slide: Idioma e tradução
  slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("Idioma e Tradução:", { ...fonteTitulo });
  slide.addText(apresentacao.idiomaETraducao, { ...fonteTexto });

  // Quinto slide: Religião
  slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("Religião:", { ...fonteTitulo });
  slide.addText(apresentacao.religiao, { ...fonteTexto });

  // Sexto slide: Relação com o cristianismo
  slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("Relação com o Cristianismo:", { ...fonteTitulo });
  slide.addText(apresentacao.relacaoComOCristianismo, { ...fonteTexto });

  // Sétimo slide: Cristãos e Evangélicos no Brasil e no mundo
  slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("Brasil", { ...fonteTitulo, x: 1, y: 1 });
  slide.addText("Cristãos no Brasil:", { ...fonteTitulo, x: 1, y: 2 });
  slide.addText(apresentacao.cristaosNoBrasil, { ...fonteTexto, x: 2, y: 2 });
  slide.addText("Evangélicos no Brasil:", { ...fonteTitulo, x: 1, y: 3 });
  slide.addText(apresentacao.evangelicosNoBrasil, { ...fonteTexto, x: 2, y: 3 });
  slide.addText("No mundo", { ...fonteTitulo, x: 6, y: 1 });
  slide.addText("Cristãos no mundo:", { ...fonteTitulo, x: 6, y: 2 });
  slide.addText(apresentacao.cristaosPeloMundo, { ...fonteTexto, x: 7, y: 2 });
  slide.addText("Evangélicos no mundo:", { ...fonteTitulo, x: 6, y: 3 });
  slide.addText(apresentacao.evangelicosPeloMundo, { ...fonteTexto, x: 7, y: 3 });

  // Oitavo slide: Introdução
  slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("Introdução:", { ...fonteTitulo });
  slide.addText(apresentacao.introducao, { ...fonteTexto });

  // Nono slide: Como vivem
  slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("Como Vivem:", { ...fonteTitulo });
  slide.addText(apresentacao.comoVivem, { ...fonteTexto });

  // Décimo slide: Em que acreditam
  slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("Em que Acreditam:", { ...fonteTitulo });
  slide.addText(apresentacao.emQueAcreditam, { ...fonteTexto });

  // Décimo primeiro slide: Intercessão
  slide = pres.addSlide();
  slide.background = { path: imagePath };
  slide.addText("Intercessão:", { ...fonteTitulo });
  slide.addText(apresentacao.intercessao, { ...fonteTexto });

  // Save the presentation as a PPTX file
  pres.writeFile({
    fileName: `${apresentacao.nomeDoPovo}.pptx`
  })
  .then(fileName => {
    console.log(`Presentation saved as: ${fileName}`);
  });
};

export default gerarApresentacao;
