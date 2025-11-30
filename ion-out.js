const ionOut = (str) => str.replace(/(?<=(t))ion/g,'').match(/[^, ]+/g)

