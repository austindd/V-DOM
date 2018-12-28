// Convert each element of an array into a string. Returns a new array.
export const arrayElementsToString = (array = null) => {
    let result = [];
    if (array === null) {
        return null;
    }
    if (array != null && typeof (array) === 'object') {
        result = array.map((item) => {
            item != null ? String(item) : null;
        });
        return result;
    } else {
        console.log("\r\n", "-- [MyUtils.arrayElementsToString] INVALID_ARGUMENT_TYPE_array -- \r\n");
        return false;
    }
};
