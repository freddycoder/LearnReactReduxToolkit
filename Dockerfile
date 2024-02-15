FROM gplane/pnpm:7.27-node18-alpine AS builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM nginx:1.25.4-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
