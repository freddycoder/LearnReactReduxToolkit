FROM gplane/pnpm:node18-alpine AS builder
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN npm run build

FROM nginx:1-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
