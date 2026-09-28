# Multi-stage build for Laravel + React (Vite)
FROM node:20-alpine AS node_builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM php:8.3-cli
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl \
    libzip-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .
COPY --from=node_builder /app/public/build ./public/build

# Copy .env.example for build time if .env doesn't exist
RUN cp -n .env.example .env || true

# Run composer install with PHP 8.3 and --no-scripts to prevent build-time artisan fails
RUN composer install --no-dev --optimize-autoloader --no-scripts

RUN chmod -R 777 storage bootstrap/cache

EXPOSE 8000

# Automatically run migrations on startup before starting the server
CMD php artisan migrate --force && php artisan serve --host 0.0.0.0 --port $PORT
