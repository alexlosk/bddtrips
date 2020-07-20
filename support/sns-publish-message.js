const AWS = require("aws-sdk");
var world = require("./world.js");
const awsparams = require('../awsparameters.js');


function snsPublish() {
  let message;

  const sns = new AWS.SNS({ region: awsparams.REGION });

  var params = {
    Message: world.snsMessage /* required */,
    TopicArn: awsparams.SNS_TOPIC
  };

  // Publish the params to SNS
  const publishTextPromise = sns.publish(params).promise();

  // Handle the promise's fulfilled and/or rejected state
  publishTextPromise
    .then((data) => {
      console.log(
        (message = `Message ${params.Message} send sent to the topic ${params.TopicArn}`)
      );
    })
    .catch(function (err) {
      console.log(err);
    });
}

module.exports = {
  snsPublish: snsPublish
};
