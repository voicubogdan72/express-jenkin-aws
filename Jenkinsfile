pipeline{
    agent any

    stages{

        stage ('Fetch Code'){
            steps{
                git branch: 'main', url: 'https://github.com/voicubogdan72/express-jenkin-aws.git'
            }
        }
        stage('RUN'){
            steps{
                sh 'node  app.js'
            }
            post {
                success {
                    echo "App is running!!"
                }
            }
        }
    }
}