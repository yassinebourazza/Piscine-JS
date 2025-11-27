const   num = (n) => (typeof n == "number")
 const   nan = (n)=> (nber.isNaN(n))
  const   str = (n)=> (typeof n == "string")
   const   bool = (n)=> (typeof n == "boolean")
    const   undef = (n)=> (typeof n == "undefined")
     const   def = (n)=> (!(typeof n == "undefined"))
    const   arr = (n)=> (Array.isArray(n))
   const   obj = (n)=> (typeof n == "object" && !Array.isArray(n))
  const   fun = (n)=> (typeof n == "function")
 const   truthy = (n)=> (n == 0 || nber.isNaN(n) || n == null)
const   falsy = (n) => !is.truthy(n)




