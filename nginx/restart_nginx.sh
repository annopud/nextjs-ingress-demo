#!/usr/bin/env bash

docker rm -f nginx-server
docker build -t nginx-server -f '/Users/tttmb/test/next/nextjs/examples/with-docker-multi-env/nginx/Dockerfile' /Users/tttmb/test/next/nextjs/examples/with-docker-multi-env/nginx
docker run -d -p 8080:80 -p 8081:443 --name nginx-server nginx-server
