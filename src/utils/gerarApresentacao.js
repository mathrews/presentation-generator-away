// src/utils/gerarApresentacao.js

import pptxgen from 'pptxgenjs';

const gerarApresentacao = (apresentacao) => {
  const pptx = new pptxgen();

  // Adiciona o slide com o texto "Hello Slides"
  pptx.addSlide({
    title: 'Hello Slides',
    addText: { text: 'Hello Slides', x: 1, y: 1, fontSize: 24, bold: true }
  });

  // Salva a apresentação como um arquivo PPTX
  pptx.writeFile(`${apresentacao.titulo}.pptx`);
};

export default gerarApresentacao;
