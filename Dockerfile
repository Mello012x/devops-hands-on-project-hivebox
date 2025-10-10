FROM node:22-alpine

LABEL maintainer="Leonardo Mello"

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["node", "api/server.mjs"]
