/**
 * Throw an error to test it :-)
 * @param {String} errorMessage An error message that you want to throw
 * @throws Error
 */
const throwAnError = (errorMessage) => {

    throw Error(errorMessage);
}



/*======================================================
** MAIN LOGIC
*======================================================*/
try {
    // Call function that throws an error
    throwAnError("Happy error message!");
} catch (error) {
    console.log("An error has occured: " + error.message);
}