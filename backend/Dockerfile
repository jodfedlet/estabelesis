FROM node:alpine

WORKDIR /usr/src/estabelesis

COPY package*.json  ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start:dev" ]
