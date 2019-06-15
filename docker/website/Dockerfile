FROM nginx:1.15.2-alpine

RUN rm -rf /etc/nginx/conf.d/*
COPY language-archives.services.nginx.conf /etc/nginx/conf.d

EXPOSE 80