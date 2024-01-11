FROM node:6-alpine

RUN apk add --update tini

WORKDIR /usr/src/app
COPY package.json package.json

RUN npm i && npm cache clean --force

EXPOSE 3000

COPY . . 

CMD [ "tini", '--', 'node', './bin/www' ]