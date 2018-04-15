FROM 585739960460.dkr.ecr.eu-west-1.amazonaws.com/cmo-node-parent:1.3

WORKDIR /usr/src/app

COPY package*.json ./

ENV AWS_ENV_PATH /prod/cmo/
ENV AWS_REGION eu-west-1

RUN npm install

COPY . .

EXPOSE 90

ENTRYPOINT ["/bin/bash", "-c", "eval $(/bin/aws-env) && npm start"]
