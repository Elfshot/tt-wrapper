# syntax=docker/dockerfile:1

FROM node:latest
WORKDIR /serv

COPY dist/ ./dist
COPY package.json ./
COPY package-lock.json ./

RUN chmod 764 . -R
CMD ["npm", "run-s", "start"]
