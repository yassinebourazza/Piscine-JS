function blockChain(data, prev = false) {
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

  obj.chain = (data) => blockChain(data, obj);

  return obj;
}