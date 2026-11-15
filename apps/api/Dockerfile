FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json* tsconfig.base.json ./
COPY apps/api/package.json apps/api/
COPY apps/web/package.json apps/web/
COPY packages/content/package.json packages/content/
