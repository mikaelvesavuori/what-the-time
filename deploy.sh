export PROJECT_ID=""
export IMAGE="what-the-time"
export TAG="latest"
export REGION="europe-north1"

apps=(js python go rust)

for app in "${apps[@]}"; do
  cd src/$app
  gcloud builds submit --tag gcr.io/$PROJECT_ID/$IMAGE-$app
  gcloud beta run deploy --image gcr.io/$PROJECT_ID/$IMAGE-$app --region $REGION --platform managed --allow-unauthenticated
  cd .. && cd ..
done
