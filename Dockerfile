FROM node:22-alpine AS builder

RUN mkdir /app

COPY . /app

RUN cd /app && npm install && npm run build

FROM node:22-alpine 

RUN mkdir /app

COPY --from=builder /app/build /app/build
COPY --from=builder /app/package.json /app/
COPY --from=builder /app/.env.local /app/

RUN cd /app && \
  npm install --omit=dev
  # node --env-file=.env.local build
WORKDIR /app

CMD node --env-file=.env.local build