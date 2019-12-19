FROM node:10
RUN mkdir /codinggig
ADD . /codinggig
WORKDIR /codinggig
RUN npm i
EXPOSE 80
CMD ["npm", "start"]
