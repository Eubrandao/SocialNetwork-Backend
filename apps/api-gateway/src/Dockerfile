FROM node:18
LABEL key="api-gateway"
 
WORKDIR /usr/src/app
 
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
 
COPY package*.json  ./
COPY .env ./
RUN npm install


COPY ./dist .
 
ENV PORT 3001
EXPOSE $PORT
CMD [ "npm", "start", "api-gateway" ]

