import * as moment from 'moment';
import "moment-timezone";


export function ConvertUTC(time, timeZone){
  
 var convertedTime =[]
 
 for (var x in time){
    
    convertedTime.push(moment.tz(time[x], timeZone).format('MM/DD/YYYY hh:mm a')); 
 }
  

return convertedTime;

}