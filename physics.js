const getAcceleration2=(obj) =>
    (!Number.isNaN(obj.f/obj.m) && obj.m!=0) ? obj.f/obj.m:
    (!Number.isNaN(obj.Δv/obj.Δvt) && obj.Δt!=0) ? obj.Δv/obj.Δv:
    (!Number.isNaN(obj.d*2/obj.t**2) && obj.m!=0) ? 2*obj.d/obj.t**2:"impossble";
