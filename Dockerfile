FROM arm64v8/node as builder

WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
RUN npm run build

FROM arm64v8/nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]