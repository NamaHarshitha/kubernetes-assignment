docker build -t server .
kubectl apply -f kubernetes/server-deployment.yaml
echo "http://192.168.49.2/athlete"
