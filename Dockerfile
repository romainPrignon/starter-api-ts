FROM node:8 as build

WORKDIR /opt

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY src src
COPY internal internal

RUN npm install --no-optional
RUN npm run build

FROM node:8

WORKDIR /opt

COPY .env .env
COPY .env.prod .env.prod

COPY --from=build /opt/package.json package.json
COPY --from=build /opt/dist dist
COPY --from=build /opt/node_modules node_modules

ENV PATH=/opt/node_modules/.bin:$PATH
USER node

CMD ["npm", "start"]
