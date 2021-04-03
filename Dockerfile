# stage 1

FROM node:14.1-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
RUN pwd
RUN ls
COPY --from=builder /app/dist/incidencias /usr/share/nginx/html
EXPOSE 80

