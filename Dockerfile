FROM node:8
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV Version V1
EXPOSE 8094
CMD [ "npm" , "start" ]
