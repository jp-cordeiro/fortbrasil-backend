FROM node:12-slim as build
WORKDIR /src
COPY package*.json ./
COPY yarn* ./
RUN yarn install
COPY . .
CMD ["yarn", "dev"]
