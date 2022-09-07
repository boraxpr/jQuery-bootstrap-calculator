pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 8090:3000'
            registryUrl 'http://172.19.21.115:9443'
        }
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning..'
                script{
                checkout scm
                }
            }
        stage('Build') {
            steps {
                echo 'Building..'
                steps{
                    script {
                        dockerImage = docker.build registry + ":$BUILD_NUMBER"
                    }
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
                script{
                    docker.withRegistry(registryUrl)
                    dockerImage.push()
                }
            }
        }
    }
}
