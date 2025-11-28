function blockChain(data, prev = false) {
  console.log(prev)
  const obj = {};
  obj.data = data;

  if (!prev) {
    obj.prev = { index: 0, hash: "0" };
    obj.index = 1;    
    obj.hash = hashCode("" +obj.index+obj.prev.hash+JSON.stringify(obj.data));
  } else {
    obj.prev = prev;
    obj.index = prev.index + 1;
    obj.hash = hashCode(""+obj.index+obj.prev.hash+JSON.stringify(obj.data));
  }

  obj.chain = (data) => blockChain(data, {index:obj.index,hash:obj.hash});

  return obj;
}

const first = blockChain({ a: 1 })
const second = first.chain({ hello: 'world' })

console.log(first)
console.log(second)
