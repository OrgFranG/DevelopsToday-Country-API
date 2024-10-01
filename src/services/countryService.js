const axios = require('axios');

exports.fetchAvailableCountries = async () => {
  try {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries')
    return response.data;
  } catch (error) {
    throw new Error('Error fetching available countries');
  }
};

exports.fetchCountryInfo = async (countryCode) => {
  try {
    const countryInfoResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
    const countryInfo = countryInfoResponse.data;
    
    const populationResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
      country: countryInfo.commonName
    });
    const populationData = populationResponse.data.data;

    const flagResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
      country: countryInfo.commonName
    });
    const flagUrl = flagResponse.data.data.flag;

    return {
      borderCountries: countryInfo.borders,
      populationData,
      flagUrl
    };
  } catch (error) {
    throw new Error('Error fetching country info');
  }
};
