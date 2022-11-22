FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app

RUN yarn && yarn add playwright && yarn add @playwright/test

RUN npx playwright install-deps