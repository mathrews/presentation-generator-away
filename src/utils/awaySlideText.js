const addSlideText = (pptxgen, slide, title, text) => {
    // Adiciona o título ao slide
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
  
    // Adiciona o texto ao slide
    slide.addText(text, {
      x: "1.6%", 
      y: "37%", 
      w: "99%", 
      h: "70%", 
      align: "left", 
      valign: "top",
      fontSize: 25, 
      fontFace: "Calibri", 
      color: "FFFFFF"
    });
  };
  
  export default addSlideText;
  