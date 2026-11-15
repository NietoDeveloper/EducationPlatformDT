FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json* tsconfig.base.json ./
COPY apps/api/package.json apps/api/
COPY apps/web/package.json apps/web/
COPY packages/content/package.json packages/content/
RUN npm install --workspace @edu-dt/api --workspace @edu-dt/content --include-workspace-root=false
COPY packages/content packages/content
COPY apps/api apps/api
["npm", "run", "start", "-w", "@edu-dt/api"]
