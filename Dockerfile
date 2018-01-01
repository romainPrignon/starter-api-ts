FROM node:8

WORKDIR /opt

ENV PORT $PORT
ENV PATH /opt/node_modules/.bin:$PATH

ARG tag


COPY . /opt
RUN git reset --hard HEAD && git clean -f -d
RUN git checkout $tag

RUN npm install && npm cache clean --force


EXPOSE $PORT 5858 9229

CMD ["npm", "start"]
