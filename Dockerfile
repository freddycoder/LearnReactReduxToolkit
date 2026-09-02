FROM gplane/pnpm:11.25-node24-alpine AS builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile && pnpm run build

FROM nginx:1-alpine3.24-slim
COPY --from=builder /app/dist /usr/share/nginx/html
