FROM node
WORKDIR /app
COPY . .
ENV POSTGRES_PASSWORD=test
ENV POSTGRES_USER=test
RUN npm install
CMD ["ts-node", "src/index.ts"]
