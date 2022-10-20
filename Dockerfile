FROM nginx:1.23.2-alpine
LABEL version="0.0.0"

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/lr-culinair .