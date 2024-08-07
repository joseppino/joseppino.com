FROM node:22-alpine AS sk-build
WORKDIR /usr/src/app

ARG TZ=Europe/London
ARG PUBLIC_SUPABASE_KEY

COPY . /usr/src/app
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install
RUN npm run build

FROM node:22-alpine
WORKDIR /usr/src/app

ARG TZ=Europe/London
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json

RUN npm i --only=production

COPY --from=sk-build /usr/src/app/build /usr/src/app/build

EXPOSE 7667
CMD PORT=7667 node build
# CMD ["node", "build/index.js"]