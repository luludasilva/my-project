const mailRouter = require('./mail.router')


function apiRouter(server) {
    server.use('/mail', mailRouter)

}

module.exports = apiRouter; 