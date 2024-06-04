FROM node AS builder
WORKDIR /src
COPY ./package.json .
RUN npm install

# app
FROM node

EXPOSE 80

WORKDIR /away
COPY --from=builder /src/node_modules/ .
COPY ./src .

CMD ["node", "start"]