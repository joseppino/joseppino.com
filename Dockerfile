FROM node:22-alpine AS builder

RUN mkdir /app

COPY . /app

RUN cd /app && npm install && npm run build

FROM node:22-alpine 

RUN mkdir /app

COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/
COPY /home/.env /app/.env

RUN cd /app && \
  npm install --omit=dev && \
  node --env-file=.env build
WORKDIR /app

CMD ["node", "build/index.js"]