/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var functionPriceupdateName = process.env.FUNCTION_PRICEUPDATE_NAME

Amplify Params - DO NOT EDIT */
const HTMLParser  = require('node-html-parser');
const request = require('request');
const xpathTools = require('./xpath');
const og = require('./og');
const responseTools = require('./response');
const AWS = require('aws-sdk');
AWS.config.region = process.env.REGION;
const lambda = new AWS.Lambda();

exports.handler = function (event, context, callback) { //eslint-disable-line

    console.info('Crawler event:', event);

    const httpOptions = {
        url: event.url,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
        },
        followOriginalHttpMethod : true
    };

    request(httpOptions,  function (error, response, body) {
        // Only full xpaths are working
        const xpath = event.xpath;

        const parsedHtml = HTMLParser.parse(body);

        const fullXpath = xpathTools.findFullXpath(parsedHtml, xpath);
        if (!fullXpath) {
            callback(null, responseTools.errorResponse("Xpath niet gevonden: " + xpath));
        }
        const cleanedValue = xpathTools.findText(fullXpath);

        if (!event.pricewatchId) {
            console.info('CleanedValue: ' + cleanedValue);
            console.warn('No pricewatchId in event. Saving result skipped')
        } else {

            const payload = {
                value: cleanedValue,
                img: og.getOpenGraphData(body).image,
                pricewatchId: event.pricewatchId,
                label: event.label
            };

            const params = {
                FunctionName: process.env.FUNCTION_PRICEUPDATE_NAME,
                InvocationType: 'Event',
                LogType: 'None',
                Payload: JSON.stringify(payload)
            };

            lambda.invoke(params, function(err, data) {
                if (err) {
                    console.log(err)
                    // context.fail(err);
                } else {
                    console.log(process.env.FUNCTION_PRICEUPDATE_NAME + ' said '+ data.Payload);
                }
                callback(null, responseTools.voidSuccessResponse());
            });
        }
    });

};
