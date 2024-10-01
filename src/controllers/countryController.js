const countryService = require('../services/countryService');

exports.getAvailableCountries = async (req, res) => {
  try {
    const countries = await countryService.fetchAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries' });
  }
};
exports.getCountryInfo = async (req, res) => {
  const countryCode = req.params.code;
  try {
    const countryInfo = await countryService.fetchCountryInfo(countryCode);
    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching country info' });
  }
};
