FROM node:8.9.1-alpine as builder
WORKDIR /build
ADD "package.json" /build
RUN yarn install
COPY . /build
RUN npm run build

FROM nginx:latest
ENV LETSENCRYPT_HOST premiersted.schibsted.ga
ENV VIRTUAL_HOST premiersted.schibsted.ga
ENV LETSENCRYPT_EMAIL mateusz@odel.ga
COPY ./config/default.conf /etc/nginx/conf.d/default.conf 
COPY ./config/nginx.conf /etc/nginx/nginx.conf 
COPY --from=builder /build/dist/ /usr/share/nginx/html 
