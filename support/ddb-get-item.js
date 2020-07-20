const AWS = require("aws-sdk");
var world = require("./world.js");
const awsparams = require('../awsparameters.js');

function ddbGetItem() {

  AWS.config.update({ region: region: awsparams.REGION });
  // Create the DynamoDB service object
  var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  var params = {
    //TableName: 'TABLE',
    TableName: 'DestimoRawEvents',
    Key: {
      "id": {"S": "2222222-024f-4fa5-88b7-6f2391ecd8bc"}
    }
    //ProjectionExpression: 'ATTRIBUTE_NAME'
  };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      //console.log(JSON.stringify(data));
      console.log("Success", data.Item);
    }
  });
}

module.exports = {
  ddbGetItem: ddbGetItem
};