const express = require('express');
const countryRoutes = require('./routes/countryRoutes');

const app = express();
app.use(express.json());

app.use('/api', countryRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
