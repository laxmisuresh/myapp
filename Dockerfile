FROM node:22-alpine3.19
EXPOSE 8080
COPY server.js .
CMD node server.js