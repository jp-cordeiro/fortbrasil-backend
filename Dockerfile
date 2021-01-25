FROM node:12-slim as build
WORKDIR /src

COPY package*.json ./
COPY yarn* ./
COPY .env* ./

COPY start.sh /

RUN chmod +x /start.sh
RUN yarn install

COPY . .
CMD ["/start.sh"]
