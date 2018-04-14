FROM 585739960460.dkr.ecr.eu-west-1.amazonaws.com/cmo-node-parent:1.2

WORKDIR /usr/src/app

COPY package*.json ./

ENV EMAIL_ADDRESS maalaoui.ensi@gmail.com

RUN npm install

COPY . .

EXPOSE 90

ENTRYPOINT ["/bin/bash", "-c", "eval $(/bin/aws-env) && npm start"]
