function findIP(ip) {
    let result = []
    let flag = false
    let count = 0
    let iplist = ip.match(/(([0-9]+)\.?){4}(:\d+)?/g)
    
   for (let ipAdress_Port of iplist) {
    let saveIp = ipAdress_Port
    ipAdress_Port = ipAdress_Port.split(':')
    
    if (ipAdress_Port[1]) {
        console.log(ipAdress_Port[1]);
        flag = true
    }
    console.log(ipAdress_Port, flag);
    ipAdress_Port = [...ipAdress_Port[0].split('.'),ipAdress_Port[1]]
    for (let index = 0 ; index < ipAdress_Port.length-1;index++) {
        if (ipAdress_Port[index]>0 || ipAdress_Port[index]<255) {
            count++
            if (ipAdress_Port[4] > 0 == ipAdress_Port[4]<65535 && flag) {
                result.push(saveIp)
                break
            }
            if (count == 4) {
                result.push(saveIp)
                count=0
            }
        }
    }
    flag = false
   }
    
    return result
}

const ip = `
-   '233.123.12.234',
-   '192.168.1.123:8080',
-   '192.169.1.23',
-   '10.1.23.7',
-   '0.0.0.0:22',
-   '255.253.123.2:8000',
    '192.168.1.123',
+   '172.01.123.254',
    '0.0.0.0',
+   '255.253.123.2',
+   '172.01.123.999'` 
console.log(findIP(ip));
