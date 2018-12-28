// Accepts a JavaScript object.
// Returns true if object has zero properties of its own (excluding inherited properties).
// Returns false if object has any properties of its own (excluding inherited properties).
export const isEmpty = (obj) => {
    for (let key in obj) {
        obj.hasOwnProperty(key) ? false : true;
    };
};
