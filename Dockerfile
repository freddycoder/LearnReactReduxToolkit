FROM gplane/pnpm:10.15-node24-alpine AS builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile && pnpm run build

FROM nginx:1-alpine3.22-slim
COPY --from=builder /app/dist /usr/share/nginx/html
