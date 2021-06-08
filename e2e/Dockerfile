FROM node:14.16.0-alpine3.13
# FROM blueimp/nightwatch
# FROM alpine:latest

# RUN addgroup app && adduser -S -G app app
# USER app

RUN apk add --update nodejs-npm && \
  npm install -g nightwatch && \
  rm -rf /tmp/* /root/.npm

RUN apk add --update jq

WORKDIR /app
COPY package*.json ./
# RUN npm install
COPY . .

# CMD ["npm", "run", "nw"]
CMD ./wait-for-grid.sh npm run nw