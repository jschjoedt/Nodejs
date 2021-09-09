/*================================================================================
 * GLOBAL VARIALBES
 ================================================================================*/
const axios = require('axios');
const fs = require('fs');
const baseUrl = "https://services.odata.org/V3/Northwind/Northwind.svc/";
const entityName = "Employees";
const url = baseUrl + entityName;
const fileName = 'C:\\Users\\jsch\\Desktop\\' + entityName + '.json';



/*================================================================================
 * FUNCTIONS
 ================================================================================*/
/**
 * Get data from Northwind
 * @param {String} url
 * @returns 
 */
const getData = async(url) => {
  try {
    // Get data from Northwind
    const response = await axios.get(url);

    // return response data to waiting fuction "processData"
    return response.data;

  } catch (error) {
    // Write error to console
    console.log('Error: ' + error);
  }
}


/**
 * Stringify JSON data.
 * @param {String} data 
 * @returns 
 */
const readData = async(data) => {
  // Parse data and return to waiting function "processData"
  return JSON.stringify(data);
}


/**
 * Write JSON data to file. 
 * @param {String} data 
 * @param {String} fileDest 
 * @returns {String} result of fs.writeFile
 */
const writeData = async(data, fileDest) => {
  const result = fs.writeFile(fileDest, data, error => {
    let result;
    if (error) {
      result = error;
    } else {
      result = 'File ' + fileDest + ' is written to disk, happy times!';
    }
    return result;
  });

  // Return result to waiting function "processData"
  return result;
}


/**
 * Main orchestrator function that feches data from Northwind, parses it and writes it to HD.
 * @param {String} url 
 * @returns 
 */
const processData = async(url) => {
  // Get data
  const response = await getData(url);

  // Parse data
  const jsonData = await readData(response);

  // Write data to file
  const result = writeData(jsonData, fileName);

  return result;
}


/*================================================================================
 * MAIN
 ================================================================================*/
console.log(processData(baseUrl));


