module.exports = {
    voidSuccessResponse: () => {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            },
            body: ''
        }
    },
    errorResponse: (message) => {
        console.error(message)
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            },
            body: {
                message: message
            }
        }
    }

}
