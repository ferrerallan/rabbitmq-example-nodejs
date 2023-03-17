var amqp = require('amqplib/callback_api');

const opt = { credentials: require('amqplib').credentials.plain('admin', 'Asn3jao48@ramazon') };

const url='amqps://b-098f3e48-3321-401d-a93f-b114c5a0d2d7.mq.us-east-1.amazonaws.com:5671';

amqp.connect(url,opt,function (err, conn) {
            conn.createChannel(function (err, ch) {
                var q = 'users';
                var msg = 'hmm eh mesmo';
                ch.assertQueue(q, { durable: false });
                ch.sendToQueue(q, Buffer.from(msg));
                console.log(" [x] Sent %s", msg);
            });
            setTimeout(function () { conn.close(); }, 500);
        });