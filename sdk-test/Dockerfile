FROM node:alpine
WORKDIR '/web'
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]