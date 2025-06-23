# ---- Base Stage ----
# Use a specific and recent LTS version of Node.js on Alpine for security and reproducibility.
FROM node:20-alpine AS base
# Update packages to the latest version to patch potential vulnerabilities in the base image.
RUN apk upgrade --no-cache
WORKDIR /app
# Enable pnpm, the recommended package manager for Next.js
RUN corepack enable pnpm

# ---- Dependencies Stage ----
# This stage is dedicated to installing dependencies to leverage Docker's layer caching.
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---- Builder Stage ----
# This stage builds the application.
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Disable Next.js telemetry during the build process.
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

# ---- Production Stage ----
# Use a specific, lightweight, and unprivileged NGINX image from Alpine.
# This minimizes the attack surface and resolves known vulnerabilities.
FROM nginxinc/nginx-unprivileged:stable-alpine AS production
WORKDIR /app
# Copy only the built application from the builder stage.
COPY --from=builder /app/out .
# Copy the custom NGINX configuration.
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port on which the application will run.
EXPOSE 8080

# Add a health check to ensure the NGINX server is running correctly.
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=5 \
  CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1