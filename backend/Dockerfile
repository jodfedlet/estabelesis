FROM node:alpine

WORKDIR /usr/dir

COPY package*.json  ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]