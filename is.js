function is(prop) {
     if (Number.isNaN(prop)) {
        return NaN
    } else if (typeof prop == "number") {
        return "number"
    } else if (typeof prop == "string") {
        return "string"
    } else if (typeof prop == "boolean") {
        return "boolean"
    } else if (typeof prop == "undefined") {
        return "undefined"
    } else if (Array.isArray(prop)) {
        return "array"
    } else if (typeof prop == "object") {
        return "object"
    } 
}

console.log(is(55));
console.log(is("gf"*1));
console.log(is("gf"));
console.log(is(""));
console.log(is([1,5,4]));
console.log(is(null));
console.log(is({arr:5}));
