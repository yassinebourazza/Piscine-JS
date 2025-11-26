const escapeStr = "`\/*'"
const arr = [2,"4"]
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

obj.freeze()
nested.freeze()
nested.obj.freeze()