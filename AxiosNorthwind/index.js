const axios = require('axios');

(async () => {
  try {
    const response = await axios.get("https://services.odata.org/V3/Northwind/Northwind.svc/Customers('ALFKI')");
    console.log(response.data.ContactName);
  } catch (error) {
    console.log('Error: ' + error);
  }
})();