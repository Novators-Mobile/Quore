FROM node:latest

WORKDIR /app
COPY . /app/

EXPOSE 8081

RUN npm install
RUN yarn add expo

CMD ["npx", "expo", "start"]