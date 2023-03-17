
var amqp = require('amqplib/callback_api');

const user = 'admin';
const password= 'Asn3jao48@ramazon';
const url='amqps://b-098f3e48-3321-401d-a93f-b114c5a0d2d7.mq.us-east-1.amazonaws.com:5671';

const opt = { credentials: require('amqplib').credentials.plain(user, password) };

amqp.connect(url, opt, function (err, conn) {
  conn.createChannel(async function (err, ch) {
    var q = 'users';

    ch.assertQueue(q, { durable: false });
    ch.prefetch(1);

    console.log(" [*] Waiting for messages...", q);

    ch.consume(q, function (msg) {            
      console.log(` * Received ${msg.content.toString()}`);
    }, { noAck: true });
  });
});