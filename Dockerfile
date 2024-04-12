FROM node:16.14.0
WORKDIR /app
COPY package*.json ./
COPY .npmrc ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]
