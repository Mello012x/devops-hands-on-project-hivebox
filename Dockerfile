# development
FROM node:22.20-alpine3.21@sha256:f40aebdd0c1959821ab6d72daecafb2cd1d4c9a958e9952c1d71b84d4458f875 AS dev
LABEL maintainer="Leonardo Mello"
EXPOSE 3000
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json .
RUN npm install
# Nothing else (besides package files) copied because the intention is to run with hot-reloading.
# The container should run with bind mounting to the project folder.
ENTRYPOINT ["npm", "run", "dev"]

# Production
FROM node:22.20-alpine3.21@sha256:f40aebdd0c1959821ab6d72daecafb2cd1d4c9a958e9952c1d71b84d4458f875 AS prod
EXPOSE 3000
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json .
RUN npm ci --omit=dev
COPY --chown=node:node . .
USER node
ENTRYPOINT ["node", "api/server.mjs"]
