FROM node:8

WORKDIR /opt

ENV PORT $PORT
ENV PATH /opt/node_modules/.bin:$PATH


COPY package.json ./
COPY package-lock.json ./
RUN npm install && npm cache clean --force
COPY . /opt


EXPOSE $PORT 5858 9229

CMD ["npm", "start"]
