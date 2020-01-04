export function convertToCelsicus(temp) {
    console.log(temp)
    const thirtyTwo = 32;
    var converted = 0;
    let convertedToCelsius =[]
    for (var x in temp){
       converted = (temp[x] - thirtyTwo)/1.8; 
       convertedToCelsius.push(Math.round(converted * 100) / 100); 
        
      }; 
    
    return convertedToCelsius;
}