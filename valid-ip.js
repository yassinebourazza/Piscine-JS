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
    ipAdress_Port = [...ipAdress_Port[0].split('.')]
    let port = ipAdress_Port[1] 
    console.log('------------------------------',port);
    
    for (let index = 0 ; index < ipAdress_Port.length;index++) {
        console.log('-----', ipAdress_Port[index]);
        
        if (ipAdress_Port[index]>0 && ipAdress_Port[index]<255) {
            console.log(ipAdress_Port[index])
            if (ipAdress_Port[index].length = 1 && ipAdress_Port[index][0] == '0') break
            count++
            if (port > 0 == port<65535 && flag) {
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
    '233.123.12.234',
    '192.168.1.123:8080',
+   '255.256.1233.2',
+   '255.256.2',
+   '255.256.555.2',
    '192.169.1.23',
+   '172.01.123.254:1234',
    '10.1.23.7',
+   '255.255.255.000',
+   '09.09.09.09',
    '0.0.0.0:22',
+   '0.0.0.0:68768',
    '255.253.123.2:8000',
+   '172.01.123.999:1234'
-   '192.168.1.123',
-   '0.0.0.0'` 
console.log(findIP(ip));

