
FROM node:14
WORKDIR /home/harshitn/Desktop/kub_assignment
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "test"]
