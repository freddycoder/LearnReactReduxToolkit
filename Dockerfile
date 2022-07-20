FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1-alpine
COPY --from=builder /app/build /usr/share/nginx/html
