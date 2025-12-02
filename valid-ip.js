function findIP(ip) {
    let result = []
    let iplist = ip.match(/(([0-9]+)\.?){4}:\d+/g)
    
   for (let ipAdress_Port of iplist) {
    ipAdress_Port = ipAdress_Port.split(':')
    let saveIp = ipAdress_Port[0]
    ipAdress_Port = [...ipAdress_Port[0].split('.'),ipAdress_Port[1]]
    for (let index = 0 ; index < ipAdress_Port.length-1;index++) {
        if (ipAdress_Port[index]>0 || ipAdress_Port[index]<255) {
            if (ipAdress_Port[4] > 0 == ipAdress_Port[4]<65535) {
                result.push(saveIp)
                break
            }
        }
    }
   }
    
    return result
}

const ip = `
192.168.0.1
255.255.255.255:80
0.0.0.0:1
127.0.0.1:65535
10.0.0.1:8080
256.100.50.25
192.168.1.01
192.168.1.300
001.2.3.4
192.168.0.1:0
192.168.0.1:70000
192.168.0.1:65536
192.168.0.1:
192.168.0.1:99999
192.168.0.1:-80
abc.def.ghi.jkl
123.123.123
123.123.123.123.123
123.045.067.089
192.168.0.1:22
10.0.0.256
172.16.254.1
172.16.254.1:65535` 
console.log(findIP(ip));
