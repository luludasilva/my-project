const mailRouter = require('./mail.router')
const newsRouter = require('./news.router')
const newsUploadRouter = require('./news.uploader.router')

function apiRouter(server) {
    server.use('/mail', mailRouter)
    server.use('/news', newsRouter)
    server.use('/newsUpload', newsUploadRouter)
}

module.exports = apiRouter; 