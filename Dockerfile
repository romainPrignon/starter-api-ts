FROM node:8

WORKDIR /opt


COPY package.json package.json
COPY package-lock.json package-lock.json
COPY dist dist

RUN npm install --production

ENV PATH /opt/node_modules/.bin:$PATH
EXPOSE 4000 5858 9229
USER node

CMD ["npm", "start"]
