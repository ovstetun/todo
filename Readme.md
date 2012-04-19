# what

A simple node.js based webapp to deploy to azure - just for trying it out.

# running

    npm install
    node server.js


## deploy to Heroku

Is very simple

    heroku create --stack cedar
    git push heroku master
    heroku ps:scale web=1


## deploy to Windows Azure

Is not quite as simple. Create an account for [Cloud 9 IDE](http://c9.io). Clone the application as a new C9 project. Run `npm install` in the console (at the bottom of the screen). Then add a deployment using your Azure account (follow the instructions), and press "Deploy". It takes about 15 mins for the server to be up and running.

