# rabbitmq-example-nodejs
This project uses rabbitmq as a messenger service, creating a producer and a consumer in nodejs, and running rabbitmq with docker

### Requirements
An available docker installation on the host

### To reproduce the example, follow the steps below.
* Start a rabbitmq service with docker, using the command: 
sudo docker run -d --hostname my-rabbit --name rabbit13 -p 8080:15672 -p 5672:5672 -p 25676:25676 rabbitmq:3-management
* Start the consumer service (consumer.js)
* Start the producer service (producer.js)
