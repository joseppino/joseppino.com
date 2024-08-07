FROM node:22-alpine AS sk-build
WORKDIR /usr/src/app

ARG TZ=Europe/London
ARG PUBLIC_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51eWF2Z2RmZ25mc2l6amN2cmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NTI5NjgsImV4cCI6MjAxOTQyODk2OH0.pny8zqCICuhjqe5Qz-UvHXiOqvth5yyWsEbYk_2VElg

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
# COPY --from=builder /usr/src/app/.env.local /app/.env.local

EXPOSE 3000
CMD ["node", "build/index.js"]