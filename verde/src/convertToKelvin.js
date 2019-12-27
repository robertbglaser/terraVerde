function convertToKelvin(temp) {

    console.log("kelvin")
    const fourHundredFiftyNine = 459.67;
    let convertedToKelvin = temp.map((tempBase) => { 
        return (
            ((tempBase.temp + fourHundredFiftyNine) * 0.555555555) 
        )
      }); 
    
    console.log(convertedToKelvin)
    
    return convertedToKelvin;
}

export default convertToKelvin
