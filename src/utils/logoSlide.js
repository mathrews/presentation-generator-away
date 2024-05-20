class LogoSlide {
    constructor() {
      // Configurações das imagens
      this.awayLogoImage = {
        path: "https://raw.githubusercontent.com/Guimbo/presentation-generator-away/master/src/assets/away_logo.png",
        x: "10%",
        y: "10%",
        w: "80%",
        h: "40%"
      };
  
      this.intercessaoLogoImage = {
        path: "https://raw.githubusercontent.com/Guimbo/presentation-generator-away/master/src/assets/intercessao_logo.png",
        x: "15%",
        y: "53%",
        w: "70%",
        h: "40%"
      };
  
      // Configuração da imagem de fundo
      this.backgroundImagePath = "https://raw.githubusercontent.com/Guimbo/presentation-generator-away/master/src/assets/background_image.png";
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
