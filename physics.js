function getAcceleration(obj) {
    if (obj.f !== undefined && obj.m != undefined && obj.m != 0) {
        return obj.f/obj.m
    } else if (obj.Δv !== undefined && obj.Δt != undefined && obj.Δt != 0) {
        return obj.Δv/obj.Δt
    } else if (obj.d !== undefined && obj.t != undefined && obj.t != 0) {
        return (obj.d)/(obj.t*2)
    } else {
        return "impossible"
    }
}
