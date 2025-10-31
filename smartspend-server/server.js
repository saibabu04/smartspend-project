const express = require('express');

const cors = require('cors');

const dotenv = require('dotenv');



// Load environment variables (like PORT)

dotenv.config();



const app = express();

// We'll run the backend on port 5000

const PORT = process.env.PORT || 5000;



// --- Middleware Setup ---

// 1. CORS: Allows your React app on port 3000 to send requests to this server.

app.use(cors({ origin: 'http://localhost:3000' }));

// 2. Body Parser: Allows Express to read JSON data sent in requests.

app.use(express.json());



// --- Test Route ---

// Hitting 'http://localhost:5000/' will show this message

app.get('/', (req, res) => {

    res.status(200).json({

        message: 'SmartSpend Backend API operational.'

    });

});



// Example API Endpoint (For the React Frontend to consume)

// React will call '/api/test-data' and the proxy directs it here.

app.get('/api/test-data', (req, res) => {

    res.status(200).json({

        status: 'OK',

        data: { value: 42, source: 'Node.js Backend' }

    });

});



// --- Start Server ---

app.listen(PORT, () => {

    console.log(`Server is listening on port ${PORT}`);

});