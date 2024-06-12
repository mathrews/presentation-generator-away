import AwaySlidePattern from "./AwaySlidePattern";
import logo from "../assets/Captura_de_tela_de_2024-06-06_15-12-05-removebg-preview.png";

const addLargeTextSlide = (pptxgen, pres, title, text) => {
    const fontSize = 18;
    const fontFace = "Calibri";
    const color = "FFFFFF";

    // Função para adicionar texto em slides com formatação padrão
    const addSlideWithText = (title, text, text1 = "") => {
        let slide = pres.addSlide();
        const slidePattern = new AwaySlidePattern();
        slidePattern.addDefaultContent(pptxgen, slide, logo);

        const optTitle = {
            x: "0%",
            y: "20%",
            w: "50%",
            h: "12%",
            align: "left",
            fontSize: 32,
            fontFace: "Congenial Black",
            color: "FFFFFF",
            bold: true,
            fill: { color: "B4C7E9" },
            shadow: { type: "outer", color: "000000", blur: 1, offset: 1, angle: 45, opacity: 0.5 },
        };

        if (title === "Religião e Cristianismo") {
          slide.addText(title, { ...optTitle, w: "58%" });
        } else {
          slide.addText(title, { ...optTitle });
        }

        const optText = {
            x: "0%",
            y: "32%",
            w: "50%",
            h: "34%",
            align: "left",
            valign: "top",
            fontSize: fontSize,
            fontFace: fontFace,
            color: color,
        };

        slide.addText(text.trim(), { ...optText });

        const optText1 = {
            x: "50%",
            y: "32%",
            w: "50%",
            h: "34%",
            align: "left",
            valign: "top",
            fontSize: fontSize,
            fontFace: fontFace,
            color: color,
        };

        slide.addText(text1.trim(), { ...optText1 });
    };

    // Função para dividir o texto em múltiplos slides ao detectar quebras de linha
    const addTextAcrossSlides = (title, text) => {
        const paragraphs = text.split(/\r?\n\r?\n/); // Considera duas quebras de linha seguidas como divisão de parágrafos
        console.log(paragraphs);
        if (paragraphs.length > 1) {
            for (let i = 0; i < paragraphs.length; i += 2) {
                const text1 = paragraphs[i];
                const text2 = paragraphs[i + 1];
                addSlideWithText(title, text1, text2);
            }
        } else {
            addSlideWithText(title, paragraphs[0]);
        }
    };

    addTextAcrossSlides(title, text);
};

export default addLargeTextSlide;
