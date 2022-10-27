#!/bin/sh

RED='\033[0;31m'
NC='\033[0m' # No Color

echo  "${RED} npm install in front directory"
cd front && npm i
echo  "${RED} npm install in back directory"
cd ../back && npm i
echo  "${RED}Build"${NC}
docker system prune -f && docker compose up --build
