FROM node:latest
WORKDIR /usr/src/app

# Copies package.json, package-lock.json, tsconfig.json, .env to the root of WORKDIR
COPY ["package.json", "yarn.lock", "tsconfig.json", ".env", "./"]

RUN yarn install

COPY ./src ./src

EXPOSE 3000

CMD ["yarn", "start"]
CMD ["yarn", "cache", "clean"]