pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning..'
            }
        stage('Build') {
            steps {
                echo 'Building..'
                steps{
                    script {
                        def app = docker.build("calculator")
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
                    app.push("${env.BUILD_NUMBER}")
                    app.push("latest")
                }
            }
        }
}
    }}
