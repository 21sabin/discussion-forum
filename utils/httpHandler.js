class HttpHandler {

    success(data, response) {
        response.send(data)
    }

    error(error, response) {
        response.send({error})
    }

}

module.exports = HttpHandler;