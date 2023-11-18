
FROM node:18
LABEL key="api-gateway"
 
WORKDIR /usr/src/app
 
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
 
COPY package.json /usr/
RUN npm install
 
COPY . /usr/
 
ENV PORT 3000
EXPOSE $PORT
CMD [ "npm", "start" ]