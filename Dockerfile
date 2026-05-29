# syntax=docker.io/docker/dockerfile:1

# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

# ── Stage 2: Serve ────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/portfolio.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
