const hashCode = str =>
(
  [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
).toString(36)


function blockChain(data, prev = false) {
  
  const obj = {};
  obj.data = data;

  if (!prev) {
    obj.prev = { index: 0, hash: "0" };
    obj.index = 1;
    obj.hash = hashCode("" +obj.index+prev.hash+JSON.stringify(obj.data));
  } else {
    obj.prev = prev;
    obj.index = prev.index + 1;
    obj.hash = hashCode(""+obj.index+prev.hash+JSON.stringify(obj.data));
  }

  obj.chain = (data) => blockChain(data, prev);

  return obj;
}

const first = blockChain({ a: 1 })
const second = first.chain({ hello: 'world' })

console.log(first)
console.log(second)
