FROM node:14

ARG WORKDIR=/usr/src/app

RUN apt-get update && apt-get upgrade -y


USER node

WORKDIR ${WORKDIR}

COPY --chown=node:node . .

# Install dependencies and start the app.
RUN ["yarn", "install", "--production"]
CMD ["yarn", "start"]