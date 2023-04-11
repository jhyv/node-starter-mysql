const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

async function makeServer() {
    try {
        const PORT = process.env.APP_PORT || 3000;
        const app = express();

        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        app.use(upload.array());

        // SET LOGGING MODE
        process.env.NODE_ENV !== 'test' &&
            app.use(morgan(process.env.APP_MORGAN_LOG_FORMAT || 'combined'));

  
        // REGISTER ROUTES
        routes.forEach((route) => {
            app.use(route.url, route.router);
        })
        
        app.all('*', (req, res, next) => {
            res.status(405).json({ success: false, data: { error: 'Not allowed' } });
        })

        const server = app.listen(PORT, () => {
            process.env.NODE_ENV !== 'test' &&
                console.log(`Server started on PORT: ${PORT}`);
        })

        return server;
    } catch (error) {
        throw new Error(`Cannot initialize server: ${error}`)
    }
}

module.exports = { makeServer }