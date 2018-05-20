FROM node:8 as build

WORKDIR /opt

COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY config config
COPY internal internal
COPY src src
COPY type type

RUN npm run install:dev
RUN npm run build

FROM node:8

WORKDIR /opt

COPY --from=build /opt/package.json package.json
COPY --from=build /opt/config config
COPY --from=build /opt/dist dist

RUN npm run install:prod

ENV PATH=/opt/node_modules/.bin:$PATH
USER node

CMD ["npm"]
