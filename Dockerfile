FROM nginx:alpine as build

RUN apk add --update nodejs npm

WORKDIR /app

ADD https://install.goreleaser.com/github.com/tj/node-prune.sh /
RUN chmod +x /node-prune.sh \
    && /node-prune.sh

COPY . ./

RUN npm ci --no-optional \
    && npm cache clean --force

RUN npm run build

FROM build as prod
WORKDIR /app

RUN ls -la

COPY --from=build /app/dist /usr/share/nginx/html
