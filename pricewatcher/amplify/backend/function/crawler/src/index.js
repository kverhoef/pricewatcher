/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiPricewatcherGraphQLAPIIdOutput = process.env.API_PRICEWATCHER_GRAPHQLAPIIDOUTPUT
var apiPricewatcherGraphQLAPIEndpointOutput = process.env.API_PRICEWATCHER_GRAPHQLAPIENDPOINTOUTPUT
var functionNightlyName = process.env.FUNCTION_NIGHTLY_NAME

Amplify Params - DO NOT EDIT */

const HTMLParser  = require('node-html-parser');
const request = require('request');
const xpathTools = require('./xpath');
const responseTools = require('./response');

exports.handler = function (event, context, callback) { //eslint-disable-line
  // context.done(null, 'Hello World'); // SUCCESS with message

    console.log(event.xpath, event.url);

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
        const firstTextNode = xpathTools.findFirstTextNode(fullXpath);
        if (!firstTextNode) {
            callback(null, responseTools.errorResponse("Geen text node gevonden"));
        }
        const cleanedValue = xpathTools.getValue(firstTextNode);

        // TODO do something with the value
        console.log(cleanedValue);
    });


    callback(null, responseTools.voidSuccessResponse());

};
