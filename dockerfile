# Utiliser une image de Node.js en tant que base
FROM node:20.11.0 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY . .

# Installer les dépendances du projet
RUN npm install

# Construire le projet
RUN npm run build

# Deuxième étape pour créer une image légère
FROM nginx:alpine

# Copier les fichiers de build depuis la première étape
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Commande pour démarrer le serveur nginx
CMD ["nginx", "-g", "daemon off;"]
