FROM node:8

WORKDIR /opt

ENV PATH /opt/node_modules/.bin:$PATH


COPY . /opt
RUN npm install


EXPOSE 4000 5858 9229

CMD ["npm", "start"]
