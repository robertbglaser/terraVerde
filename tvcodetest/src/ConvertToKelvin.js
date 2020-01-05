function convertToKelvin(temp) {

    const fourHundredFiftyNine = 459.67;
    var converted = 0;
    let convertedToKelvin =[];
    
    for (var x in temp){
       converted = (temp[x] + fourHundredFiftyNine) * 0.555555555; 
       convertedToKelvin.push(Math.round(converted * 100) / 100); 
        
      }; 
    
    return convertedToKelvin;
}

export default convertToKelvin   