FROM node:10
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
RUN npm run build
CMD ["npm", "start"]
