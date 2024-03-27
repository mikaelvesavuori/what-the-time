FROM node:20-alpine

COPY . .

RUN npm pkg delete scripts.prepare && npm ci --omit=dev

EXPOSE 8080

CMD [ "npm", "start" ]
