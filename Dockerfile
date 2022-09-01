FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm install -g @angular/cli

USER node

WORKDIR /home/node/app
