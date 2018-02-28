FROM node:8

WORKDIR /opt

COPY .env .env
COPY .env.prod .env.prod
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src src

RUN npm install
RUN npm run build

ENV PATH=/opt/node_modules/.bin:$PATH
USER node

CMD ["npm", "start"]
