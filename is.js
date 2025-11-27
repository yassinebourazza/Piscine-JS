
   const is = {}
   is.num = (n) => (typeof n == "number")
    is.nan = (n)=> (Number.isNaN(n))
     is.str = (n)=> (typeof n == "string")
      is.bool = (n)=> (typeof n == "boolean")
       is.undef = (n)=> (typeof n == "undefined")
        is.def = (n)=> (!(typeof n == "undefined"))
       is.arr = (n)=> (Array.isArray(n))
      is.obj = (n)=> (typeof n == "object" && !Array.isArray(n) && n != null)
     is.fun = (n)=> (typeof n == "function")
    is.truthy = (n)=> (n == 0 || nber.isNaN(n) || n == null)
   is.falsy = (n) => !is.truthy(n)

 const v =  [
  {},
  { length: 10 },
  Object.create(null),
  null   // ← هذا الزايد
]

for (i of v) {
    console.log(is.obj(i))
}