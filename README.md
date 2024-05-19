# Gerador de Apresentações PPTX

Este projeto é uma aplicação em React que permite aos usuários gerar apresentações em PowerPoint (.pptx) a partir de dados inseridos em um formulário. A aplicação é projetada para facilitar a criação de apresentações sobre povos e suas características, com base nas informações fornecidas.

## Funcionalidades

- Formulário para inserção de dados sobre um povo, incluindo informações como nome, país, continente, onde vivem, população, idioma, religião, relação com o cristianismo, entre outros.
- Validação de campos obrigatórios para garantir que todas as informações necessárias sejam fornecidas.
- Botão para limpar o formulário, permitindo ao usuário reiniciar o preenchimento dos dados.
- Geração automática de uma apresentação em PowerPoint (.pptx) com base nos dados fornecidos.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construção da interface do usuário.
- react-icons: Biblioteca de ícones para React.
- pptxgenjs: Biblioteca para gerar arquivos PowerPoint em JavaScript.
- CSS: Estilização da aplicação.


### Componentes

- **Formulario.js**: Componente principal que contém o formulário para inserção dos dados e lógica para geração da apresentação.
- **InputField.js**: Componente para campos de entrada de texto.
- **TextAreaField.js**: Componente para campos de texto maiores (textarea).
- **Button.js**: Componente para botões de ação (Limpar e Gerar).

### Estilos

- **Formulario.css**: Arquivo de estilo para o componente de formulário.

### Utilitários

- **gerarApresentacao.js**: Função que gera a apresentação em PowerPoint com base nos dados fornecidos pelo usuário.

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/Guimbo/presentation-generator-away
```

2. Navegue até o diretório do projeto:

```bash
cd presentation-generator-away
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie a aplicação:

```bash
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Como Usar

1. Preencha todos os campos do formulário com as informações sobre o povo que deseja criar a apresentação.
2. Clique no botão "Gerar" para criar a apresentação em PowerPoint.
3. Se desejar limpar todos os campos, clique no botão "Limpar".

## Contribuição

Se desejar contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch para a sua feature ou correção de bug (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Envie suas alterações para o repositório remoto (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato com [seu-email@dominio.com](mailto:seu-email@dominio.com).
