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
    libpq-dev \
    && docker-php-ext-install pdo_mysql pdo_pgsql pgsql mbstring exif pcntl bcmath gd zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .
COPY --from=node_builder /app/public/build ./public/build

# Copy .env.example to .env
RUN cp -n .env.example .env || true

# Set fallback APP_KEY, SESSION_DRIVER, and APP_URL inside .env
RUN sed -i 's/^APP_KEY=.*/APP_KEY=base64:rVD6vicz3Xjyc\/vLFPSwPg6zShh\/Aenfs2\/Vfc4Pqws=/' .env
RUN sed -i 's/^SESSION_DRIVER=.*/SESSION_DRIVER=cookie/' .env
RUN sed -i 's|^APP_URL=.*|APP_URL=https://arengineeringbd.onrender.com|' .env

# Run composer install with PHP 8.3 and --no-scripts to prevent build-time artisan fails
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Create database.sqlite file if using SQLite driver fallback
RUN touch database/database.sqlite

RUN chmod -R 777 storage bootstrap/cache database

EXPOSE 8000

# Guarantee fresh database build, migrations, seeders, and serve app
CMD php artisan key:generate --force --no-interaction && php artisan migrate:fresh --seed --force && php artisan serve --host 0.0.0.0 --port $PORT
