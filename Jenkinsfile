pipeline {
    agent any

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
                    docker.withRegistry('http://172.19.21.115:9443')
                    dockerImage.push()
                }
            }
        }
    }
}
