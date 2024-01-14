FROM node:latest

WORKDIR /app
COPY . /app/

EXPOSE 8081

RUN npm install
RUN yarn add expo
RUN npm install expo-cli --global

CMD ["npm", "start"]