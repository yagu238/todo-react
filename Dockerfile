FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

# add app
COPY ./dist/ ./

# start app
CMD node apps/server/main.js