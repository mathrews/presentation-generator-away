import logo from "../assets/away_logo.png"
import intercessao_logo from "../assets/intercessao_logo.png"
import background from "../assets/background_image.png"

class LogoSlide {
    constructor() {
      

      this.awayLogoImage = {
        path: logo,
        x: "10%",
        y: "10%",
        w: "80%",
        h: "40%"
      }; // development
      
     

      this.intercessaoLogoImage = {
        path: intercessao_logo,
        x: "15%",
        y: "53%",
        w: "70%",
        h: "40%"
      }; // development

      this.backgroundImagePath = background; // development
    }
  
    // Adiciona as imagens e imagem de fundo ao slide
    addContent(pptxgen, slide) {
      // Adiciona a imagem de fundo
      slide.background = { path: this.backgroundImagePath };

      // Adiciona as imagens
      slide.addImage(this.awayLogoImage);
      slide.addImage(this.intercessaoLogoImage);
    }
  }
  
  export default LogoSlide;
