/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiPricewatcherGraphQLAPIIdOutput = process.env.API_PRICEWATCHER_GRAPHQLAPIIDOUTPUT
var apiPricewatcherGraphQLAPIEndpointOutput = process.env.API_PRICEWATCHER_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */

const https = require('https');
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_PRICEWATCHER_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const getPricewatch = require('./query.js').getPricewatch;
const createWatchValue = require('./query.js').createWatchValue;
const apiKey = process.env.API_KEY;

const createApiRequest = (query, operationName, variables) => {
    const req = new AWS.HttpRequest(appsyncUrl, region);

    req.method = "POST";
    req.headers.host = endpoint;
    req.headers["Content-Type"] = "application/json";
    req.body = JSON.stringify({
        query: query,
        operationName: operationName,
        variables: variables
    });

    if (apiKey) {
        req.headers["x-api-key"] = apiKey;
    } else {
        const signer = new AWS.Signers.V4(req, "appsync", true);
        signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
    }

    return new Promise((resolve, reject) => {
        const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
            result.on('data', (data) => {
                // console.log(JSON.parse(data.toString()));
                //
                // const pricewatch = JSON.parse(data.toString()).data.getPricewatch;
                // // pricewatch.values.push({date: new Date().getTime(), value: event.value})
                // console.log(pricewatch)
                // // TODO add pricewatch
                resolve(JSON.parse(data.toString()));
            });
        });

        httpRequest.write(req.body);
        httpRequest.end();
    });
}

exports.handler = async (event) => {
    console.log(event)

    // const data = await createApiRequest(getPricewatch, "GetPricewatch", {
    //     id: "cf1b1809-6263-45a6-a7d5-78356bf5dbd2"
    // });

    const data = await createApiRequest(createWatchValue, "CreateWatchValue", {
        input: {
            date: new Date().getTime().toString(),
            watchValuePricewatchId: event.pricewatchId,
            value: event.value
        }
    });

    // console.log(data)

    return {
        statusCode: 200,
        body: data
    };
};