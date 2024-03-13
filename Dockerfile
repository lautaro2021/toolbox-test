FROM node:16-alpine as build

WORKDIR /client

COPY ./client/package.json ./client/package-lock.json ./
RUN npm install --silent

COPY ./client ./

RUN npm run build

FROM nginx:alpine

COPY --from=build /client/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]