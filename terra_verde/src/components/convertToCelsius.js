

function convertToCelicus(temp) {
    console.log("celsius")
    const thirtyTwo = 32;
    let convertedToCelsius = temp.map((tempBase) => { 
        return (
            (tempBase.temp - thirtyTwo)/1.8 
        )
      }); 
    
    
    
    return convertedToCelsius;
}

export default convertToCelicus
