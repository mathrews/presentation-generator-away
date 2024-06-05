# Use uma imagem base do Node.js
FROM node

# Define o diretório de trabalho no container
WORKDIR /away

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Define a porta que a aplicação irá usar
ENV PORT=3006

# Compila a aplicação para produção
RUN npm run build

# Expõe a porta definida
EXPOSE 3006

# Comando para iniciar a aplicação
CMD ["npm", "start"]