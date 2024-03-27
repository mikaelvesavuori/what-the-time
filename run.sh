export PROJECT_ID=""
export IMAGE="what-the-time"
export TAG="latest"
export REGION="europe-north1"

app="js" # python go rust

docker run -it -p 8080:8080 gcr.io/$PROJECT_ID/$IMAGE-$app:$TAG
