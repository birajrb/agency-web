FROM node:17-alpine

WORKDIR /code

COPY ./package.json ./yarn.lock

RUN yarn install

COPY . /code/



