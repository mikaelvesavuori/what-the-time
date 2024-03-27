export PROJECT_ID=""
export IMAGE="what-the-time"
export TAG="latest"
export REGION="europe-north1"

apps=(js python go rust)

for app in "${apps[@]}"; do
  cd src/$app
  docker build -t gcr.io/$PROJECT_ID/$IMAGE-$app:$TAG .
  cd .. && cd ..
done
