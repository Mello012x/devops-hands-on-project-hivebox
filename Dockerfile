# development
FROM node:22.20-alpine3.21 AS dev
LABEL maintainer="Leonardo Mello"
EXPOSE 3000
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json .
RUN npm ci
EXPOSE 3000
# Nothing copied because the intention is to run with hot-reloading.
#The container should run with bind mounting to the project folder.
ENTRYPOINT ["npm", "run", "dev"]

# Production
FROM node:22.20-alpine3.21 AS prod
EXPOSE 3000
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json .
RUN npm ci --omit=dev && \
    npm cache clean --force
COPY . .
USER node
ENTRYPOINT ["node", "api/server.mjs"]
