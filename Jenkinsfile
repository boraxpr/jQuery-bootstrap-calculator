pipeline {
    environment {
    registry = "http://172.19.21.115:9443"
    registryCredential = 'naipawat.p'
  }
    agent any

    stages {
        stage('Build image') {
            steps {
                echo 'Building..'
                script {
                 dockerImage = docker.build registry + ":$BUILD_NUMBER"
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
                docker.withRegistry('', registryCredential) {                   
                dockerImage.push("${env.BUILD_NUMBER}")            
                dockerImage.push("latest")     
            }
        }
    }
}
