/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiPricewatcherGraphQLAPIIdOutput = process.env.API_PRICEWATCHER_GRAPHQLAPIIDOUTPUT
var apiPricewatcherGraphQLAPIEndpointOutput = process.env.API_PRICEWATCHER_GRAPHQLAPIENDPOINTOUTPUT
var functionCrawlerName = process.env.FUNCTION_CRAWLER_NAME

Amplify Params - DO NOT EDIT */

const https = require('https');
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_PRICEWATCHER_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const graphqlQuery = require('./query.js').query;
const apiKey = process.env.API_KEY;
AWS.config.region = process.env.REGION;
const lambda = new AWS.Lambda();

exports.handler = function (event, context, callback) {
    const req = new AWS.HttpRequest(appsyncUrl, region);

    req.method = "POST";
    req.headers.host = endpoint;
    req.headers["Content-Type"] = "application/json";
    req.body = JSON.stringify({
        query: graphqlQuery,
        operationName: "ListPricewatchs",
    });

    // if (apiKey) {
    //     req.headers["x-api-key"] = apiKey;
    // } else {
        const signer = new AWS.Signers.V4(req, "appsync", true);
        signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
    // }

    const data = new Promise((resolve, reject) => {
        const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
            result.on('data', (data) => {
                resolve(JSON.parse(data.toString()));
            });
        });

        httpRequest.write(req.body);
        httpRequest.end();
    }).then((data) => {

        console.log(data)

        const lambdaInvocations = [];

        data.data.listPricewatchs.items.forEach((pricewatch) => {
            console.log(pricewatch);

            pricewatch.config.items.forEach((watchConfig) => {
                const payload = {
                    xpath: watchConfig.xpath,
                    url: watchConfig.url,
                    pricewatchId: pricewatch.id,
                    label: watchConfig.label
                };

                const params = {
                    FunctionName: process.env.FUNCTION_CRAWLER_NAME,
                    InvocationType: 'Event',
                    LogType: 'None',
                    Payload: JSON.stringify(payload)
                };

                lambdaInvocations.push(lambda.invoke(params, function(err, data) {
                    if (err) {
                        console.log(err)
                    } else {
                        // console.log(process.env.FUNCTION_CRAWLER_NAME + ' said '+ data.Payload);
                    }
                }));

            });
        });
        Promise.all(lambdaInvocations).then(() => {
            callback(null, {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                body: ''
            });
        })

    });




    // return {
    //     statusCode: 200,
    //     body: data
    // };
};
