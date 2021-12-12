FROM node:14-alpine
WORKDIR /app
COPY package.json ./package.json
COPY src ./src
COPY public ./public

RUN npm install
CMD ["npm", "start"]
