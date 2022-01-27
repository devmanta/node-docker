FROM alpine:latest
RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY . /app

RUN npm install
RUN npm i nodemon -g

EXPOSE 3000

CMD ["npm", "start"]