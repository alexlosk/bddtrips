const AWS = require("aws-sdk");
var world = require("./world.js");
const awsparams = require('../awsparameters.js');

function sqsReceive() {

  AWS.config.update({region: awsparams.REGION});

  // Create an SQS service object
  var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

  var queueURL = "https://sqs.eu-central-1.amazonaws.com/617039909058/Test-accommodation-q";

  var params = {
  AttributeNames: [
      "SentTimestamp"
  ],
  MaxNumberOfMessages: 10,
  MessageAttributeNames: [
      "All"
  ],
  QueueUrl: queueURL,
  VisibilityTimeout: 20,
  WaitTimeSeconds: 0
  };

  sqs.receiveMessage(params, function(err, data) {
    if (err) {
      console.log("Receive Error", err);
    } else if (data.Messages) {
      var deleteParams = {
        QueueUrl: queueURL,
        ReceiptHandle: data.Messages[0].ReceiptHandle
      };

      // const orderData = JSON.parse(data.Messages[0].Body);
      // console.log('Order received', orderData);

      //Full result object including message metadata
      // console.log('Full result',data);

      console.log('Message 0 ID is: ',data.Messages[0].MessageId);

    /*  sqs.deleteMessage(deleteParams, function(err, data) {
        if (err) {
          console.log("Delete Error", err);
        } else {
          console.log("Message Deleted", data);
        }  
      });*/
    }
  });
}

module.exports = {
  sqsReceive: sqsReceive,
};