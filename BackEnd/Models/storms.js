import { ENGINE_METHOD_STORE } from "constants";

export default class Storms{
    constructor(id,eventDate,latitude,longitude,peakCurrent,higherSemiAxis,lowerSemiAxis,azimuth){
        this.id             = id;
        this.eventDate      = eventDate;
        this.latitude       = latitude;
        this.longitude      = longitude;
        this.peakCurrent    = peakCurrent;
        this.higherSemiAxis = higherSemiAxis;
        this.lowerSemiAxis  = lowerSemiAxis;
        this.azimuth        = azimuth;
    }
}