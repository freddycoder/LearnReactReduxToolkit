FROM gplane/pnpm:9.8-node22-alpine AS builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile && pnpm run build

FROM nginx:1-alpine3.20-slim
COPY --from=builder /app/dist /usr/share/nginx/html
