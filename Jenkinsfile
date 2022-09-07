pipeline {
    environment {
    registry = "http://172.19.21.115:9443"
    registryCredential = 'naipawat.p'
  }
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                script {
                    docker.build("container")
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
