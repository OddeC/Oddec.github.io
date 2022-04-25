class InputData {
    constructor(
        //21 total properties for inputData class
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        GyroX,
        GyroY,
        GyroZ

    )   
    {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX= accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.GyroX = GyroX;
        this.GyroY = GyroY;
        this.GyroZ = GyroZ;
    
    }

}

function getData() {
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "/<td>";
    return msg;
}

function updateDisplay(){
 theTime = new Date();
console.log("The Time is: "+ theTime.getHours() + ":"
    + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
    + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
// current time to clocktime on SpacePage.html
 document.getElementById("clockTime").innerHTML = theTime.getHours() + ":"
 + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
 + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds())

 var timeRead = data[index].time_seconds;

 if(timeRead >= 10){
     document.getElementById("data").rows["seconds"].innerHTML  =
     dataRow("Time Elapsed", data[index].time_seconds , "seconds");
     document.getElementById("data").rows["Latitude"].innerHTML  =
     dataRow("Latitude", data[index].Latitude , " ");
     document.getElementById("data").rows["Longitude"].innerHTML  =
     dataRow("Longitude", data[index].Longitude , " ");
     document.getElementById("data").rows["GPSALT"].innerHTML  =
     dataRow("GPS Altitude", data[index].gps_altitude , " ");
     document.getElementById("data").rows["BMPALT"].innerHTML  =
     dataRow("BMP Altitude", data[index].bmpSensor_altitude , " ");
     document.getElementById("data").rows["BMPPRESS"].innerHTML  =
     dataRow("BMP Pressure", data[index].bmpSensor_pressure , " ");
     document.getElementById("data").rows["BMPTEMP"].innerHTML  =
     dataRow("BMP Temperature", data[index].bmpSensor_temp , " ");
     document.getElementById("data").rows["DIGTEMP"].innerHTML  =
     dataRow("Digital Temperature", data[index].digSensor_temp , " ");
     document.getElementById("data").rows["CSSTEMP"].innerHTML  =
     dataRow("CSS Temperature", data[index].cssSensor_temp , " ");
     document.getElementById("data").rows["CSSTEMP"].innerHTML  =
     dataRow("CSS Temperature", data[index].cssSensor_temp , " ");
     document.getElementById("data").rows["CSSCO2"].innerHTML  =
     dataRow("CSS CO2", data[index].cssSensor_eCO2, " ");
     document.getElementById("data").rows["CSSTVOC"].innerHTML  =
     dataRow("CSS TVOC", data[index].cssSensor_TVOC , " ");
     document.getElementById("data").rows["UV"].innerHTML  =
     dataRow("UV", data[index].UV , " ");
     document.getElementById("data").rows["ACCELX"].innerHTML  =
     dataRow("Acceleration in X", data[index].accelX , " ");
     document.getElementById("data").rows["ACCELY"].innerHTML  =
     dataRow("Acceleration in Y", data[index].accelY , " ");
     document.getElementById("data").rows["ACCELZ"].innerHTML  =
     dataRow("Acceleration in Z", data[index].accelZ , " ");
     document.getElementById("data").rows["MAGX"].innerHTML  =
     dataRow("Magnetic Field in X", data[index].magneticX , " ");
     document.getElementById("data").rows["MAGY"].innerHTML  =
     dataRow("Magnetic Field in Y", data[index].magneticY , " ");
     document.getElementById("data").rows["MAGZ"].innerHTML  =
     dataRow("Magnetic Field in Z", data[index].magneticZ , " ");
     document.getElementById("data").rows["GYROX"].innerHTML  =
     dataRow("Rotation Velocity around X", data[index].GyroX , " ");
     document.getElementById("data").rows["GYROY"].innerHTML  =
     dataRow("Rotation Velocity around Y", data[index].GyroY , " ");
     document.getElementById("data").rows["GYROZ"].innerHTML  =
     dataRow("Rotation Velocity around Z", data[index].GyroZ , " ");
     
     if (index < 500){
         index++;
     } else{
         index = 0;
     }
}

}
