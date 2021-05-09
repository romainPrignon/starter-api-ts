FROM node:14 as build

WORKDIR /opt

COPY config config
COPY src src
COPY type type
COPY package-lock.json package-lock.json
COPY package.json package.json
COPY tsconfig.json tsconfig.json

RUN npm ci
RUN npm run build

FROM node:14

WORKDIR /opt

COPY --from=build /opt/dist dist
COPY package.json package.json
COPY package-lock.json package-lock.json
# COPY --from=build /opt/config config

RUN npm ci --production

ENV PATH=/opt/node_modules/.bin:$PATH
USER node

CMD ["npm"]
