# Stage 1 - build the app
FROM node:14.15.0-alpine as build-deps
ARG REACT_APP_GMAPS_API_KEY
WORKDIR /usr/src/app
COPY package.json yarn.lock nginx.conf ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - setup the production environment
FROM nginx:1.19-alpine

ENV REACT_APP_GMAPS_API_KEY=$REACT_APP_GMAPS_API_KEY

# Copy the built app from the previous build stage into nginx
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY --from=build-deps /usr/src/app/nginx.conf /etc/nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]