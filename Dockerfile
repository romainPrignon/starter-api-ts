FROM node:18-alpine as build

WORKDIR /opt

COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY config config
COPY internal internal
COPY src src
COPY type type

COPY package-lock.json .
RUN npm install --legacy-peer-deps
RUN npm run build

FROM node:18-alpine

WORKDIR /opt

COPY --from=build /opt/package.json package.json
COPY package-lock.json .
COPY --from=build /opt/config config
COPY --from=build /opt/dist dist

RUN npm ci --only=production --legacy-peer-deps

ENV PATH=/opt/node_modules/.bin:$PATH
USER node

CMD ["node", "dist/index.js"]
