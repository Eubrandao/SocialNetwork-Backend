FROM node:18
LABEL key="notification-service"
 
WORKDIR /usr/src/app
 
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
 
COPY package*.json  ./
COPY .env ./
RUN npm install


COPY ./dist .
 
ENV PORT 3003
EXPOSE $PORT
CMD [ "npm", "start", "notification-service" ]

