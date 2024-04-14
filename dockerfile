FROM node:16
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]