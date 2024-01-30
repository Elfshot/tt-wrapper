cd test_https_server
npm i
npx tsc
docker build -t "tt-wrapper-test-serv" ./Dockerfile
cd ..