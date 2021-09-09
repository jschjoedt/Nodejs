/**
 * Throw an error to test it :-)
 * @param {String} errorMessage An error message that you want to throw
 */
const throwAnError = (errorMessage) => {

    throw Error(errorMessage);
}



/*======================================================
** MAIN LOGIC
*======================================================*/
try {
    throwAnError("Happy error message!");
} catch (error) {
    console.log("An error has occured: " + error.message);
}