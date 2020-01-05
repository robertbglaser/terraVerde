import * as moment from 'moment';


export function ConvertUTC(time, timeZone){
 var convertedTime =[]
 
 for (var x in time){
    convertedTime.push(moment.tz(time[x], timeZone).format('h:mm a')); 
 }
  

return convertedTime;

}