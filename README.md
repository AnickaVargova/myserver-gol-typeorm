# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

Server:
exit for killing terminal

npm run orm -- migration:generate -n 'somename'

docker build -t gol-server:8.0 .

docker run --network=gol-network -p 8080:8080 -it gol-server:8.0  /bin/bash

npm run orm migration:run  //for migration

npm start


Postgres container:

C:\WINDOWS\system32>docker run --name my-postgres --network=gol-network -e POSTGRES_PASSWORD=test -e POSTGRES_USER=test -p 6969:5432 -d postgres