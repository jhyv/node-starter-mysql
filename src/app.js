const env = require('dotenv');

env.config();

const { makeServer } = require('./server');

const serve = async () => {
    try {
        await makeServer();
    } catch (error) {
        console.error(error)
    }
}

serve();