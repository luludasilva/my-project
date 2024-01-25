const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');




const server = express();

// Middleware
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));

const apiRouter = require('./router');
apiRouter(server);



const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
