FROM node:10
WORKDIR /api
COPY package.json /api
COPY yarn.lock /api
RUN yarn install
COPY . /api
CMD yarn start
