test_https_server/compile.sh
docker compose up -d ./test_https_server/docker-compose.yaml

function cleanup {
  docker compose down ./test_https_server/docker-compose.yaml
  docker image rm tt-wrapper-test-serv
}

trap cleanup EXIT

npx jest