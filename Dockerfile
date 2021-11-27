FROM node:16.13.0-alpine3.14 as base

FROM base as dev

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

ENTRYPOINT ["npm", "run", "dev"]