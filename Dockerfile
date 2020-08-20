FROM node:12-alpine as build

WORKDIR /app

ADD https://install.goreleaser.com/github.com/tj/node-prune.sh /
RUN chmod +x /node-prune.sh \
    && /node-prune.sh

COPY . ./

RUN chown -R node:node /app
USER node

RUN npm ci --no-optional \
    && npm cache clean --force

RUN npm run build
RUN npm prune --production

FROM nginx:alpine

WORKDIR /app

COPY --from=build /app/dist /usr/share/nginx/html
