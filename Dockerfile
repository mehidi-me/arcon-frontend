FROM node:14.0.0
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
# Bundle app source
COPY . .

RUN npm install --force
ENV NODE_ENV=production
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]