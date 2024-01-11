FROM node:18-alpine AS BUILD_IMAGE

WORKDIR /app/react-app
COPY package.json package.json

RUN npm i

COPY . .

RUN npm run build

# production

FROM node:18-alpine AS PRODUCTION_IMAGE
WORKDIR /app/react-app

COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/
EXPOSE 8080

COPY package.json package.json
COPY vite.config.ts .

RUN npm i typescript 

EXPOSE 8080

CMD [ "npm", "run", "preview" ]


