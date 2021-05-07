FROM node:12-alpine

LABEL version="0.1"
LABEL description="Base Image for Jobgator react frontend"

WORKDIR /frontend-service

COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production

COPY public public/
COPY src src/
COPY scripts scripts/
COPY config config/

RUN npm run build

COPY server server/

CMD ["node", "server/index.js"]