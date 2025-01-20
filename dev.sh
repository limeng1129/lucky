TAG=${1:-latest}

docker run --rm -it \
    -p 5003:8878 \
    -p 443:443 \
    -v "$(pwd)"/server/data:/lottery/server/data/ \
     lottery:$TAG
