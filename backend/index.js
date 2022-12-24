const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

const PORT = process.env.PORT || 4000
const app = express();


app.use(cors());
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.use('/', require('./src/routes/index'));


app.listen(PORT, () => console.log(`Escrow server started on port http://0.0.0.0.:${PORT}`))