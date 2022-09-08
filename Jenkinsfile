pipeline {
//     environment {
//     registry = "http://172.19.21.115:9443"
//     registryCredential = 'naipawat.p'
//   }
    agent any

    stages {
        stage('Build image') {
            steps {
                echo 'Building..'
                script {
                  docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
        stage('Test image') {
            steps {
                echo 'Image build success..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
//                 docker.withRegistry(registry, 'git') {                   
//                 app.push("${env.BUILD_NUMBER}")            
//                 app.push("latest")     
            }
        }
    }
}
