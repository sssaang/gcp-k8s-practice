FROM node:12-slim AS base
COPY . .
RUN npm install
RUN npm run build

FROM node:12-slim
COPY --from=base dist/index.js .
EXPOSE 8080
CMD [ "node", "." ]