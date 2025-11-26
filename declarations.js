const escapeStr = "``\\/\"'"
const arr = [4,"2"]
const obj = {
    str:"hello js from the first object",
    num:1,
    bool:true,
    undef:undefined,
}
const nested = {
    arr :[4,undefined,"2"],
    obj:{
        str:"hello js from the second object",
        num:1945,
        bool:true,
    },
}

Object.freeze(obj)
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)