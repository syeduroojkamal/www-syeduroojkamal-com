FROM nginx:alpine-slim

COPY ./app /usr/share/nginx/html

# ensures that Nginx starts when the container starts and continues running as long as the container is active
CMD ["nginx", "-g", "daemon off;"]
