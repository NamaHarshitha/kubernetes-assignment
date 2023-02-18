# Kubernetes Assignment : 
 ## About :   It is an assignment of coding a web server and automating its deployment into a kubernetes cluster.
 
**How to build :**

Step 1 : Clone the repository using "https://github.com/NamaHarshitha/kubernetes-assignment.git"

Step 2 : cd kubernetes-assignment/kub_assignment

Step 3 : Run the build-and-deploy.sh

Step 4 : Run the Docker image with the command "docker run server"

Step 5 : Or,do npm install and npm test.

Step 6 : Access the Server at "http://192.168.49.2/athlete"

**Files used in the assignment :**

1.index.js - Source code of the Node.js server

2.test.js - A Software test for the Node.js server using mocha framework

3.Dockerfile - It is a file for creating docker image of Node.js server

4.kubernetes/server-deployment.yaml - Kubernetes Manifest file including the deployment, service and ingress for the Node.js server created.

5.package.json, package-lock.json - Files that hold the information on the dependencies or packages installed for the project.

6.build-and-deploy.sh - A script file which takes care of building, packaging and deploying the application on minikube cluster.

**Issues encountered :**

1.Encountered incompatibility issues while running the software test using mocha framework - resolved it by setting "test": "mocha --experimental-modules test.js" in package.json file.

2.Faced configuration issues while setting up minikube cluster, resolved them by setting the environmental variable KUBECONFIG=$HOME/.kube/my_minikube_config

3.Faced the "ImagePullBackOff" error while trying to work with local Docker image - resolved it by including "imagePullPolicy: Never" in the Deployment File.

4.Faced issue in routing the request to Kubernetes Service - resolved it by enabling ingress addon using "minikube addons enable ingress"

5.Faced Access Denial issue while trying to test my build-and-deploy.sh file - resolved it by adding executable permissions to the file using the command "chmod u+x build-and-deploy.sh", then executing it by running "./build-and-deploy.sh" command




