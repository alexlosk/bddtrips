const AWS = require("aws-sdk");
var world = require("./world.js");
const awsparams = require('../awsparameters.js');

function sqsPublish() {

  const sqs = new AWS.SQS({ region: awsparams.REGION });

  var params = {
    // Remove DelaySeconds parameter and value for FIFO queues
    //DelaySeconds: 10,
    MessageAttributes: {
      "Title": {
        DataType: "String",
        StringValue: "Hello"
      },
      "Author": {
        DataType: "String",
        StringValue: "Oksana"
      }
    },
    MessageBody: "Test Message from Lorenzo",
  
    QueueUrl: "SQS_QUEUE_URL"
  };
  
  sqs.sendMessage(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.MessageId);
    }
  });
}

module.exports = {
  sqsPublish: sqsPublish,
};