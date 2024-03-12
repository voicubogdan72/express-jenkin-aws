
pipeline{
    agent any

    stages{

        stage ('Fetch Code'){
            steps{
                git branch: 'main', url: 'https://github.com/voicubogdan72/express-jenkin-aws.git'
            }
           
        }
        stage ('Install'){
            steps{
                sh 'npm install'
            }
        }

        stage('TEST'){
            steps{
                sh 'mocha  test.js'
            }
            post {
                success {
                    echo "App was tested!!"
                }
            }
        }
         stage('Run'){
            steps{
                sh 'node app.js'
            }
            post {
                success {
                    echo "App was ok!!"
                }
            }
        }
         
    }
     post{

        always{
            echo 'Slack Notifications'
            slackSend channel: '#jenkinscicd'
        }     
            }
}