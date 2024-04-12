# Use the official Node.js image as the base image
FROM node:16.14.0

# Set the working directory
WORKDIR /usr/src/app

# Install Angular CLI globally
RUN npm install -g @angular/cli@15

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the Angular application
RUN npm run build

# Expose port 4200 (default port used by ng serve)
EXPOSE 4200

# Command to serve the Angular application using ng serve
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
