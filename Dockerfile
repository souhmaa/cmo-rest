FROM 585739960460.dkr.ecr.eu-west-1.amazonaws.com/cmo-node-parent:1.2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
