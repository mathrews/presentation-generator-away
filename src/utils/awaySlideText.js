const addSlideText = (pptx, slide, title, text) => {
  // Adiciona o título ao slide
    slide.addText(title, {
        x: "0%",
        y: "20%",
        w: "30%",
        h: "12%",
        align: "left",
        fontSize: 32,
        fontFace: "Congenial Black",
        color: "FFFFFF",
        bold: true,
        fill: { color: "b4c7e9" },
        shadow: { type: "outer", color: "000000", blur: 1, offset: 1, angle: 45, opacity: 0.5 },
        line:{ width:'2', color:'A9A9A9' }
    });

    // Adiciona o texto ao slide
    slide.addText(text, {
        x: "0%",
        y: "32%",
        w: "99%",
        h: "34%",
        align: "left",
        valign: "top",
        fontSize: 24,
        fontFace: "Calibri",
        color: "FFFFFF",
    });
};

export default addSlideText;
