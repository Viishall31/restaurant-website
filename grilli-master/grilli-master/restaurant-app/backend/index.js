const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// ✅ Correctly import route
const reservationRoute = require('./routes/reservation'); // not './routes/reservation.js' if using require()

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public'));

app.use('/api', reservationRoute); // this must be a function

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
