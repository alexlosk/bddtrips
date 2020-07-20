const AWS = require("aws-sdk");
var world = require("./world.js");
const awsparams = require('../awsparameters.js');

function ddbDocGetItem() {

  AWS.config.update({ region: region: awsparams.REGION });

  // Create DynamoDB document client
  var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

  var params = {
      //TableName: 'TABLE',
      TableName: 'DestimoRawEvents',
      Key: { "id": "2222222-024f-4fa5-88b7-6f2391ecd8bc"}
  };
    


  docClient.get(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Item);
    }
  });
}

module.exports = {
  ddbDocGetItem: ddbDocGetItem
};
