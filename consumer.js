var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost:5672', function (err, conn) {
  conn.createChannel(function (err, ch) {
    var q = 'ressuprimento';

    ch.assertQueue(q, { durable: false });
    ch.prefetch(1);
    console.log(" [*] Waiting for messages...", q);
    ch.consume(q, function (msg) {
      console.log(` * Received ${msg.content.toString()}`);
    }, { noAck: true });
  });
});