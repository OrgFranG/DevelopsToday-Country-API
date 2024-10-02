const express = require('express');
const dotenv = require('dotenv');
const countryRoutes = require('./routes/countryRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', countryRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});