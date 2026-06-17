FROM node:20-slim AS builder

WORKDIR /my-app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /my-app/dist ./

RUN adduser -D hamza \
  && chown -R hamza:hamza /usr/share/nginx/html \
  && chown -R hamza:hamza /var/cache/nginx \
  && chown -R hamza:hamza /run \
  && chown -R hamza:hamza /var/log/nginx \
  && chown -R hamza:hamza /etc/nginx

USER hamza

ENV APP_MODE=production \
  APP_PORT=5173 

LABEL org.opencontainers.image.maintainer="Hamza" \
  org.opencontainers.image.version="1.0" \
  org.opencontainers.image.title="Coffee Shop App" \
  description="A Docker image for the Coffee Shop App built with React, served by Nginx."

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
