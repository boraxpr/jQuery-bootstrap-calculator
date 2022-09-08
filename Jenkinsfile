pipeline {
  environment {
registry = "172.19.21.115:9443"
registryCredential = 'admin'
dockerImage = ''
              }
agent any
  stages {
      stage('Cloning our Git') {
          steps {
            git 'https://github.com/boraxpr/jQuery-bootstrap-calculator.git'
                }
                               }
      stage('Building our image') {
           steps{
            script {
              dockerImage = docker.build registry + ":$BUILD_NUMBER"
                  }
                }
                                  }
      stage('Deploy our image') {
            steps{
              script {
                docker.withRegistry( '', registryCredential ) {
                dockerImage.push()
                                                              }
                      }
                  }
                                 }
    stage('Cleaning up') {
            steps{
              sh "docker rmi $registry:$BUILD_NUMBER"
                  }
                        }
                }
        }
