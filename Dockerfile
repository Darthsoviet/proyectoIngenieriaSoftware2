FROM node:alpine as react


WORKDIR /app
COPY ./frontend/proyecto-is/package.json /app/package.json
RUN npm install  -g npm --silent

RUN npm install react-scripts -g --silent


RUN npm install --silent
ARG REACT_APP_BACKEND_URL
COPY ./frontend/proyecto-is ./

RUN npm rebuild node-sass
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}}
RUN npm run build


FROM maven as build
WORKDIR /app
COPY ./backend/proyecto ./
COPY --from=react /app/build ./src/main/resources/static
RUN mvn package -Dmaven.test.skip=true


FROM openjdk:11
WORKDIR /app
COPY --from=build  /app/target/proyecto-0.0.1-SNAPSHOT.jar /app/target/app.jar

ENTRYPOINT ["java","-jar","/app/target/app.jar"]